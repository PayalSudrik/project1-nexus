const users = []; // Array to store registered users

function validateLogin() {
    const loginUsername = document.getElementById('loginUsername').value;
    const loginPassword = document.getElementById('loginPassword').value;

    // Check if the user is registered
    const userExists = users.find(user => user.username === loginUsername && user.password === loginPassword);

    if (userExists) {
        alert('Login successful');
    } else {
        alert('Invalid credentials. Please sign up.');
        showSignupForm();
    }
}

function validateSignup() {
    const signupUsername = document.getElementById('signupUsername').value;
    const signupPassword = document.getElementById('signupPassword').value;
    const confirmPassword = document.getElementById('confirmPassword').value;

    // Username validation: Check if the username is not already taken
    const usernameExists = users.find(user => user.username === signupUsername);

    // Password validation: Minimum 8 characters
    const minPasswordLength = 8;

    if (usernameExists) {
        alert('Username already taken. Please choose a different one.');
    } else if (!signupUsername) {
        alert('Please enter a username');
    } else if (!signupPassword) {
        alert('Please enter a password');
    } else if (signupPassword.length < minPasswordLength) {
        alert('Password must be at least ' + minPasswordLength + ' characters long');
    } else if (confirmPassword !== signupPassword) {
        alert('Passwords do not match');
    } else {
        // Register the user
        users.push({ username: signupUsername, password: signupPassword });
        alert('Sign Up successful');
        showLoginForm();
    }
}

function showSignupForm() {
    document.querySelector('.login-container').style.display = 'none';
    document.querySelector('.signup-container').style.display = 'flex';
}

function showLoginForm() {
    document.querySelector('.signup-container').style.display = 'none';
    document.querySelector('.login-container').style.display = 'flex';
}
