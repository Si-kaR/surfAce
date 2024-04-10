// // script.js

// $(document).ready(function() {
//     // Click event handler for the calendar icon
//     $('#calendar-icon').click(function() {
//         $('#dob').focus(); // Trigger focus on the date input field
//     });
// });


$(document).ready(function() {
    // Click event handler for the calendar icon
    $('#calendar-icon').click(function() {
        console.log('Calendar icon clicked');
        $('#dob').focus(); // Trigger focus on the date input field
    });
});



// // Function to validate phone number
// function validatePhoneNumber() {
//     var phoneNumber = document.getElementById('phone_number').value;

//     // Regular expression to match the allowed prefixes and format
//     var regex = /^(030|036|034|031|038|032|039|035|037)\d{7}$/;

//     // Test the phone number against the regular expression
//     if (regex.test(phoneNumber)) {
//         // Valid phone number
//         return true;
//     } else {
//         // Invalid phone number
//         alert("Please enter a valid Ghanaian phone number");
//         return false;
//     }
// }

// // Attach validation function to form submission event
// document.querySelector('form').onsubmit = function() {
//     return validatePhoneNumber();
// };





const phoneNumberInput = document.getElementById('phone_number');

phoneNumberInput.addEventListener('input', function() {
  const phoneNumber = this.value;
  const isValid = phoneNumber.match(/^(0[234689]([0-7]|9[0-4]))\d{7}$/);

  if (isValid) {
    phoneNumberInput.setCustomValidity(''); // Clear any previous error messages
  } else {
    phoneNumberInput.setCustomValidity('Invalid Ghanaian phone number format. Please enter a valid number (e.g., 0233242983).');
  }

// Attach validation function to form submission event
document.querySelector('form').onsubmit = function() {
    return validatePhoneNumber();
}

});

// const passwordInput = document.getElementById('password');
// const confirmPasswordInput = document.getElementById('confirm_password');

// confirmPasswordInput.addEventListener('input', function() {
//   const confirmedPassword = this.value;
//   const password = passwordInput.value;

//   if (confirmedPassword !== password) {
//     confirmPasswordInput.setCustomValidity('Passwords do not match. Please try again.');
//   } else {
//     confirmPasswordInput.setCustomValidity(''); // Clear any previous error messages
//   }
// });


const passwordInput = document.getElementById('password');
const confirmPasswordInput = document.getElementById('confirm_password');

confirmPasswordInput.addEventListener('input', function() {
  const confirmedPassword = this.value;
  const password = passwordInput.value;

  if (confirmedPassword !== password) {
    confirmPasswordInput.setCustomValidity('Passwords do not match. Please try again.');
  } else {
    confirmPasswordInput.setCustomValidity(''); // Clear any previous error messages
  }
});