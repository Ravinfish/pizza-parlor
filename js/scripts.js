// Business Logic

function Pizza(toppings, size, sauce) {
  this.toppings = toppings;
  this.size = size;
  this.sauce = sauce;
};

Pizza.prototype.addToppings = function (topping) {
  this.toppings = topping.value;
  if (!Array.isArray(this.toppings)) {
    this.toppings = [];
  }
  this.toppings.push(topping);
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
  return totalPrice.toFixed(2);
  };

// UI Logic

function handleFormSubmission(e) {
  e.preventDefault();
  const zaSize = document.querySelector("input[name=size]:checked").value;
  const toppingsSelected = Array.from(document.querySelectorAll("form#checkbox-form input[name=toppings]:checked")).map(input => input.value);

  const order = new Pizza(sizeSelector, toppingsSelected);
  order.size;

  const sizeOutput = document.getElementById("sizeInfo");
  const toppingOutput = document.getElementById("toppingInfo";
  )
}


