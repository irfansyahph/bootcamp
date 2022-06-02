export default class Product {
    constructor(prodId, prodName, category, price = 0, totalBuy = 1) {
        this.prodId = prodId
        this.prodName = prodName
        this.category = category
        this.price = price
        this.totalBuy = totalBuy
    }

    setPrice(price) {
        
    }

    setTotalBuy(total) {

    }

    toString() {
        return `ProdukID ${this.prodId}, Harga Rp.${this.price} berjumlah ${this.totalBuy}`
    }

}