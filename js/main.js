
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
    if ($('#password1').val() !== $('#password2').val()) {
        alert('Passwords do not match!');
        event.preventDefault();
    };
});



function timeSince(date) {
    
    var seconds = Math.floor((new Date() - date) / 1000);


    var interval = seconds / 31536000;

    if (interval > 1) {
        return Math.floor(interval) + " years";
    }
    interval = seconds / 2592000;
    if (interval > 1) {
        return Math.floor(interval) + " months";
    }
    interval = seconds / 86400;
    if (interval > 1) {
        return Math.floor(interval) + " days";
    }
    interval = seconds / 3600;
    if (interval > 1) {
        return Math.floor(interval) + " hours";
    }
    interval = seconds / 60;
    if (interval > 1) {
        return Math.floor(interval) + " minutes";
    }
    return Math.floor(seconds) + " seconds";
}

var aDay = 24 * 60 * 60 * 1000;
console.log(timeSince(new Date(Date.now() - aDay)));
console.log(timeSince(new Date(Date.now() - aDay * 2)));

$('.date-loaded-card-1').load('https://aaalyo.github.io/Final-project/bob.html h5');
date1 = $('.date-loaded-card-1').html();
$('.text-muted-card-1').html(timeSince(date1) + ' ago');

$('.date-loaded-card-2').load('https://aaalyo.github.io/Final-project/cole-marmalade.html h5');
date2 = $('.date-loaded-card-2').html();
$('.text-muted-card-2').html(timeSince(date2) + ' ago');

$('.date-loaded-card-3').load('https://aaalyo.github.io/Final-project/hamilton.html h5');
date3 = $('.date-loaded-card-3').html();
$('.text-muted-card-3').html(timeSince(date3) + ' ago');




