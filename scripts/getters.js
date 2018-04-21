// require current server time; use string to determinate which time zone;
const actualTimeDate = function(str){    
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function(){
        // if response ready;
        if(this.readyState == 4 && this.status == 200){
            const currentTimeDate = JSON.parse(this.responseText);
            console.log(currentTimeDate);
            
        }
    }
    // open new request to database;
    xmlhttp.open('GET', './time-date.php', true);
    // send created request to server;
    xmlhttp.send();
}