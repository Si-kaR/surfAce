// // Get elements
// const createButton = document.getElementById('createButton');
// const dropdownForm = document.getElementById('dropdownForm');
// const createUserForm = document.getElementById('createUserForm');
// const cancelButton = document.getElementById('cancelButton');
// const userList = document.getElementById('userList');

// // Toggle dropdown visibility
// createButton.addEventListener('click', function() {
//     dropdownForm.style.display = dropdownForm.style.display === 'none' ? 'block' : 'none';
// });

// // Handle form submission
// createUserForm.addEventListener('submit', async function(event) {
//     event.preventDefault();
    
//     // Collect form data
//     const formData = new FormData(createUserForm);
    
//     try {
//         // Send a POST request to the server to create the new user
//         const response = await fetch('/create-user', {
//             method: 'POST',
//             body: formData
//         });
        
//         if (response.ok) {
//             // Parse the response data (e.g., user data)
//             const userData = await response.json();
            
//             // Hide the dropdown form
//             dropdownForm.style.display = 'none';
            
//             // Clear form inputs
//             createUserForm.reset();
            
//             // Add the new user to the user list
//             addUserToList(userData);
//         } else {
//             // Handle error
//             console.error('Failed to create user');
//         }
//     } catch (error) {
//         console.error('An error occurred:', error);
//     }
// });

// // Hide dropdown on cancel button click
// cancelButton.addEventListener('click', function() {
//     dropdownForm.style.display = 'none';
// });

// // Function to add a user to the list
// function addUserToList(userData) {
//     const userDiv = document.createElement('div');
//     userDiv.classList.add('user');
    
//     // Add user's profile picture
//     const img = document.createElement('img');
//     img.src = userData.profilePictureUrl;
//     userDiv.appendChild(img);
    
//     // Add user's name
//     const h2 = document.createElement('h2');
//     h2.textContent = userData.username;
//     userDiv.appendChild(h2);
    
//     // Add options for edit and delete
//     const actionsDiv = document.createElement('div');
//     const editButton = document.createElement('button');
//     editButton.textContent = 'Edit';
//     // Add event listener for editing
//     editButton.addEventListener('click', function() {
//         // Handle edit user
//     });
    
//     const deleteButton = document.createElement('button');
//     deleteButton.textContent = 'Delete';
//     // Add event listener for deleting
//     deleteButton.addEventListener('click', function() {
//         // Handle delete user
//     });
    
//     actionsDiv.appendChild(editButton);
//     actionsDiv.appendChild(deleteButton);
//     userDiv.appendChild(actionsDiv);
    
//     // Add the user element to the list
//     userList.appendChild(userDiv);
// }



// document.addEventListener('DOMContentLoaded', function() {
//     // Get the "Create New" button and dropdown form
//     const createButton = document.getElementById('createButton');
//     const dropdownForm = document.getElementById('dropdownForm');
//     const cancelButton = document.getElementById('cancelButton');

//     // Toggle dropdown form visibility when the "Create New" button is clicked
//     createButton.addEventListener('click', function() {
//         const isVisible = dropdownForm.style.display === 'block';
//         dropdownForm.style.display = isVisible ? 'none' : 'block';
//     });

//     // Handle form cancellation
//     cancelButton.addEventListener('click', function() {
//         dropdownForm.style.display = 'none';
//         document.getElementById('createUserForm').reset();
//     });

//     // Handle form submission
//     document.getElementById('createUserForm').addEventListener('submit', function(event) {
//         event.preventDefault();
//         // Handle form data submission here
//         // You can use an AJAX request to submit form data to your backend
//         // For now, just hide the dropdown form after submission
//         dropdownForm.style.display = 'none';
//         // Reset the form after submission
//         document.getElementById('createUserForm').reset();
//     });
// });





// document.addEventListener('DOMContentLoaded', function() {
//     // Event delegation: listen for clicks on the entire document
//     document.addEventListener('click', function(event) {
//         // Check if the clicked element is a Create button
//         if (event.target.classList.contains('btn-create-new')) {
//             // Get the corresponding dropdown form (assumes it's the next sibling)
//             const dropdownForm = event.target.nextElementSibling;
//             // Toggle the visibility of the dropdown form
//             dropdownForm.style.display = dropdownForm.style.display === 'none' ? 'block' : 'none';
//         }
        
//         // Check if the clicked element is a Cancel button
//         if (event.target.classList.contains('btn-cancel')) {
//             // Find the closest dropdown form to the cancel button
//             const dropdownForm = event.target.closest('.dropdown-form');
//             // Hide the dropdown form
//             dropdownForm.style.display = 'none';
//             // Reset the form inside the dropdown
//             dropdownForm.querySelector('form').reset();
//         }
//     });

//     // Event delegation for form submission
//     document.addEventListener('submit', function(event) {
//         if (event.target.id === 'createUserForm') {
//             event.preventDefault();
//             // Handle form data submission here
//             // You can use an AJAX request to submit form data to your backend
//             // For now, just hide the dropdown form after submission
//             const dropdownForm = event.target.closest('.dropdown-form');
//             dropdownForm.style.display = 'none';
//             // Reset the form after submission
//             event.target.reset();
//         }
//     });
// });



document.addEventListener('DOMContentLoaded', function() {
    // Event delegation: listen for clicks on the entire document
    document.addEventListener('click', function(event) {
        // Check if the clicked element is a Create button
        if (event.target.classList.contains('btn-create-new')) {
            // Get the corresponding dropdown form (assumes it's the next sibling)
            const dropdownForm = event.target.nextElementSibling;
            // Toggle the visibility of the dropdown form
            dropdownForm.style.display = dropdownForm.style.display === 'none' ? 'block' : 'none';
        }
        
        // Check if the clicked element is a Cancel button
        if (event.target.classList.contains('btn-cancel')) {
            // Find the closest dropdown form to the cancel button
            const dropdownForm = event.target.closest('.dropdown-form');
            // Hide the dropdown form
            dropdownForm.style.display = 'none';
            // Reset the form inside the dropdown
            dropdownForm.querySelector('form').reset();
        }
    });

    // Event delegation for form submission
    document.addEventListener('submit', function(event) {
        if (event.target.id === 'createUserForm') {
            event.preventDefault();
            // Handle form data submission here
            // You can use an AJAX request to submit form data to your backend
            // For now, just hide the dropdown form after submission
            const dropdownForm = event.target.closest('.dropdown-form');
            dropdownForm.style.display = 'none';
            // Reset the form after submission
            event.target.reset();
        }
    });
});
