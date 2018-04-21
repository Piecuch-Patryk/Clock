$(function($){
    // fetch all photos from database;
    const photos = function(){
        // create new request;
        const xmlhttp = new XMLHttpRequest();
        // response;
        xmlhttp.onreadystatechange = function(){
            // success;
            if(this.readyState === 4 && this.status === 200){
                const photosArray = $.parseJSON(this.responseText);
                console.log(photosArray.path);
                const picture = `<img class="w-100" src="${photosArray.path}" alt="Photo description">`;
                $('#pictures div div').html(picture)
            }
        }
        // open request;
        xmlhttp.open('POST', '../photos/get-photos.php', true);
        // send request;
        xmlhttp.send();
    }
    photos();
});