$(function($){
    // increase time locally and calibrate with server every minute;
    const increaseTime = function(el){
        console.log(el);
        var hours = Number(el.split(':').splice(0,1)),
            minutes = Number(el.split(':').splice(1,1)),
            seconds = Number(el.split(':').splice(2,1));
        // increase time;
        var counter = setInterval(function(){
            // these variables are cleared every second, important;
            let h = '',
                m = '',
                s = '';

            if(seconds < 60){
                seconds++
                s = seconds;
            }
            if(minutes < 60 && seconds === 60){
                seconds = 0;
                s = '00';
                minutes++
                m = minutes;
            }
            if(seconds <= 9){
                s = `0${seconds}`;
            }
            if(minutes <= 9){
                m = `0${minutes}`;
            }else {
                m = minutes;
            }
            if(hours < 24 && minutes === 60){
                minutes = 0;
                m = '00';
                hours++;
                h = hours;
            }
            if(hours <= 9){
                h = `0${hours}`;
            }else {
                h = hours;
            }
            if(hours === 23 && minutes === 60){
                // get new date at midnight;
                dateTime('date');
                h = '00';
            }
            // create current time to display;
            const actualTime = `${h}:${m}:${s}`;
            // place time in DOM;
            $('#time').html(actualTime);
        }, 1000);
        // calibrate every minute;
        setTimeout(function calibrateTime(){
            // stop increasing;
            clearInterval(counter)
            // get time and start increasing from there;
            dateTime();
        }, 60000);
        
    }
    // get server time and date;
    const dateTime = function(str){
        // new request object;
        var xmlhttp = new XMLHttpRequest();
        xmlhttp.onreadystatechange = function(){
            // is response ready;
            if(this.readyState == 4 && this.status == 200){
                const actualTime = $.parseJSON(this.responseText);
                // get actual date;
                if(str === 'date'){
                    $('#date').html(actualTime[0]);
                }
                if(str === 'both'){
                    $('#date').html(actualTime[0]);
                    // increase values; calibrate time every minute;
                    increaseTime(actualTime[1]);
                }
                else {
                    // increase values; calibrate time every minute;
                    increaseTime(actualTime[1]);
                }
            }
        }
        // open new request to database;
        xmlhttp.open('GET', '../fixed-content/date-time.php');
        // send created request to server;
        xmlhttp.send();
    }
    // create clock container;
    const container = function(){
        const $container = $('#clock'),
              $div = $("<div class='w-100'></div>");
        // create two <p> for date and time;
        for(var i = 0; i < 2; i++){
            const $p = $("<p class='m-0'></p>");
            // add different id to each <p>;
            if(i === 0){
                $($p).attr('id', 'date');
            }else {
                $($p).attr('id', 'time');
            }
            $($div).append($p);
        }
        $($container).append($div);
        // get time and date from server every second;
        dateTime('both');
//        increaseTime('07:59:57');
    }
    // run app;
    container();
});