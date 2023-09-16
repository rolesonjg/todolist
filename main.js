//navbar inside 

function login() {
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    if (username === 'admin' && password === '12345') {
        // Successful login, show the main page
        document.getElementById('loginPage').style.display = 'none';
        document.getElementById('mainPage').style.display = 'block';
    } else {
        alert('Invalid credentials. Please try again.');
    }
}





// Function to load the todo list from the API
async function loadTodoList() {
    const data = await fetch('https://jsonplaceholder.typicode.com/todos')
        .then(response => response.json())
        .catch(error => console.error('Error loading todo list: ' + error));

    // Clear the content div before loading new content
    var content = document.getElementById('content');
    content.innerHTML = '';

    // Create a list for the todo items
    var ul = document.createElement('ul');

    var completedTaskCount = 0; // Initialize a counter for completed tasks

    data.forEach(task => {
        var li = document.createElement('li');
        var checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.checked = false; // Set checkbox state to false by default


        // Add an event listener to the checkbox to track completion
        checkbox.addEventListener('change', function () {
            if (checkbox.checked) {
                completedTaskCount++;
                if (completedTaskCount === 5) {
                    alert('Congratulations! You have completed 5 tasks.');

                }
            } else {
                completedTaskCount--;
            }
        });

        // Set the task title as the label for the checkbox
        var label = document.createElement('label');
        label.classList.add("labelofthedom")
        li.classList.add("liofthedom")
        label.textContent = task.title;
        li.appendChild(label);

        li.appendChild(checkbox);
        ul.appendChild(li);
    });

    // Append the todo list to the content div
    content.appendChild(ul);
    content.classList.add('contentofthedom')
}


// Function to log out and redirect to the login page
function logout() {

    location.reload();
    window.location.href = "./index.html";
}