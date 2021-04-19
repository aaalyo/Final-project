
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
    if (username === '') {
        alert('Please enter your name');
        return;
    };
    if (message === '') {
        alert('Please enter your message');
        return;
    };
    
    const newListElement = `
    <li> 
     <span class="card-title">${username}</span> 
     <span class="card-text">${message}</span>  
    </li>`;

$('.chat-field').append(newListElement);
$('#username').val('');
$('#message').val('');


});




