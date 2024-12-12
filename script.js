function showDetails() {
    // Prevent form submission
    event.preventDefault();

    // Get input values
    var fullName = document.getElementById('fullName').value;
    var email = document.getElementById('email').value;
    var phone = document.getElementById('phone').value;
    var instrument = document.getElementById('instrument').value;
    var level = document.getElementById('level').value;

    // Display the entered details
    document.getElementById('nameDisplay').textContent = "Full Name: " + fullName;
    document.getElementById('emailDisplay').textContent = "Email: " + email;
    document.getElementById('phoneDisplay').textContent = "Phone: " + phone;
    document.getElementById('instrumentDisplay').textContent = "Instrument: " + instrument;
    document.getElementById('levelDisplay').textContent = "Level: " + level;

    // Show the details display
    document.getElementById('detailsDisplay').style.display = "block";
}
