class RailwayForm{
    constructor(){
        console.log("constructor called");
    }
    fill(givenname){
        this.username=givenname;
        console.log(this.username);
        
    }
    submit(){
        alert("Form Submitted")
    }
    cancel(){
        alert("Submission Cancelled")
    }
}
let form1 = new RailwayForm()
form1.fill("kiran")
let form2 = new RailwayForm()
form2.fill("Charan")
form1.submit()
form2.submit()
form1.cancel();