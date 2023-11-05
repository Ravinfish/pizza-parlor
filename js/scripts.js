// Business Logic

function Pizza(toppings, size, sauce) {
  this.toppings = toppings;
  this.size = size;
  this.sauce = sauce;
};


Pizza.prototype.baseCost = function () {
  let basePrice;
  if (this.size === "personal") {
    basePrice = 15;
  } else if (this.size === "medium") {
    basePrice = 25;
  } else if (this.size === "large") {
    basePrice = 30;
  } else if (this.size === "extra large") {
    basePrice = 35;
  } else {
    return 0;
  }

  const toppingPrice = 5;
  const saucePrice = 5;
  const toppingCount = this.toppings.length;
  const totalPrice = basePrice + saucePrice + (toppingPrice * toppingCount);
  return parseFloat(totalPrice).toFixed(2);
};

// UI Logic

function handleFormSubmission(e) {
  e.preventDefault();
  const zaSize = document.querySelector("input[name=size]:checked").value;
  const toppingsSelected = Array.from(document.querySelectorAll("form#checkbox-form input[name=toppings]:checked")).map(input => input.value);
  const sauceSelected = document.querySelector("input[name=sauce]:checked").value;

  const pizza = new Pizza(toppingsSelected, zaSize, sauceSelected);

  const sizeOutput = document.getElementById("sizeInfo");
  const sauceOutput = document.getElementById("sauceInfo");
  const toppingOutput = document.getElementById("toppingInfo");

  sizeOutput.textContent = `${pizza.size} pizza`;
  sauceOutput.textContent = `${pizza.sauce} sauce`;
  toppingOutput.textContent = pizza.toppings.join(", ");

  let outputBox = document.getElementById("pizzaPrice");
  outputBox.classList.remove("hidden");
  let totalPrice = pizza.baseCost();
  let totalSpan = document.querySelector(".total");
  totalSpan.textContent = totalPrice;
}

window.addEventListener("load", function () {
  const button = document.getElementById("addPizza");
  button.addEventListener("click", handleFormSubmission);
  const form = document.getElementById("radio-form");
  form.addEventListener("submit", function (e) {
    e.preventDefault();
  });
});




