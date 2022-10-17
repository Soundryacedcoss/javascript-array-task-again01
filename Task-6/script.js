class emp{
    constructor(id,name,salary){
        this.id=id,
        this.name=name,
        this.salary=salary
    }
}
var obj1=new emp(1,"john",8000)
var obj2=new emp(1,"mark",9000)
var obj3=new emp(1,"yash",7000)


var arr=[]

arr.push(obj1);
arr.push(obj2);
arr.push(obj3);
var str=JSON.stringify(arr);
var obj=JSON.parse(str);
let myfun=()=>{
let table='<table><tr><th>id</th><th>Name</th><th>Salery</th></tr>'
obj.forEach(element => {
    table+=
    '<tr><td>'+
    element.id+
    '</td><td>'
    +element.name+
    '</td><td>'
    +Math.floor(element.salary*0.15)+
    '</td><td>'
});
table+='</table>'
document.getElementById("demo").innerHTML=table;
}
