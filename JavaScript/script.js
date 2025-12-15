// let heros = ['Mahesh','Pawan','Prabhas'];
// console.log(heros[1])
// var userdetails = {
//     name:'kiran',
//     age:25,
//     salary:30000
// }
// console.log(userdetails.salary)

//Conditional statements
// let num1 = 10
// let num2 =5
// if(num1>num2){
//     console.log("num1 greater than num2")
// }
// else{
//     console.log("num2 greater than num1")
// }

//you have an array popular trees names and make a soft copy of that array
// let trees = ['neemtree','oaktree','banyantree','mangotree']
// let softcopy = trees
// trees.pop()
// console.log(trees)
// console.log(softcopy)

//you have an array of popular fruits make a hard copy of that array
// let a = ['apple','banana','guava','mango']
// let b = [...a] //...spread operator
// a.pop()
// console.log(a)
// console.log(b)

//merge two arrays of popular and favourite
// var popularCities=['mumbai', 'chennai', 'hyderabad']
// var favCities=['pune', 'bangalore', 'delhi']

// console.log(popularCities.concat(favCities))

//find the length of a array and store it in a variable
// var popularCities=['mumbai', 'chennai', 'hyderabad']
// let length = popularCities.length
// console.log("length of popularCities array: "+length)

//check if London is there in an array and store it in a variable
// let cities=['paris', 'manchester', 'denmark', 'london', 'tokyo','London']
// let isCityThere = cities.includes('london' && 'London')
// console.log(isCityThere)

//--------------------Loops----------------------
// for(let i =0;i<cities.length;i++){
//     if( cities[i] ==='london'){
//         var a = cities[i];
//         console.log('founded the city')
//        break;
//     }
// }

//write a loop to print the sum of numbers from 1 to 5
// let sum=0;
// let i=0;
// while(i<=5)
// {
// sum=sum+1;//sum=15
// i++; //6
// }
// console.log(sum);

//write a while loop count downs from 5 to 1
// let i=5;
// console.log('CountDown Starts')
// while(i>=1){
//     console.log(i)
//     i--;
// }
//write a while loop count downs from 5 to 1
// let countdown=[]
//     let j=5;
//     while(j>0){
//     countdown.push(j);
//     j--;
// }
// console.log(countdown)

//add numbers from 1 to 3 using do while
// let total = 0;
// let x =1; //Declaration & initialization
// do{
//     total+=x;
//     x++;//Increment
// }while(x<=3) //condition
// console.log(total)

//there is an array of numbers multiply them by 2 and give the result in another array

// let a =[3,4,8,9]
// let b =[];
// for(let i =0;i<a.length;i++){
//     b.push(2* a[i])
// }
// console.log(b)
//display the items from one array to another array by using Loops
// let names =['kiran','kumar','ankam','banglore']
// let myname =[];
// for(let i =0;i<names.length;i++){
//     myname.push(names[i])
// }
// console.log(myname)

//stop when tulip found in array 
let flowers = ['rose','lilly','tulip','sunflower']
let mylist = [];
for(let i = 0; i<flowers.length;i++){
    if(flowers[i]=='tulip'){
        break;
    }
    mylist.push(flowers[i]);
}
console.log(mylist)
//Stack -> Chapatis in Hot Box -> LIFO
//Queue -> Queues for chapatis






