class emp{
    constructor(id,name,salary){
        this.id=id;
        this.name=name;
        this.salary=salary;
    }
}
var Data=[{"id":1,"name":"john","salary":8000},{"id":2,"name":"mark","salary":9000},{"id":3,"name":"Yash","salary":7000}];
document.getElementById("p1").innerHTML=JSON.stringify(Data);
