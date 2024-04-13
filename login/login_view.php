<!-- Login_page -->
<!DOCTYPE html>
<html lang="en">

<head>
    <!-- Character encoding -->
    <meta charset="UTF-8">
    <!-- Responsive viewport -->
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <!-- Document title : Appears at Taskbar -->
    <title>Login | surfAce</title>
    <!-- External stylesheet link -->

    <link rel="stylesheet" href="../assets/css/login.css">
    <!-- External stylesheet  -->

    <link href='https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css' rel='stylesheet'>

    <link rel="shortcut icon" type="image/png" href="../assets/images/logo/surfAceExtendedNoBGSlicedp.png">


    <!-- End of Head Content -->
</head>


  <body>
    <img src="../assets/images/surfing_man" alt="" />

    <div class="wrapper">

      <!-- Form element -->
      <!-- <form action="">  -->
      <!-- <form action=" URL_where_the_form_data_should_be_submitted. . . This was mentioned in class today by eugene" method="POST" id="loginForm" name="loginForm"> -->
      <form action="../action/login_user_action.php" method="POST" id="loginForm" name="loginForm">

        
        <!-- Heading -->
        <h1>Administrator Login</h1> 

        <!--Div for input box -->
        <!-- <div class="input-box">  -->
          <!-- Username input -->
          <!-- <input type="text" placeholder="Username" required>  -->
          <!-- Icon for username -->
          <!-- <i class='bx bxs-user'></i> 
        </div> -->

        <!-- Div for input box -->
        <div class="input-box"> 
          <!-- Email input -->
          <input type="email" placeholder="Email" name="email" id="email" required pattern="[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$">
          <!-- Icon for email -->
          <i class='bx bx-mail-send'></i> 
        </div>


        <!-- Div for input box -->
        <div class="input-box"> 
          <!-- Password input -->
          <!-- <input type="password" placeholder="Password" required>  -->
          <input type="password" placeholder="Password" name="password" id="password" required pattern=".{8,}" title="Password must be at least 8 characters long">
          <!-- Icon for password -->
          <i class='bx bxs-lock-alt' ></i> 
        </div>

        <!-- Div for remember me and forgot password -->
        <div class="remember-forgot"> 
          <!-- Checkbox for remember me -->
          <label><input type="checkbox">Remember Me</label>
          <!-- Forgot password link --> 
          <a href="#">Forgot Password</a> 
        </div>

        <!-- Submit button -->
        <button type="submit" class="btn" id="signin" name="signin">Login</button>

        <!-- Div for registration link -->
        <div class="register-link"> 
          <!-- Registration link -->
          <p>Dont have an account? <a href="register_view.php">Register</a></p> 
        </div>
      </form>
      <!-- End of Form Element -->
    </div>
    <!-- End of Wrapper -->

<!-- External javascript file -->
    <script src="..assets/js/login.js"></script>
  </body>
</html>
