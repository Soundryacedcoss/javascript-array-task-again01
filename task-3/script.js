class emp{
    constructor(id,name,salary){
        this.id=id;
        this.name=name;
        this.salary=salary;
    }
}
var emp1= new emp(1,"john",8000);
document.getElementById("Demo1").innerHTML=JSON.stringify(emp1);
// console.log(emp1)