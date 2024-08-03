function showHome() {
    document.getElementById('home-section').style.display = 'block';
    document.getElementById('register-section').style.display = 'none';
}

function showRegister() {
    document.getElementById('home-section').style.display = 'none';
    document.getElementById('register-section').style.display = 'block';
}

function showUserFields() {
    const userType = document.getElementById('user-type').value;
    if (userType === 'school') {
        document.getElementById('school-fields').style.display = 'block';
        document.getElementById('donor-fields').style.display = 'none';
    } else if (userType === 'donor') {
        document.getElementById('school-fields').style.display = 'none';
        document.getElementById('donor-fields').style.display = 'block';
    } else {
        document.getElementById('school-fields').style.display = 'none';
        document.getElementById('donor-fields').style.display = 'none';
    }
}

document.getElementById('register-form').addEventListener('submit', function(event) {
    event.preventDefault();
    // Display the confirmation message
    document.getElementById('confirmation-message').style.display = 'block';
    // Hide the form after submission
    document.getElementById('register-form').style.display = 'none';
});