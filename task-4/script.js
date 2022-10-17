class emp{
    constructor(id,name,salary){
        this.id=id,
        this.name=name,
        this.salary=salary
    }
}
var obj1={"id":1,"name":"john","salary":8000}
var obj2={"id":2,"name":"mark","salary":9000}
var obj3={"id":3,"name":"yash","salary":7000}

var arr=[]
arr.push(obj1);
arr.push(obj2);
arr.push(obj3);

function fun(){
   
    let table='<table><tr><th>id</th><th>Name</th><th>Salery</th></tr>'
    // arr.forEach((element)=>{
    table+=
    '<tr><td>'+
    this.id+
    '</td><td>'
    +this.name+
    '</td><td>'+
    +this.salary
    '</td></tr>'
    // table+='</table>'
    // });
    table+='</table>'
    document.getElementById("Demo1").innerHTML=table;
}
