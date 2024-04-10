<?php
// Defining database connection parameters
// Declaring Constant variables for Storage 
// define(', 'localhost');
// define('DB_USER', 'griphen');
// define('DB_PASS', 'griphEn1!');
// define('DB_NAME', 'chores_mgt');

$SERVER = "localhost";
$USERNAME = "root";
$PASSWORD = "";
$DATABASE = "chores_mgt";

// Attempt MySQL/MariaDB connection
$conn = new mysqli($SERVER, $USERNAME, $PASSWORD, $DATABASE) or die("Database not found");

// Checking connection
if($conn->connect_error) {
    // Displaying error @ connection fail
    die("Connection failed: " . $conn->connect_error);
}