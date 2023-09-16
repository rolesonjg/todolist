function login() {
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    if (username === 'admin' && password === '12345') {
        // Successful login, show the main page

        const form = document.querySelector(".myform");
        form.action = "./main.html"; // Change to your desired URL

    } else {
        alert('Invalid credentials. Please try again.');
        const form = document.querySelector(".myform");
        form.action = "./index.html"
    }
}






