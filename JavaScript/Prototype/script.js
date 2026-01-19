let computer = {cpu:13}
let lenovo={screen:"HD",
    __proto__:computer,
}
// console.log(computer);
// console.log(lenovo,lenovo.__proto__);

let genericCar = {
    tyres:4
}
let tesla ={
    driver:"AI"
}
Object.setPrototypeOf(tesla,genericCar)
console.log(tesla.tyres);
