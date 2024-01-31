import message from "./modules/message.js";
import Item from "./modules/shop.js";

document.getElementById("test").innerHTML = message();

// the classes
const newItem = new Item("pen", 500);

document.querySelector("#shop").innerHTML =
  "The original price is " + newItem.getDiscount();
