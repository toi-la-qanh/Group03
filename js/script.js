// Xử lý nút ... ở thanh công cụ icon
var count = 0;
function showMoreElement() {
  document.querySelector(
    ".icon-bar-and-arrow .icon-bar ul .login-icon"
  ).style.display = "flex";
  document.querySelector(
    ".icon-bar-and-arrow .icon-bar ul .question-icon"
  ).style.display = "flex";
  count += 1;
  if (count == 2) {
    document.querySelector(
      ".icon-bar-and-arrow .icon-bar ul .login-icon"
    ).style.display = "none";
    document.querySelector(
      ".icon-bar-and-arrow .icon-bar ul .question-icon"
    ).style.display = "none";
    count = 0;
  }
}
// Xử lý nút mũi tên
function handleRightArrow() {
  document.querySelector(".icon-bar-and-arrow").style.display = "none";
  document.querySelector(".left-arrow button").style.display = "flex";
}
function handleLeftArrow() {
  document.querySelector(".icon-bar-and-arrow").style.display = "flex";
  document.querySelector(".left-arrow button").style.display = "none";
}
//Xử lý resize window responsive
window.onload = function () {
  currentWidth(window.innerWidth);
};

window.onresize = function () {
  currentWidth(window.innerWidth);
};
function currentWidth() {
  if (window.innerWidth < 800) {
    document.querySelector(".navbar .auth-navbar").style.display = "none";
    document.querySelector(
      ".navbar .navbar-courses select"
    ).style.display = "none";
  } else {
    document.querySelector(
      ".navbar .navbar-courses select"
    ).style.display = "";
    document.querySelector(".navbar .auth-navbar").style.display = "";
  }
}
//
const quantity = document.querySelector(".body-cart table tr td input");

quantity.value = 1;
function handleMinusButton() {
  let currentQuantity = parseInt(quantity.value);
  if(currentQuantity > 1) {
    quantity.value = currentQuantity - 1;
  }
}
function handlePlusButton() {
  quantity.value = parseInt(quantity.value) + 1;
}