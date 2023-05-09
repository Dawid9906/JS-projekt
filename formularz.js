const $name = document.getElementById("car-name");
const $price = document.getElementById("car-price");
window.addEventListener("load", function () {
  $name.innerText = `${window.localStorage.getItem(
    "brand"
  )}  ${window.localStorage.getItem("name")}`;
  $price.innerText = window.localStorage.getItem("price");
});

const $select = document.getElementById("select");
const $accessories = document.getElementById("accessories");

$select.addEventListener("focus", function () {
  $select.setAttribute("multiple", 1);
  $accessories.setAttribute("disabled", 1);
});
const $divPar = document.getElementById("paragraph");
const $acc = document.getElementsByClassName("acc");
const accPrices = [2000, 1500, 50, 100];
const counter = 0;
const accSelect = (function () {
  for (let i = 0; i < $acc.length; i++) {
    let e = i;
    $acc[i].addEventListener("click", function () {
      let $par = document.createElement("p");
      $par.innerHTML = $acc[e].textContent;
      let $span = document.createElement("span");
      $span.className = "cancel";
      let txt = document.createTextNode("\u00D7");
      $span.appendChild(txt);
      $par.appendChild($span);
      $divPar.appendChild($par);
      $acc[e].setAttribute("disabled", 1);
      $acc[e].setAttribute("style", "text-decoration: line-through");
      counter = parseInt($price.innerText);
      counter += accPrices[e];
      $price.innerText = counter;
    });
  }
})();

const $cancel = document.getElementsByClassName("cancel");
console.log($cancel);
const $par2 = document.querySelectorAll("#paragraph p");

$divPar.addEventListener("click", function (e) {
  const target = e.target.closest(".cancel");

  $par2 = target.parentElement;
  const text = $par2.innerText;

  let text1 = "Rok gwarancji | 2000zł ×";
  let text2 = "Opony zimowe | 1500zł×";
  let text3 = "Płyn do spryskiwaczy | 50zł×";
  let text4 = "Olej silnikowy | 100zł×";

  if (text === text1) {
    counter = parseInt($price.innerText);
    counter -= 2000;
    $price.innerText = counter;
  } else if (text === text2) {
    counter = parseInt($price.innerText);
    counter -= 1500;
    $price.innerText = counter;
  } else if (text === text3) {
    counter = parseInt($price.innerText);
    counter -= 50;
    $price.innerText = counter;
  } else {
    counter = parseInt($price.innerText);
    counter -= 100;
    $price.innerText = counter;
  }

  if (text.includes(`Rok`)) {
    $acc[0].removeAttribute("disabled");
    $acc[0].removeAttribute("style");
  } else if (text.includes(`Opony`)) {
    $acc[1].removeAttribute("disabled");
    $acc[1].removeAttribute("style");
  } else if (text.includes(`Płyn`)) {
    $acc[2].removeAttribute("disabled");
    $acc[2].removeAttribute("style");
  } else {
    $acc[3].removeAttribute("disabled");
    $acc[3].removeAttribute("style");
  }
  $par2.style.display = "none";
});

function addDays(date, days) {
  var result = new Date(date);
  result.setDate(result.getDate() + days);
  return result;
}
let receiptDate = addDays(new Date(), 14);

let receiptDay =
  receiptDate.getFullYear() +
  "-" +
  (receiptDate.getMonth() + 1) +
  "-" +
  receiptDate.getDay();

let $spanDate = document.getElementById("receiptDay");

$spanDate.innerText = receiptDay;

const $form = document.getElementById("form1");
const $nameInput = document.getElementById("name");
const $placeInput = document.getElementById("place");
const $radioButtons = document.querySelectorAll("input[type='radio']");

function validateForm() {
  let $name = $nameInput.value;
  let $place = $placeInput.value;
  let validate = true;
  let checked = [];
  for (let i = 0; i < $radioButtons.length; i++) {
    if ($radioButtons[i].checked) {
      checked.push(i);
    }
  }
  if ($name === "" || $name === null) {
    alert(`Imię i nazwisko jest wymagane`);
    validate = false;
  }
  if ($name.split(" ").length !== 2) {
    alert(`Niepoprawne imię i nazwisko`);
    validate = false;
  }
  if ($place === "" || $place === null) {
    alert(`Proszę podać nazwę miejscowość`);
    validate = false;
  }
  if (checked.length === 0) {
    alert(`Proszę wybrać sposób płatności`);
    validate = false;
  }
  let totalPrice = document.getElementById("car-price");
  localStorage.setItem("totalPrice", totalPrice.innerText);
  localStorage.setItem("receiptDay", receiptDay);
  return validate;
}

const $inputs = document.querySelectorAll("input[type ='text']");
console.log($inputs);
$inputs[0].addEventListener("keyup", (event) => {
  localStorage.setItem("clientName", event.currentTarget.value);
});
$inputs[0].value = localStorage.getItem("clientName");

$inputs[1].addEventListener("keyup", (event) => {
  localStorage.setItem("city", event.currentTarget.value);
});
$inputs[1].value = localStorage.getItem("city");

$radioButtons[0].addEventListener("click", () => {
  localStorage.setItem("payMethod", "Gotówka");
});
$radioButtons[1].addEventListener("click", () => {
  localStorage.setItem("payMethod", "Leasing");
});
