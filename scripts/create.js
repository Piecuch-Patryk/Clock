// create current time & date objects;
function createSpans(){
    const spanTime = document.createElement('span'),
          spanDay = document.createElement('span'),
          spanDate = document.createElement('span'),
          clockContainer = document.getElementById('clock');
    // prepare span elements;
    spanTime.classList.add('spanTime');
    spanTime.setAttribute('id', 'time');
    spanDay.classList.add('spanDay');
    spanDay.setAttribute('id', 'day');
    spanDate.classList.add('spanDate');
    spanDate.setAttribute('id', 'date');
    // append to clock container;
    clockContainer.appendChild(spanDay);
    clockContainer.appendChild(spanDate);
    clockContainer.appendChild(spanTime);
    // get actual server time; London/Europe default;
    actualTimeDate('both');
}