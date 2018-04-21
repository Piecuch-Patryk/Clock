// require current server time; use string to determinate which time zone;
const actualTimeDate = function(str){
    const day = document.getElementById('day'),
          date = document.getElementById('date');
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function(){
        // if response ready;
        if(this.readyState == 4 && this.status == 200){
            const currentTimeDate = JSON.parse(this.responseText);
            console.log(currentTimeDate);
            // get actual date;
            if(str === 'date'){
                day.innerHTML = currentTimeDate[0];
                date.innerHTML = currentTimeDate[1];
            }
            if(str === 'both'){
                day.innerHTML = currentTimeDate[0];
                date.innerHTML = currentTimeDate[1];
                // increase values; calibrate time every minute;
                increaseTime(currentTimeDate[2]);
            }
            else {
                // increase values; calibrate time every minute;
                increaseTime(currentTimeDate[2]);
            }
        }
    }
    // open new request to database;
    xmlhttp.open('GET', './time-date.php', true);
    // set header;
    xmlhttp.setRequestHeader('time-zone', str);
    // send created request to server;
    xmlhttp.send();
}
// set current time zone title and subtitle;

// get choosen time zone data;
const getNewTimeZone = function(str){
    // use ajax to update time&date;
    
    
    console.log();
}



