
function toggleForm(formId) {
  const form = document.getElementById(formId);
  if (form.style.display === "none" || form.style.display === "") {
      form.style.display = "block";
  } else {
      form.style.display = "none";
  }
}

function validateEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

function validatePassword(password) {
  const passwordRegex = /^\d{8,}$/;
  return passwordRegex.test(password);
}

function validatePhoneNumber(phoneNumber) {
  const phoneRegex = /^\d+$/;
  return phoneRegex.test(phoneNumber);
}

function submitForm(formId) {
  const form = document.getElementById(formId);
  const nameInput = form.querySelector('[name*="Name"]');
  const emailInput = form.querySelector('[name*="Email"]');
  const phoneNumberInput = form.querySelector('[name*="PhoneNumber"]');
  const passwordInput = form.querySelector('[name*="Password"]');

  const name = nameInput.value;
  const email = emailInput.value;
  const phoneNumber = phoneNumberInput.value;
  const password = passwordInput.value;

  if (!validateEmail(email)) {
    alert('Please enter a valid email address.');
    return;
  }

  if (!validatePassword(password)) {
    alert('Password must be at least 8 characters long and contain only numbers.');
    return;
  }
  if (!validatePhoneNumber(phoneNumber)) {
    alert('Please enter a valid phone number (numbers only).');
    return;
  }
  alert('Form submitted successfully!');
  
  nameInput.value = '';
  emailInput.value = '';
  phoneNumberInput.value = '';
  passwordInput.value = '';

  form.style.display = 'none';
}
