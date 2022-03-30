const form = document.getElementById('username');
const username = document.getElementById('email');
const email = document.getElementById('password');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');

// Show input error message
function showError(input, message){
    
}

//Event Listeners
form.addEventListener('submit', function(e) {
    e.preventDefault();
    
    
    
    if (username.value === '') {
        showError(username, 'Username is required');
    } else {
        showSuccess(username);
    }
    
});

