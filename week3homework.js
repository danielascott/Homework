// Create an array of pizzaToppings with at least four different toppings

const { get } = require("http");

const pizzaToppings = [ "cheese", "pepperoni", "olives", "sausage"]

// Create a greetCustomer function that prints a message that welcomes a guest,
// then informs them of the available toppings by looping over pizzaToppings
//(don't worry about perfect grammar here yet, i.e. "a, b, and c", see Bonus Challenge #9)
// i.e. "Welcome to Pizza House, our toppings are: a, b, c, ..."

function greetCustomer() {
    console.log("Welcome to Pizza House, our toppings are:");
    for (let topping of pizzaToppings)
    console.log(topping)
}


// Create a getPizzaOrder function that
// has the parameters size, crust, and an indefinite amount of toppings as inputs
// prints the order, i.e. "One large thick crust pizza with x, y, z, ... coming up!"
// outputs a list with the size, crust, and toppings

function getPizzaOrder(param1, param2, ...param3){
    console.log("one ${param1} with ${param2} crust, and ${param3} for toppings");
    return param1 + param2 + param3;
}


// Create a preparePizza function that
// has an array as its parameter with three items: a size, a crust, and a list of toppings
// prints something like "...Cooking pizza..."
// outputs a pizza Object with appropriate key-value pairs for size, crust, and toppings

function preparePizza(){
    const details = [size, crust, ...toppings];
    const pizza = {
        size : size,
        crust : crust,
        toppings : toppings,
    };
    console.log(".,.Cooking Pizza...")
    return pizza;
    
}

// Create a servePizza function that
// has a parameter of a pizza Object
// logs a message that the pizza is ready and repeats the order, i.e. "Order up! Here's your large thick crust pizza with x, y, z, ... Enjoy!"
// outputs the same pizza Object that was passed in

function servePizza(pizza) {
    console.log("Order Up! Here's your" + pizza[size] + " " + pizza[crust] +" crust " + "with" + pizza[crust] + toppings)
    return pizza
}



greetCustomer()
getPizzaOrder("large", "thin", "pepperoni", "cheese", "peppers")
preparePizza()
servePizza(preparePizza)