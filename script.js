import message from "./modules/message.js";
import Item from "./modules/shop.js";

document.getElementById("test").innerHTML = message();

// the classes
const newItem = new Item("pensils", 500);
const item1 = new Item("books", 700);
const item2 = new Item("laptop", 2100);
const item3 = new Item("set", 450);
const item4 = new Item("table", 1570);

//document.querySelector("#shop").innerHTML = "$ " + newItem.getDiscount();
document.querySelector("#shop").innerHTML = "$ " + item2.getDiscount();
document.querySelector("#name").innerHTML = newItem.name;

//async and await
async function runProcess() {
  try {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/todos/1"
    );
    const json = await response.json();
    console.log(json);
  } catch (error) {
    console.log(error);
  }
}

runProcess();
