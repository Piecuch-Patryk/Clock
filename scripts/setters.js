// increase time locally and calibrate with server every minute;
const increaseTime = function(el){
    const array = el.split(':');
    var hours = Number(array[0]),
        minutes = Number(array[1]),
        seconds = Number(array[2]);
    
    console.log(hours + ':' + minutes + ':' + seconds);
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
            actualTimeDate('date');
            h = '00';
        }
        // create current time to display;
        const actualTime = `${h}:${m}:${s}`;
        // place time in DOM;
        document.getElementById('time').innerHTML = actualTime;
    }, 1000);
    // calibrate every minute;
    setTimeout(function calibrateTime(){
        // stop increasing;
        clearInterval(counter)
        // get time and start increasing from there;
        actualTimeDate();
    }, 60000);
}
