const passwordbox = document.getElementById("password");

function generateRandomPassword(length) {
  const charset =
    "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+";
  let password = "";

  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * charset.length);
    password += charset[randomIndex];
  }

  passwordbox.value = password; // Set the generated password in the input field
}

function copypassword() {
  passwordbox.select(); // Select the text inside the input field
  document.execCommand("copy"); // Copy the selected text to the clipboard
}
