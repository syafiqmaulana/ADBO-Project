class StoreItem {
  constructor(name, price) {
    this.name = name;
    this.price = price;
  }

  info() {
    return `Item: ${this.name}, Price: Rp${this.price}`;
  }
}


const item1 = new StoreItem("Buku Tulis", 5000);
const item2 = new StoreItem("Pulpen", 3000);


console.log(item1.info());
console.log(item2.info());
