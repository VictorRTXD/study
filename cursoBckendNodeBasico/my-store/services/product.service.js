import { faker } from "@faker-js/faker";

class ProductService {
  constructor() {
    this.products = [];
    this.generate();
  }

  generate() {
    for (let i = 0; i < 100; i++) {
      this.products.push({
        id: faker.datatype.uuid(), 
        name: faker.commerce.productName(), 
        price: faker.commerce.price(),
      });
    }
  }

  find() {
    return this.products;
  }

  findOne(id) {
    return this.products.find(item => item.id === id);
  }

  // Métodos adicionales como crear, editar y eliminar
}

module.exports = ProductService;