<?php

session_start();

include "../settings/connection.php";

// Unset session variables
unset($_SESSION['user_id']);
unset($_SESSION['role_id']);

// Redirect to login page
header("Location: ../Login/login_view.php");

// Terminate script execution
exit();
