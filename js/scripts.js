// Business Logic

function Pizza(toppings, size) {
  this.toppings = toppings;
  this.size = size;
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
    basePrice = 5;
  } else if (this.size === "medium") {
    basePrice = 8;
  } else if (this.size === "large") {
    basePrice = 10;
  } else if (this.size === "extra large") {
    basePrice = 12;
  } else {
    return 0;
  }

  const toppingPrice = 1.5;
  const toppingCount = this.toppings.length;
  const totalPrice = basePrice + (toppingPrice * toppingCount);
  return totalPrice.toFixed(2);
  };

  // const zaToppings = {
  //   pepperoni: "Pepperoni",
  //   canadianBacon: "Canadian Bacon",
  //   chicken: "Chicken",
  //   bacon: "Bacon",
  //   redOnion: "Red Onion",
  //   pineapple: "Pineapple",
  //   artichoke: "Artichoke Hearths",
  //   spinach: "Spinach",
  //   mushrooms: "Mushrooms",
  // };
  // const sauce = {
  //   redSauce: "Red Sauce",
  //   whiteSauce: "White Sauce",
  //   garlicOil: "Garlic and Olive Oil"
  // };

  // const zaSize = this.size;
  // const zaSauce = this.sauce;


