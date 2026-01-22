function getDetails (username,cb) {
setTimeout(function() {
console.log("send request.....")
}, 1000);
setTimeout(function() {
console.log("fetching data....")
},3000);
setTimeout(function() {
cb();
},6000);
console.log("hel0000000000000000000000000")
}
getDetails("bapuji",function(){
console.log("data is saved in the gallery");
});


//step 1 :-order the food
step 2:-payment
step 3:-food is being prepared
step 4:-delivery boy is ready to pick up your order
step:-delivery boy has taken food from the restaurant
step 6:-arriving to the location
step7:-Food has been delivered
step8:=give the valuable feedback on food


//Promises
const pr=new Promise(function(res,rej){
console.log("Bring Instagram Data");
console.log("loading data ......");
console.log("data is not fetched due to some error ");
rej();
})
pr.then(function(){
console.log("resolved");
}).catch(function() {
console.log("rejected")
});


