<?php
include "../settings/connection.php";
    

if (isset($_POST['register'])) {

    $fname = mysqli_real_escape_string($conn, $_POST['first_name']);
    $lname = mysqli_real_escape_string($conn, $_POST['last_name']);
    $gender = mysqli_real_escape_string($conn, $_POST['gender']);
    $fid = mysqli_real_escape_string($conn, $_POST['family_role']);
    $dob = mysqli_real_escape_string($conn, $_POST['dob']);
    $tel = mysqli_real_escape_string($conn, $_POST['phone_number']);
    $email = mysqli_real_escape_string($conn, $_POST['email']);
    $password = mysqli_real_escape_string($conn, $_POST['password']);

    $hashed_password = password_hash($password, PASSWORD_DEFAULT);

    $sql = "INSERT INTO People (rid, fid, fname, lname, gender, dob, tel, email, passwd) 
        VALUES (3, '$fid', '$fname', '$lname', '$gender', '$dob', '$tel', '$email', '$hashed_password')";
    

    if (mysqli_query($conn, $sql)) {
        header("Location: ../Login/login_view.php");
        exit();
    } else {
        echo "Error: " . $sql . "<br>" . $conn->error;
    }

} 