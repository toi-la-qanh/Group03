function handleRegisterButton() {
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  const confirmPassword = document.getElementById("confirmPassword").value;

  const errorName = validateName(name);
  const errorEmail = validateEmail(email);
  const errorPassword = validatePassword(password);
  const errorConfirmPassword = validateConfirmPassword(confirmPassword);

  if (errorName) {
    alert(errorName);
    return;
  }
  if (errorEmail) {
    alert(errorEmail);
    return;
  }
  if (errorPassword) {
    alert(errorPassword);
    return;
  }
  if (errorConfirmPassword) {
    alert(errorConfirmPassword);
    return;
  }
  window.location.href = "login.html";
}
// Xử lý tên
function validateName(name) {
  if (name === "") {
    return "Tên không được để trống !";
  }
  if (name.length < 5 || name.length > 50) {
    return "Tên phải từ 5 đến 50 chữ cái";
  }
  var namePattern = /^[\p{L}\s]+$/u;
  if (!namePattern.test(name)) {
    return "Tên không hợp lệ !";
  }
  return "";
}
// Xử lý email
function validateEmail(email) {
  if (email === "") {
    return "Email không được để trống !";
  }
  if (email.length < 5 || email.length > 50) {
    return "Email phải từ 5 đến 50 chữ cái";
  }
  var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(email)) {
    return "Email không hợp lệ !";
  }
  return "";
}
// Xử lý mật khẩu
function validatePassword(password) {
  if (password === "") {
    return "Mật khẩu không được để trống !";
  }
  var passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;
  if (!passwordPattern.test(password)) {
    return "Mật khẩu không hợp lệ !";
  }
  return "";
}
// Xử lý xác nhận mật khẩu
function validateConfirmPassword(confirmPassword) {
  if (confirmPassword === "") {
    return "Mật khẩu nhập lại không được để trống !";
  }
  const password = document.getElementById("password").value;
  if (confirmPassword != password) {
    return "Mật khẩu nhập lại không trùng khớp !";
  }
  var passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;
  if (!passwordPattern.test(password)) {
    return "Mật khẩu nhập lại không hợp lệ !";
  }
  return "";
}
