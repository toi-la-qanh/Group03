// Xử lý nút số lượng
const quantity = document.querySelector(".body-payment .form-payment .row .column .input-box .input-quantity");
// Mặc định số lượng là 1
quantity.value = 1;
// Dấu -
function handleMinusButton() {
  let currentQuantity = parseInt(quantity.value);
  if(currentQuantity > 1) {
    quantity.value = currentQuantity - 1;
  }
}
// Dấu +
function handlePlusButton() {
  quantity.value = parseInt(quantity.value) + 1;
}
//
function paidButton() {
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const phone = document.getElementById("phone").value;
  const address = document.getElementById("address").value;
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
  if (errorAddress) {
    alert(errorAdress);
    return;
  }
  alert("Thanh toán thành công !");
  // location.reload();
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
// Xử lý địa chỉ
function validateAddress(address) {
    if(address === "") return "Địa chỉ không được để trống !";
    return "";
}