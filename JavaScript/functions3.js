//Map -> 
// It will create a new array and it will "return" some values.

//filter -> 
// It will be creating a new array and it will be filtering based on condition

//reduce ->
//from given array it will be reducing it to any single value.

// var arr = [1,2,3,4]
// let ans = arr.map(function(value){
//    return value *3;
// })
// console.log(ans);

// var arr = [1,2,3,4]
// let ans = arr.filter(function(value){
//    return value>2;
// })
// console.log(ans);

// var arr = [1,2,3,4]
// let ans = arr.reduce(function(acc,value){
//    return acc*value;
// },0)
// console.log(ans);

var arr=[1,1,2,3,4,5,2,3,5]
let ans1 = arr.sort(function(a,b){
    return a-b; //sorted in ascending order
})
console.log(ans1);
let newArr = [...new Set(ans1)]; 
console.log(newArr);




