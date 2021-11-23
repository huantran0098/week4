class Apple{
    weight
    constructor(weight) {
        this.weight = weight ;
    }
    getWeight() {
        return this.weight ;
    }
    isEmty() {
        if (this.getWeight() > 0) {
            return true ;
        } else {
            return  false
        }
    }
    decrease() {
        if (this.isEmty()){
            this.weight-- ;
        }
    }
}