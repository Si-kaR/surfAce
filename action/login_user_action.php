<?php

session_start();

include "../settings/connection.php";

if(isset($_POST['signin'])) {
    $email = mysqli_real_escape_string($conn, $_POST['email']);
    $password = mysqli_real_escape_string($conn,$_POST['password']);

    $sql = "SELECT * FROM People WHERE email = '$email'";

    $result = mysqli_query($conn, $sql);

    if ($result) {
        if (mysqli_num_rows($result)> 0) {
            $row = mysqli_fetch_assoc($result);

            if (password_verify($password, $row['passwd'])) {
                $_SESSION['user_id'] = $row['pid'];
                $_SESSION['role_id'] = $row['rid'];

                header("Location: ../view/index.php");
            } else {
                echo "Error: Incorrect password. Try again.";
                header("Location: ../Login/login_view.php");
            }
        } else {
            echo "Error: User not found. Sign up to the platform";
            header("Location:../Login/register_view.php");
        }
        $conn->close();
    } else {
        echo "Query failed";
        header("Location:../Login/login_view.php");
    }
} else {
    echo "Error: Login failed";
    header("Location: ../Login/login_view.php");
}