document.getElementById("signupForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const firstName = document.getElementById("firstName");
  const lastName = document.getElementById("lastName");
  const email = document.getElementById("email");
  const phone = document.getElementById("phone");
  const password = document.getElementById("password");
  const confirmPassword = document.getElementById("confirmPassword");

  
  document.getElementById("errorFirstName").innerText = "";
  document.getElementById("errorLastName").innerText = "";
  document.getElementById("errorEmail").innerText = "";
  document.getElementById("errorPhone").innerText = "";
  document.getElementById("errorPassword").innerText = "";
  document.getElementById("errorConfirmPassword").innerText = "";

  firstName.style.border = "";
  lastName.style.border = "";
  email.style.border = "";
  phone.style.border = "";
  password.style.border = "";
  confirmPassword.style.border = "";

  let isValid = true;

  if (firstName.value.trim() === "") {
    document.getElementById("errorFirstName").innerText = "First name is required";
    firstName.style.border = "2px solid red";
    isValid = false;
  } else if (!/^[A-Za-z]+$/.test(firstName.value.trim())) {
    document.getElementById("errorFirstName").innerText = "Only letters allowed";
    firstName.style.border = "2px solid red";
    isValid = false;
  } else {
    firstName.style.border = "2px solid green";
  }

  if (lastName.value.trim() === "") {
    document.getElementById("errorLastName").innerText = "Last name is required";
    lastName.style.border = "2px solid red";
    isValid = false;
  } else if (!/^[A-Za-z]+$/.test(lastName.value.trim())) {
    document.getElementById("errorLastName").innerText = "Only letters allowed";
    lastName.style.border = "2px solid red";
    isValid = false;
  } else {
    lastName.style.border = "2px solid green";
  }

  if (email.value.trim() === "" || !email.value.includes("@") || !email.value.includes(".")) {
    document.getElementById("errorEmail").innerText = "Invalid Email Id";
    email.style.border = "2px solid red";
    isValid = false;
  } else {
    email.style.border = "2px solid green";
  }

  if (phone.value.trim() === "" || !/^\d{10}$/.test(phone.value.trim())) {
    document.getElementById("errorPhone").innerText = "Enter valid phone number";
    phone.style.border = "2px solid red";
    isValid = false;
  } else {
    phone.style.border = "2px solid green";
  }

  if (password.value === "") {
    document.getElementById("errorPassword").innerText = "Password is required";
    password.style.border = "2px solid red";
    isValid = false;
  } else {
    password.style.border = "2px solid green";
  }

  if (confirmPassword.value === "" || confirmPassword.value !== password.value) {
    document.getElementById("errorConfirmPassword").innerText = "Passwords do not match";
    confirmPassword.style.border = "2px solid red";
    isValid = false;
  } else {
    confirmPassword.style.border = "2px solid green";
  }

  if (isValid) {
    alert("Form submitted successfully!");
  }
});
