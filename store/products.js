// const producto1 = {
//   nombre: "celular",
//   precio: 100000,
//   stock: 2,
// };

// foto = "https://postimg.cc/CBk2wXdW";
// producto1.id = "id123";
// producto1[foto] = "https://postimg.cc/CBk2wXdW";

// console.log(producto1);

class Product {
  constructor(id, title, price, stock, images, onsale, supplier) {
    this.id = id;
    this.title = title;
    this.price = price;
    this.stock = stock;
    this.images = images;
    this.onsale = onsale;
    this._supplier = supplier;
  }

  sellUnits(units) {
    this.stock = this.stock - units;
  }

  get getSupplier() {
    return this._supplier;
  }
  set setSupplier(newName) {
    this._supplier = newName;
  }
}

const prod1 = new Product("01", "celular", "200", "1", "[]", true);
const prod2 = new Product("02", "laptop", "400", "3", "[]", false);
const prod3 = new Product("03", "tablet", "300", "5", "[]", true);
const prod4 = new Product("04", "mouse", "100", "2", "[]", true, "samsung");
const prod5 = new Product("04", "keyboard", "150", 12, "[]", true, "samsung");

console.log(prod1, prod2, prod3, prod4, prod5, prod2.title, prod3.onsale);
prod4._supplier = "coolbox";
console.log(prod4._supplier);
console.log(prod5.stock);

