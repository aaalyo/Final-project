
$('.card-title:first').load('https://aaalyo.github.io/Final-project/bob.html h6');
$('.card-title:nth(1)').load('https://aaalyo.github.io/Final-project/cole-marmalade.html h6');
$('.card-title:last').load('https://aaalyo.github.io/Final-project/hamilton.html h6');

$('.card-text:first').load('https://aaalyo.github.io/Final-project/bob.html p');
$('.card-text:nth(1)').load('https://aaalyo.github.io/Final-project/cole-marmalade.html p');
$('.card-text:last').load('https://aaalyo.github.io/Final-project/hamilton.html p');

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




