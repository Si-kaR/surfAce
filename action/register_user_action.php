<?php
include "../surfAce/settings/connection.php";
    
                                

    // $fname = mysqli_real_escape_string($conn, $_POST['first_name']);
    // $lname = mysqli_real_escape_string($conn, $_POST['last_name']);
    // $gender = mysqli_real_escape_string($conn, $_POST['gender']);
    // $phone = mysqli_real_escape_string($conn, $_POST['phone_number']);
    // $email = mysqli_real_escape_string($conn, $_POST['email']);
    // $password = mysqli_real_escape_string($conn, $_POST['password']);

    // $fname = $_POST['first_name'];
    // $lname = $_POST['last_name'];
    // $gender = $_POST['gender'];
    // $phone = $_POST['phone_number'];
    // $email = $_POST['email'];
    // echo $email;
    // $passwrd = $_POST['password'];

    $fname = mysqli_real_escape_string($conn, $_POST['first_name']);
    $lname = mysqli_real_escape_string($conn, $_POST['last_name']);
    $gender = mysqli_real_escape_string($conn, $_POST['gender']);
    $phone = mysqli_real_escape_string($conn, $_POST['phone_number']);
    $email = mysqli_real_escape_string($conn, $_POST['email']);
    $passwrd = mysqli_real_escape_string($conn, $_POST['password']);
    $hashed_password = password_hash($passwrd, PASSWORD_DEFAULT);

    // $hashedPassword = password_hash($password, PASSWORD_DEFAULT);
    // // Use prepared statements to prevent SQL injection
    // $query = "INSERT INTO Students (fname, lname, email, yearGroup, major, phone, passwrd) 
    //           VALUES (?, ?, ?, ?, ?, ?, ?)";


    // $stmt = $conn->prepare($query);
    // $stmt->bind_param("sssssss", $fname, $lname, $gender, $email, $phone, $hashedPassword);



    $hashedPassword = password_hash($passwrd, PASSWORD_DEFAULT);
    // Use prepared statements to prevent SQL injection   


    $sql = "INSERT INTO User (fname, lname, gender, phone, email, passwrd) 
        VALUES (?, ?, ?, ?, ?, ?)";

    $stmt = $conn->prepare($sql);
    $stmt->bind_param("ssssss", $fname, $lname, $gender, $phone, $email, $hashedPassword);

    

    if ($stmt->execute()) {
        // If insertion is successful, redirect the user
        header("Location: ../surfAce/login/login_view.php");
        exit();
    } else {
        // If insertion fails, check for errors
        echo json_encode([
            'error' => 'Registration unsuccessful',
            'errorDetails' => $stmt->error
        ]);
    }
    

