<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Get form data
    $fullName = $_POST['fullName'];
    $email = $_POST['email'];
    $phone = $_POST['phone'];
    $instrument = $_POST['instrument'];
    $level = $_POST['level'];

    // Display entered details
    echo "<h2>Your Registration Details:</h2>";
    echo "<p><strong>Full Name:</strong> $fullName</p>";
    echo "<p><strong>Email:</strong> $email</p>";
    echo "<p><strong>Phone Number:</strong> $phone</p>";
    echo "<p><strong>Instrument:</strong> $instrument</p>";
    echo "<p><strong>Level of Expertise:</strong> $level</p>";
}
?>
