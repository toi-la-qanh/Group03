// Nút sửa
function editButton() {
  document.querySelector(
    ".body-profile .profile .row .column .edit-button"
  ).style.display = "none";
  document.querySelector(
    ".body-profile .profile .row .column .save-button"
  ).style.display = "block";
  document.querySelector(
    ".body-profile .profile .row .column .cancel-button"
  ).style.display = "block";
  document.getElementById("profile-image").type = "file";
  // Sửa tên
  document.getElementById("name").readOnly = false;
  document.getElementById("name").value = "";
  // Sửa email
  document.getElementById("email").readOnly = false;
  document.getElementById("email").value = "";
  // Sửa số điện thoại
  document.getElementById("phone").readOnly = false;
  document.getElementById("phone").value = "";
  // Sửa địa chỉ
  document.getElementById("address").readOnly = false;
  document.getElementById("address").value = "";
}
// Nút huỷ
function cancelButton() {
  location.reload();
}
// Nút lưu
function saveButton() {
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const phone = document.getElementById("phone").value;
  const errorName = validateName(name);
  const errorEmail = validateEmail(email);
  const errorPhone = validatePhone(phone);

  if (errorName) {
    alert(errorName);
    return;
  }
  if (errorEmail) {
    alert(errorEmail);
    return;
  }
  if (errorPhone) {
    alert(errorPhone);
    return;
  }
  alert("Chỉnh sửa thành công !");
  location.reload();
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
// Xử lý số điện thoại
function validatePhone(phone) {
  var phonePattern = /^[0-9]{10,12}$/;
  if (!phonePattern.test(phone)) return "Số điện thoại không hợp lệ !";
  return "";
}