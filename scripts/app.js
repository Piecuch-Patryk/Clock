// run app when DOM loaded; London time zone is default;
document.addEventListener('DOMContentLoaded', function(){
   setInterval(function defaultZone(){
       getTime();
   }, 1000);
});