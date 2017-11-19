// zegarek z data;  --- start when DOM loaded ---
document.addEventListener("DOMContentLoaded", function () {
    // refresh clock every second;
    setInterval(getTime, 1000);
})
// get actual time;
function getTime() {
    // get actual date object;
    var date = new Date()
    // get hour;
    var hour = date.getHours();
    // get minute;
    var minute = date.getMinutes();
    // get second;
    var second = date.getSeconds();

    // make sure to set new numbers always with two digits;
    if (hour < 10) {
        hour = "0" + hour;
    }
    if (minute < 10) {
        minute = "0" + minute;
    }
    if (second < 10) {
        second = "0" + second
    }
    // set refreshed time;
    var newTime = hour + ":" + minute + ":" + second;
    // call function getDate;
    getDate(newTime);
}
// get actual date;
function getDate(el) {
    // get actual date object;
    var date = new Date();
    // get year(nr);
    var year = date.getFullYear();
    // get month(nr); --- +1, because starts from 0 index;
    var month = date.getMonth() + 1;
    var dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    // get day(string);
    var day = dayNames[date.getDay()];

    // make sure to set number always with two digits;
    if (month < 10) {
        month = "0" + month;
    }
    if (day < 10) {
        day = "0" + day;
    }
    // set new date;
    var newDate = year + "/" + month + "</br>" + day;
    // call function to concacenate strings;
    refreshClock(el, newDate);
}
// merge strings to change innerHtml;
function refreshClock(time, date) {
    var actualTime = date + "</br>" + time;
    // call function to change innerHtml in div#clock;
    //    console.log(actualTime)
    changeInner(actualTime);
}
// change innerHtml for div#clock;
function changeInner(el) {
    // get div#clock to change innerHtml;
    var divToChange = document.getElementById("clock");
    divToChange.innerHTML = el;
    //    console.log()
}
