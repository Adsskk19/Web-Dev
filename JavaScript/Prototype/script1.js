function person(name,age){
    this.name = name
    this.age = age
}
function Car(brand,model){
    this.brand=brand
    this.model=model
}

let myCar = new Car("BENZ","Newzen")
console.log(myCar);

let kiran = new person("kumar",23)
console.log(kiran);


