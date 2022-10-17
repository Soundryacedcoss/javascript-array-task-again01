"use strict";
class emp{
    constructor(id,name,salary,updated_salary){
        this.id=id,
        this.name=name,
        this.salary=salary
        this.updated_salary=updated_salary
    }
}
var obj1=new emp(1,"john",8000)
var obj2=new emp(1,"mark",9000)
var obj3=new emp(1,"yash",7000)

var arr=[]
arr.push(obj1);
arr.push(obj2);
arr.push(obj3);
function show(){
try {
    let table='<table><tr><th>id</th><th>Name</th><th>Salery</th><th>updated salary</th></tr>'
    arr.forEach((element)=>{
    table+=
    '<tr><td>'+
    element.id+
    '</td><td>'
    +element.name+
    '</td><td>'
    +element.salary+
    '</td><td>30000</td></tr>'
    // table+='</table>'
    });
    table+='</table>'
    document.getElementById("Demo1").innerHTML=table;
} catch (error) {
    document.getElementById("Demo2").innerHTML=error
}
}