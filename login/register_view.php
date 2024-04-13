
<!-- Register_page -->
<!DOCTYPE html>
<html lang="en">

<head>
    <!-- Character encoding -->
    <meta charset="UTF-8">
    <!-- Responsive viewport -->
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    
    <!-- Document title : Appears at Taskbar -->
    <title>Register | surfAce</title>
    <!-- External stylesheet link -->

    <!-- Include jQuery -->
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>

    <link rel="stylesheet" href="../assets/css/register.css">
    <!-- External stylesheet -->

    <link href='https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css' rel='stylesheet'>

    <link rel="shortcut icon" type="image/png" href="../assets/images/logo/surfAceExtendedNoBGSlicedp.png">


    <!-- End of Head Content -->
</head>

<body>
    <!-- <img src="../assets/images/surfingman" alt="" /> -->

    <div class="wrapper">

        <!-- Form element -->
        <form action="../action/register_user_action.php" method="POST" id="registerForm" name="registerForm">

            <!-- Heading -->
            <h1>Administrator Register Form</h1>
            <!-- Div for input box -->
            <div class="input-box">
                <!-- Firstname input -->
                <input type="text" placeholder="First Name" name="first_name" required id="first_name">
                <!-- Icon for user -->
                <i class='bx bxs-user'></i>
            </div>

            <div class="input-box">
                <!-- Surname input -->
                <input type="text" placeholder="Last Name" name="last_name" required id="surname">
                <!-- Icon for user -->
                <i class='bx bxs-user'></i>
            </div>
            <!-- Gender section -->

            <!-- Div for input box -->
            <div class="input-box">
                <!-- Gender selection -->
                <div class="gender-selection">
                    <!-- Gender placeholder -->
                    <!-- Gender radio buttons -->
                    <div class="gender-input" aria-placeholder="Gender">
                        Gender
                        <input type="radio" id="male" name="gender" value="0" required>
                        <label for="male">Male</label>
                        <input type="radio" id="female" name="gender" value="1" required>
                        <label for="female">Female</label>
                    </div>
                </div>
            </div>
          
            <!-- Div for input box -->
            <div class="input-box">
            <label for="phone_number"></label>
            <!-- Phone input -->
            <input type="phone" 
                    placeholder="Phone Number"
                    id="phone_number" name="phone_number" required
                    pattern="^(0[234689]([0-7]|9[0-4]))\d{7}$"
                    title="Please enter a valid Ghanaian phone number (e.g., 0233242983)">
            <!-- Icon for phone -->
            <i class='bx bx-phone'></i>
            </div>


            <!-- Div for input box -->
            <div class="input-box">
                <!-- Email input -->
                <input type="email" placeholder="Email" name="email" id="email" required pattern="[a-zA-Z0-9._%+-]+@ashesi\.edu\.gh$" title="Please enter a valid Ashesi University email address">
                <!-- Icon for email -->
                <i class='bx bx-mail-send'></i>
            </div>

            <div class="input-box">
            <label for="password"></label>
            <input type="password" placeholder="Password" id="password" name="password" required
                    pattern=".{8,}" title="Password must be at least 8 characters long">
            <i class='bx bxs-lock-alt'></i>
            </div>

            <div class="input-box">
            <label for="confirm_password"></label>
            <input type="password" placeholder="Confirm Password" id="confirm_password" name="confirm_password" required
                    pattern=".{8,}" title="Passwords must match">
            <i class='bx bxs-lock-alt'></i>
            </div>

            <!-- Submit button -->
            <button type="submit" class="btn" id="register" name="register" value="register">Sign Up</button>

            <!-- Div for login link -->
            <div class="register-link">
                <!-- Login link -->
                <p>Already have an account? <a href="../login/login_view.php">Login</a></p>
            </div>
        </form>
        <!-- End of Form Element -->

    </div>
    <script src="..assets/js/register.js"></script>

</body>

</html>

