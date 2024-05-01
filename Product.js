class Product {
    constructor(code, fullName, producer, model, status, price, promotion, inventory) {
        this.code = code;
        this.fullName = fullName;
        this.producer = producer;
        this.model = model;
        this.status = status;
        this.price = price;
        this.promotion = promotion;
        this.inventory = inventory;
    }
    getCode(){
        return this.code;
    }
    getFullName(){
        return this.fullName
    }
    getProducer(){
        return this.producer;
    }
    getModel(){
        return this.model;
    }
    getStatus(){
        return this.status;
    }
    getPrince(){
        return this.price;
    }
    getPromotion(){
        return this.promotion;
    }
    getInventory(){
        return this.inventory;
    }
    setCode(code){
        this.code = code;
    }
    setFullName(fullName){
        this.fullName = fullName;
    }
    setProduct(product){
        this.producer = product;
    }
    setModel(model){
        this.model = model;
    }
    setStatus(status){
        this.status = status;
    }
    setPrice(price){
        this.price = price;
    }
    setPromotion(promotion){
        this.promotion = promotion;
    }
    setInventory(inventory){
        this.inventory = inventory;
    }
    // tạo phương thức edit cho phép chỉnh sửa thông tin của đối tượng Production
    edit(code, fullName, producer, model, status, price, promotion, inventory){
        this.code = code;
        this.fullName = fullName;
        this.producer = producer;
        this.model = model;
        this.status = status;
        this.price = price;
        this.promotion = promotion;
        this.inventory = inventory;
    }
}