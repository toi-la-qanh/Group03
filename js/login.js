function handleLoginButton() {

  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  const errorEmail = validateEmail(email);
  const errorPassword = validatePassword(password);

  if (errorEmail) {
    alert(errorEmail);
    return;
  }
  if (errorPassword) {
    alert(errorPassword);
    return;
  }
  window.location.href = "home.html";
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
function validatePassword(password) {
  if (password === "") {
    return "Mật khẩu không được để trống !";
  }
  var passwordPattern =  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;
  if (!passwordPattern.test(password)) {
    return "Mật khẩu không hợp lệ !";
  }
  return "";
}