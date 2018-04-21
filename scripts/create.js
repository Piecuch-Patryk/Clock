// create current time & date objects;
function setTimeDate(array){
    const spanTime = document.createElement('span'),
          spanDay = document.createElement('span'),
          spanDate = document.createElement('span'),
          time = document.createTextNode(array[2]),
          day = document.createTextNode(array[0]),
          date = document.createTextNode(array[1]);
    // prepare span elements with time&date;
    spanTime.classList.add('spanTime');
    spanTime.appendChild(time);
    spanDay.classList.add('spanDay');
    spanDay.appendChild(day);
    spanDate.classList.add('spanDate');
    spanDate.appendChild(date);
    // actual time&date wrapped with span;
    const actualTimeArray = [spanDay, spanDate, spanTime];    
    
    console.log(actualTimeArray);
    
    setClockInner(actualTimeArray);
}