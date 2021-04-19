
$('.card-title:first').load('https://aaalyo.github.io/Final-project/bob.html h6');
$('.card-title:nth(1)').load('https://aaalyo.github.io/Final-project/cole-marmalade.html h6');
$('.card-title:last').load('https://aaalyo.github.io/Final-project/hamilton.html h6');

$('.card-title-pg-2:first').load('https://aaalyo.github.io/Final-project/colonel-meow.html h6');
$('.card-title-pg-2:nth(1)').load('https://aaalyo.github.io/Final-project/garfi.html h6');
$('.card-title-pg-2:last').load('https://aaalyo.github.io/Final-project/grumpy.html h6');

$('.card-title-pg-3:first').load('https://aaalyo.github.io/Final-project/lil-bub.html h6');
$('.card-title-pg-3:nth(1)').load('https://aaalyo.github.io/Final-project/maru.html h6');
$('.card-title-pg-3:last').load('https://aaalyo.github.io/Final-project/nala.html h6');

$('.card-title-pg-4:first').load('https://aaalyo.github.io/Final-project/orangey.html h6');

$('.card-text:first').load('https://aaalyo.github.io/Final-project/bob.html p');
$('.card-text:nth(1)').load('https://aaalyo.github.io/Final-project/cole-marmalade.html p');
$('.card-text:last').load('https://aaalyo.github.io/Final-project/hamilton.html p');

$('.card-text-pg-2:first').load('https://aaalyo.github.io/Final-project/colonel-meow.html p');
$('.card-text-pg-2:nth(1)').load('https://aaalyo.github.io/Final-project/garfi.html p');
$('.card-text-pg-2:last').load('https://aaalyo.github.io/Final-project/grumpy.html p');

$('.card-text-pg-3:first').load('https://aaalyo.github.io/Final-project/lil-bub.html p');
$('.card-text-pg-3:nth(1)').load('https://aaalyo.github.io/Final-project/maru.html p');
$('.card-text-pg-3:last').load('https://aaalyo.github.io/Final-project/nala.html p');

$('.card-text-pg-4:first').load('https://aaalyo.github.io/Final-project/orangey.html p');



$('.card-image:first').load('https://aaalyo.github.io/Final-project/hamilton.html .image-load(src)');




$('.chat-send').click(function (event) {
    event.preventDefault();
    const username = $('#username').val();
    const message = $('#message').val();
    let date = new Date();
    let options = {
        weekday: "long", year: "numeric", month: "short", day: "numeric", hour: "2-digit", minute: "2-digit"
    };
    

   

    if (username === '') {
        alert('Please enter your name');
        return;
    };
    if (message === '') {
        alert('Please enter your message');
        return;
    };

    const newListElement = `
    <li class="chat-message alert alert-warning p-1 mt-3 me-3"> 
     <span class="card-title m-0">${username}</span> 
     <span class="card-text text-secondary" id="datetime">at ${date.toLocaleString(options)}</span>
     <p class="text-break m-0">${message}</p>  
    </li>`;



    $('.chat-field').append(newListElement);
    $('#username').val('');
    $('#message').val('');



});





$('#register').submit(function (event) {

    if ($('#username').val() === '') {

        $('.please-enter').html('Please enter username!');
        event.preventDefault();
    };

    if ($('#password1').val() === '') {

        $('.please-enter').html('Please enter password!');
        event.preventDefault();
    };

    if ($('#password2').val() === '') {

        $('.please-enter').html('Please retype password!');
        event.preventDefault();
    };

    if ($('#password1').val() !== $('#password2').val()) {

        $('.please-enter').html('Passwords do not match!');
        event.preventDefault();
    };

    if ($('#fname').val() === '') {

        $('.please-enter').html('Please enter your name!');
        event.preventDefault();
    };

    if ($('#country-select').val() === '') {

        $('.please-enter').html('Please please select country!');
        event.preventDefault();
    };

    if ($('#checkbox:checked').length === 0) {

        $('.please-enter').html('Please read the terms and conditions!');
        event.preventDefault();
    };




})





