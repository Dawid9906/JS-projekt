let $name = document.getElementById("car-name");
let $price = document.getElementById("car-price");
let $img = document.getElementById("car-image");
let $date = document.getElementById("receipt-day");
let $payMethod = document.getElementById("pay-method");

window.addEventListener("load", function () {
  $name.innerText = `${window.localStorage.getItem(
    "brand"
  )}  ${window.localStorage.getItem("name")}`;
  $price.innerText = window.localStorage.getItem("totalPrice");
  $date.innerText = window.localStorage.getItem("receiptDay");
  $payMethod.innerText = window.localStorage.getItem("payMethod");
  $img.src = window.localStorage.getItem("img");
});
