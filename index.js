const url = "https://5fc1a1c9cb4d020016fe6b07.mockapi.io/api/v1/login";



$(document).ready(() => {

    
// Check Local Storage & Re-direct Webpage
localStorage.getItem('login') && window.location.replace('./orders.html');



// Login Form Submit 
$("#login-form").submit((e) => {
    e.preventDefault();

    // Store Form Value
    let userName = $("#userName").val();
    let password = $("#password").val();

    
    if(userName === password) {

        
        $.post(url, {username: userName, password: password}, () => {

            
            localStorage.setItem('login', JSON.stringify(true));
            alert('login Successful');
            window.location.href = './orders.html';
        });
    } 
    
    else {
        alert('please enter valid credentials');
    }

});



});
