// validate login;
const loginVal = function (e){
    const $login = $('input[name=login]').val(),
          regex = new RegExp("^[a-zA-Z0-9]+$");

    // login not empty; alphanumeric characters only;
    if ($login == '' || !regex.test($login)){
        return false;
    }else {
        return $login; 
    }
}
// validate password;
const passVal = function (){
    const $pass = $('input[name=pass]').val(),
          regex = new RegExp('^[a-zA-Z0-9]+$');
    // password not empty; validate password;
    if ($pass == '' || !regex.test($pass)){
        return false;
    }
    return $pass;
}
// show div;
function addDiv(){
    const $el = $('.warning-message');
    $($el).addClass('visible');
}
// hide div;
function removeDiv (){
    const $el = $('.warning-message');
    $($el).removeClass('visible');
}
// warning massage!
function warningMessage (bool){
    // show message;
    if (!bool){
        addDiv();
    } else{
        // hide message;
        removeDiv();
    }
}
// validate inputs dunamically;
function dynamicallyValidate(e){
    // check if the last key is alphanumeric both, lower and upper case;
    const regex = new RegExp('^[a-zA-Z0-9]+$'),
          key = e.key;
    
    // password not epmty; validate password;
    if (!regex.test(key)){
        e.preventDefault();
        warningMessage(false);
    }else {
        warningMessage(true);
    }
}

$(document).ready(function(){
    $('#submit').on('click', function(e){
        // disable form submit;
        e.preventDefault();
        // validate login and password, connect with db if positive;
        if (loginVal() === false || passVal() === false){
            $('.warning-message').addClass('visible');
            return;
        } else {
            const login = $('input[name=login]').val(),
                  pass = $('input[name=pass]').val(),
                  radio = $('input[type=radio]').val();
            let radioVal = '';
            if (radio == 'student'){
                radioVal = 'students';
            }
            if (radio == 'parent'){
                radioVal = 'parents';
            }
            if (radio == 'teacher'){
                radioVal = 'teachers';
            }
            // go to server side to validate login and password and connect to db;
            $.post('../main-page/login.php', {
                login: login,
                pass: pass
            }, function() {
                    sessionStorage.setItem("login", login);
                    window.location.href = '../' + radioVal + '/';
            });
        }
    });
    // validate inputs dynamically;
    $('#login-form input').on('keydown', dynamicallyValidate);
});