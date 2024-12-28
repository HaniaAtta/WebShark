document.getElementById('next-btn').addEventListener('click', function() {
    const startupChecked = document.getElementById('startup').checked;
    const investorChecked = document.getElementById('investor').checked;

    if (startupChecked) {
        // Show startup creation form
        showStartupForm();
    } else if (investorChecked) {
        // Show investor form
        showInvestorForm();
    } else {
        alert('Please select either Startup or Investor.');
    }
});

function showStartupForm() {
    // Logic to display startup creation form
    alert('Display Startup Creation Form');
    // You can create a modal or redirect to another page for startup creation
}

function showInvestorForm() {
    // Logic to display investor form
    alert('Display Investor Form');
    // You can create a modal or redirect to another page for investor details
}




// document.querySelector('.sign-up-form').addEventListener('submit', function(event) {
//     event.preventDefault(); // Prevent default form submission
//     // Here you can add your emailjs code to send the registration data

//     // After successful registration, redirect to the profile page
//     window.location.href = 'profile.html';
// });