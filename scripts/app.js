// run app when DOM loaded; London time zone is default;
document.addEventListener('DOMContentLoaded', function(){
    // create structure for time&date;
    createSpans();
});
// click events for main navigation;
document.querySelector('#navigation').addEventListener('click', function(e){
    const current = e.target;
    // prevent if active already;
    if(current.classList.contains('active-nav')){
        e.preventDefault();
    }else {
        // do something only when <li> element clicked;
        if(e.toElement.tagName === 'LI'){
            // change active nav element;
            document.querySelector('.active-nav').classList.remove('active-nav');
            current.classList.add('active-nav');
            // set choosen title;
            setZoneTitle(current.textContent);
            // get new time&date depending on choosen time zone;
            actualTimeDate('both', current.textContent)
        }
    }
})