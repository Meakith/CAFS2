class Product {
    constructor(name, price, salePrice) {
            this.name = name,
            this.price = price,
            this.salePrice = salePrice,
            this.category = [
                'T-Shirt',
                'Pants',
                'Sweaters',
                'Shoes'
            ]
    }

    getProduct() {
        return `${this.name}, ${this.category}, ${this.price}`;
    };

};
const productOne = new Product('Nike',this.category[1],'50$')

console.log(productOne.getProduct());

