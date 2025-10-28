class FruitBasket {
  constructor() {
    this.fruitsBasket = []; 
  }


  addItem(fruit) {
    this.fruitsBasket.push(fruit);
    console.log(`${fruit} ditambahkan ke dalam keranjang.`);
  }

  removeLastItem() {
    if (this.fruitsBasket.length > 0) {
      const removed = this.fruitsBasket.pop();
      console.log(`${removed} dihapus dari keranjang.`);
    } else {
      console.log("Keranjang kosong, tidak ada buah yang bisa dihapus.");
    }
  }


  getInformation() {
    if (this.fruitsBasket.length === 0) {
      return "Keranjang masih kosong.";
    } else {
      return `Isi keranjang: ${this.fruitsBasket.join(", ")}`;
    }
  }
}

const Basket = new FruitBasket();

Basket.addItem("Apel");
Basket.addItem("Jeruk");
Basket.addItem("Mangga");

console.log(Basket.getInformation()); 

Basket.removeLastItem(); 
console.log(Basket.getInformation()); 
