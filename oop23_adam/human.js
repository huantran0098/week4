class Human{
    name
    gender
    weight
    constructor(name, gender, weight) {
        this.name = name ;
        this.gender = gender ;
        this.weight = weight ;
    }
    isMale(){
        if (this.setGender()){
            return 'male';
        } else {
            return 'female';
        }
    }

    setGender(genderSet){
        this.gender = genderSet ;
    }
    checkApple(apple){
        return apple.getWeight();
    }
    eat(apple){
        if (apple.isEmty()){
            this.weight++
            apple.decrease()
            this.say('vẫn còn, ăn được tiếp')
        } else {
            this.say('hết cmnr')
        }

    }
    say(String) {
        console.log(String)
    }
    getName() {
        return this.name
    }
    setName(nameSet) {
        this.name = nameSet ;
    }
    getWeight() {
        return this.weight
    }
    setWeight(weightSet){
        this.weight = weightSet
    }
}