// run app when DOM loaded; London time zone is default;
document.addEventListener('DOMContentLoaded', function(){
    createSpans();
});
// click events for main navigation;
document.getElementById('navigation').addEventListener('click', function(e){
    const current = e.target;
    // prevent if active already;
    if(current.classList.contains('active-nav')){
        e.preventDefault();
    }else {
        document.querySelector('.active-nav').classList.remove('active-nav');
        current.classList.add('active-nav');
    }
})