// console.log(localStorage.data)
// var data = JSON.parse(localStorage["data"]); 


var $txtInfo = $('#txtInfo')
var $txtPrice = $('#txtPrice')


$('#btn-your-vehicle-continue').on('click', e => {
    $('#popup').show();
    $('#form-send').show()
    $('#form-loginn').hide();
    $('#form-signup').hide();
})

$('*[data-cy="signup-btn"]').on('click', e => {
    $('#popup').show();
    $('#form-send').hide()
    $('#form-signup').show();
    $('#form-login').hide();
})

$('*[data-cy="login-btn"]').on('click', e => {
    $('#popup').show();
    $('#form-send').hide()
    $('#form-signup').hide();
    $('#form-login').show();
})

$('#select-color').on('change', e => {
    if (e.target.value == "other") {
        $('#input-color').show();
    }
})

$('*[data-cy="login-submit-send-btn"]').on('click', e => {
    $('#price-block').show()
    $('#popup').hide()
    $('#form-input-infor').hide()
    document.documentElement.scrollTop = 0;
})