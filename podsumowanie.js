const $name = document.getElementById("car-name");
const $price = document.getElementById("car-price");
const $img = document.getElementById("car-image");
const $date = document.getElementById("receipt-day");
const $payMethod = document.getElementById("pay-method");

window.addEventListener("load", function () {
  $name.innerText = `${window.localStorage.getItem(
    "brand"
  )}  ${window.localStorage.getItem("name")}`;
  $price.innerText = window.localStorage.getItem("totalPrice");
  $date.innerText = window.localStorage.getItem("receiptDay");
  $payMethod.innerText = window.localStorage.getItem("payMethod");
  $img.src = window.localStorage.getItem("img");
});
