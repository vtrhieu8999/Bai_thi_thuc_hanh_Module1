class Animal{
    constructor(name, weight) {
        this.name= name;
        this.weight= weight;
    }
    setName(name){
        this.name= name;
    }
    getName(){
        return this.name;
    }
    setWeight(weight){
        this.weight= weight;
    }
    getWeight(){
        return this.weight;
    }
    toString(){
        return "Con vật này có tên là "+ this.name +" và cân nặng của nó là "+ this.weight;
    }
}

let objAnimal1= new Animal('','');
objAnimal1.setName('Elephant');
objAnimal1.setWeight(45.6);
document.write(objAnimal1.toString());
let objAnimal2= new Animal('Cat', 7);
objAnimal2.setName('Mouse');