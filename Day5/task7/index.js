

const userArray = [];

function handleSubmit(event) {
    event.preventDefault(); 

    const formData = new FormData(event.target);
    const userData = {};
    formData.forEach((value, key) => {
        userData[key] = value;
    });

    // Push user data to userArray
    userArray.push(userData);

    // Update user list
    updateUserList();
}

// Function to update user list display
function updateUserList() {
    const userListDiv = document.getElementById("userList");
    userListDiv.innerHTML = ""; // Clear previous content

    userArray.forEach(user => {
        const userName = document.createElement("p");
        userName.textContent = user.name;
        userListDiv.appendChild(userName);
    });
}

// Add event listener for form submission
const userDataForm = document.getElementById("userDataForm");
userDataForm.addEventListener("submit", handleSubmit);

