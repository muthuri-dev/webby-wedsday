//creating classes
export default class Item {
  constructor(name, price) {
    this.name = name;
    this.price = price;
  }
  getDiscount() {
    var discount = 210;
    return this.price - discount;
  }
}
