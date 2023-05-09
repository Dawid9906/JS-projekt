function Car(brand, name, img, year, mileage, enginePower, price) {
  this.brand = brand;
  this.name = name;
  this.img = img;
  this.year = year;
  this.mileage = mileage;
  this.enginePower = enginePower;
  this.price = price;
}

let Car1 = new Car(
  "Mercedes-Benz",
  "Klasa G",
  "./zdjęcia/g klasa.jpg",
  2010,
  100000,
  420,
  300000
);

let Car2 = new Car(
  "Mercedes-Benz",
  "AMG",
  "./zdjęcia/amg.jpg",
  2021,
  13000,
  360,
  470000
);
let Car3 = new Car(
  "Mercedes-Benz",
  "Klasa S",
  "./zdjęcia/s-klasa.jpg",
  2015,
  84000,
  450,
  255000
);
let Car4 = new Car("Audi", "A5", "./zdjęcia/a5.jpg", 2019, 45000, 245, 144000);
let Car5 = new Car("Audi", "R8", "./zdjęcia/r8.jpg", 2017, 31000, 610, 550000);
let Car6 = new Car("Audi", "Q5", "./zdjęcia/q5.jpg", 2018, 85000, 150, 122000);
let Car7 = new Car("BMW", "M4", "./zdjęcia/m4.jpg", 2017, 135000, 460, 200000);
let Car8 = new Car("BMW", "X3", "./zdjęcia/x3.jpg", 2019, 159000, 184, 159000);

const Cars = [Car1, Car2, Car3, Car4, Car5, Car6, Car7, Car8];

console.log(window.localStorage);
const $carBrands = document.getElementsByClassName("carBrand");
const $carNames = document.getElementsByClassName("carName");
const $carYears = document.getElementsByClassName("carYear");
const $carEnginePowers = document.getElementsByClassName("carEnginePower");
const $carMileages = document.getElementsByClassName("carMileage");
const $carPrices = document.getElementsByClassName("carPrice");
const $carImages = document.getElementsByClassName("carImage");
console.log($carImages);

let showCarInfo = (function () {
  for (let i = 0; i < 8; i++) {
    $carBrands[i].insertAdjacentText("afterbegin", Cars[i].brand);
    $carNames[i].insertAdjacentText("afterbegin", Cars[i].name);
    $carYears[i].insertAdjacentText("afterbegin", Cars[i].year);
    $carEnginePowers[i].insertAdjacentText("afterbegin", Cars[i].enginePower);
    $carMileages[i].insertAdjacentText("afterbegin", Cars[i].mileage);
    $carPrices[i].insertAdjacentText("afterbegin", Cars[i].price);
    $carImages[i].src = Cars[i].img;
  }
})();

const $searchInput = document.getElementById("search-loop");
const $autoBanners = document.getElementsByClassName("auto-banner");

$searchInput.addEventListener("input", (e) => {
  const value = e.target.value.toLowerCase();

  for (i = 0; i < 8; i++) {
    const isVisible =
      Cars[i].brand.toLowerCase().includes(value) ||
      Cars[i].name.toLowerCase().includes(value);
    if (!isVisible) {
      $autoBanners[i].style.display = "none";
    } else if (isVisible) {
      $autoBanners[i].style.display = "flex";
    }
  }
});

let clickBanner = (function () {
  for (let i = 0; i < 8; i++) {
    let e = i;
    $autoBanners[i].addEventListener("click", function () {
      window.localStorage.setItem("brand", Cars[e].brand);
      window.localStorage.setItem("name", Cars[e].name);
      window.localStorage.setItem("price", Cars[e].price);
      window.localStorage.setItem("img", Cars[e].img);
      window.location.href = "formularz.html";
    });
  }
})();
