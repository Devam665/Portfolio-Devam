<?php
/* --- PHP LOGIC START --- */

// 1. Handle Contact Form & Hire Me button
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $to = "bhatidevamjit1776@gmail.com"; 
    
    // Check if it's the "Hire Me" button
    if (isset($_POST['action']) && $_POST['action'] == 'hire') {
        $subject = "Inquiry: Hire Me Button Clicked";
        $message = "Hello Devamjitsinh,\n\nSomeone clicked the 'Hire Me' button on your portfolio.";
        $headers = "From: portfolio@yourdomain.com";
    } 
    // Otherwise, it's the Contact Form
    else {
        $name = htmlspecialchars($_POST['name']);
        $email = htmlspecialchars($_POST['email']);
        $user_msg = htmlspecialchars($_POST['message']);

        $subject = "New Message from $name";
        $message = "Name: $name\nEmail: $email\nMessage: $user_msg";
        $headers = "From: $email";
    }

    // Send the email (Note: This works on live hosting, not usually on local localhost)
    if (mail($to, $subject, $message, $headers)) {
        echo "<script>alert('Success! Your message was sent.'); window.location.href='index.php';</script>";
        exit();
    }
}
/* --- PHP LOGIC END --- */
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Bhati Devamjitsinh | Portfolio</title>
    <link rel="stylesheet" href="new.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css">
    <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;700&display=swap" rel="stylesheet">
</head>
<body>

    <nav class="navbar">
        <div class="logo">BHATI <span>DEVAMJITSINH</span></div>
        <ul class="nav-links">
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#certificates">Certificates</a></li>
            <li><a href="#contact">Contact</a></li>
        </ul>
    </nav>

    <section class="hero-section" id="home">
        <div class="hero-card" id="main-card">
            <div class="hero-content">
                <p class="greeting">Hello, I am</p>
                <h1 class="name">BHATI DEVAMJITSINH</h1>
                <h3 class="dynamic-text">I'm a <span id="typewriter"></span></h3>
                <p class="description">
                    Results-driven Data Analyst with a strong foundation in data cleaning, analysis, and visualization. 
                    Skilled in Python, SQL, Excel, and Power BI.
                </p>
                <br>
                <div class="social-icons">
                    <a href="https://www.linkedin.com/in/bhati-devamjitsinh-67571331b/"><i class="fab fa-linkedin-in"></i></a>
                    <a href="https://github.com/Devam665"><i class="fab fa-github"></i></a>
                </div>

                <div class="cta-buttons">
                    <form action="" method="POST" style="display:inline;">
                        <input type="hidden" name="action" value="hire">
                        <button type="submit" class="btn primary">Hire Me</button>
                    </form>
                    
                    <a href="download.php" class="btn secondary">Download CV</a>
                </div>
            </div>

            <div class="hero-image">
                <div class="image-wrapper">
                    <img src="devam-Photoroom.png" alt="Bhati Profile">
                </div>
            </div>
        </div>
    </section>

    <section class="contact-section" id="contact">
        <div class="container">
            <div class="contact-card reveal">
                <h2 class="section-title">Contact Me</h2>
                <div class="contact-content">
                    <div class="info-side">
                        <div class="info-item">
                            <i class="fas fa-envelope"></i>
                            <span>bhatidevamjit1776@gmail.com</span>
                        </div>
                    </div>

                    <form action="" method="POST" class="form-side">
                        <input type="text" name="name" placeholder="Your Name" required>
                        <input type="email" name="email" placeholder="Your Email" required>
                        <textarea name="message" placeholder="Your Message" rows="4" required></textarea>
                        <button type="submit" class="btn primary">Send Message</button>
                    </form>
                </div>
            </div>
        </div>
    </section>

    <footer class="main-footer">
        <p>© 2026 Bhati Devamjitsinh | All Rights Reserved.</p>
    </footer>

    <script src="https://unpkg.com/typed.js@2.1.0/dist/typed.umd.js"></script>
    <script src="new.js"></script>
</body>
</html>
