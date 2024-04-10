<?php
// start session
session_start();

// creating Function - Check Login
function check_login() {
    if (!isset($_SESSION["user_id"])) {

        // redirect to login_view page
        header("Location: ../Login/login_view.php");

        // Terminating Session / Terminate execution
        die();
    }
}

// Function to check for the user's role ID
function check_role_ID() {
    if (!isset($_SESSION["role_id"])) {

        return false;

    } else {
        return $_SESSION["role_id"];
    }

}


function isLoggedIn() {
    // Check for session variable or cookie indicating user is logged in
    return $_SESSION['logged_in'] ?? false; // Example using a session variable
}