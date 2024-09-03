<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = htmlspecialchars($_POST['name']);
    $email = htmlspecialchars($_POST['email']);
    $message = htmlspecialchars($_POST['message']);

    $to = "info@medquest.ch";
    $subject = "Neue Kontaktanfrage von $name";
    $body = "Name: $name\nEmail: $email\n\nNachricht:\n$message";
    $headers = "From: $email";

    if (mail($to, $subject, $body, $headers)) {
        echo "Nachricht erfolgreich gesendet.";
    } else {
        echo "Es gab ein Problem beim Senden der Nachricht.";
    }
}
?>
