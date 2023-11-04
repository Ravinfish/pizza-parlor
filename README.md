

Describe: Pizza()

Test: "It should return a Pizza object with a property to select toppings and size"
Code: const myPizza = new Pizza (["peperoni","bacon","onion"], "medium")
Expected Output: Pizza { toppings: ["peperoni","bacon","onion"], size: "medium"};

Describe: Pizza.prototype.cost()

Test: "It should take a pizza object and return the base cost based on size"
Code: newPizza.cost()
Expected Output:8

Test: "It should take a pizza object and add additional cost based on toppings chosen"
Code: newPizza.cost()
Expected Output: 11

Test: 
Code:
Expected Output: