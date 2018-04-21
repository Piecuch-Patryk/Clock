// require current server time; use string to determinate which time zone;
const actualTimeDate = function(str, zoneName){
    const day = document.getElementById('day'),
          date = document.getElementById('date');
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function(){
        // if response ready;
        if(this.readyState == 4 && this.status == 200){
            const currentTimeDate = JSON.parse(this.responseText);
            if(currentTimeDate){
                // get actual date;
                if(str === 'date'){
                    day.innerHTML = currentTimeDate[0];
                    date.innerHTML = currentTimeDate[1];
                }
                if(str === 'both'){
                    day.innerHTML = currentTimeDate[0];
                    date.innerHTML = currentTimeDate[1];
                    // increase values; calibrate time every five minutes;
                    increaseTime(currentTimeDate[2]);
                }
                else {
                    // increase values; calibrate time every five minutes;
                    increaseTime(currentTimeDate[2]);
                }
            }
        }
    }
    // open new request to database;
    xmlhttp.open('GET', './time-date.php?time-zone=' + zoneName, true);
    // send created request to server;
    xmlhttp.send();
}


