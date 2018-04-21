// append current time into the DOM elements; #clock;
function setClockInner(array){
    const clock = document.getElementById('clock');
    // reset clock html;
    clock.innerHTML = '';
    // append all elements to clock container;
    for(let i = 0; i < array.length; i++){
        clock.appendChild(array[i]);
    }
}