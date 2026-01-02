// HOF: Higher Order Function
// Call back functions
// pure functions
// impure functions
// first order function
// closure
// scopes: global, local scope
// map -for each example ,reduce, filter, 

//HOF:
/*It returns the function or else it accepts the function in parameter
it is called as hof*/

// function abcd(){
//     return function bqc(){
//         console.log("Hello");
//     }
// }
// console.log(abcd()());

//case 2
// function xyz(fnc){
//     fnc();
// }//Hof
// xyz(function(){
//     console.log("Helloo Hii!")
    //->callback function;
// })

//pure functions-> a function without any side effects
// function add(a,b){
//     return a+b;
// }
// console.log(add(2,3));

//impure functions
// let total = 0;
// function acd(a){
//     total= total+a;
// }
// acd(6);
// console.log(total);

/*Scopes*/
//global scope -> a varibale can be available in and out of that scope
//local scope -> a varibale can be available in that particular scope only

//first class function
//you can assign a function to a variable
// var a =12;
// var a = function(){}

//Map
// var arr = [1,2,3,4]

// var res = arr.map(function(value){
//     return value*2;
// })
//map will create a separate array
// console.log(res)


// arr.forEach(function(value){
//     console.log(value);
// }) 
//it is not creating an array

//closure function
// In HOF the function which is returning another function and using the data
// of parent that is called as a closure
// function pqs(){
//     var a =12
//     return function(){
//         console.log(a);
        
//     }
// }







