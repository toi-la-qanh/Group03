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