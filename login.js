function login() {
    var username = document.getElementById('name').value;
    var password = document.getElementById('password').value;
    if (username === 'yammanurusravani@gmail.com' && password === 'Password') {
        document.getElementById('message').textContent = 'Login successful!';
    } else {
        document.getElementById('message').textContent = 'Invalid username or password. Please try again.';
    }
}

function login1() {
    var username = document.getElementById('.name').value;
    var password = document.getElementById('.password').value;
    if (username === 'yammanurusravani@gmail.com' && password === 'Password') {
        document.getElementById('.message').textContent = 'Login successful!';
    } else {
        document.getElementById('.message').textContent = 'Invalid username or password. Please try again.';
    }
}