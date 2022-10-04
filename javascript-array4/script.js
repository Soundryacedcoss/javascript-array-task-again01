var arr1=[
  {name:"samsung",model:"Galaxy",memory:32,price:15000},
  {name:"nokia",model:"S07",memory:64,price:22000},
  {name:"Xiomi",model:"note",memory:128,price:12000},
  {name:"apple",model:"s01",memory:64,price:2500},
  {name:"motorola",model:"s01",memory:64,price:15000}

]

function add(){

var Company=document.getElementById("Company").value;
var Model=document.getElementById("Model").value;
var Memory=document.getElementById("Memory").value;
var price=document.getElementById("price").value;
    var list={
          name:Company,
          memory:Memory,
          model:Model,
          price:price
    }
    arr1.push(list)
    console.log(arr1)
if(!isNaN(Company)){
  document.getElementById("p1").innerHTML="plss Enter comapny name in string.";
}
else{
  
  var table="<table><th>Companny</th><th>Model</th><th>Memory</th><th>price</th></tr>"
       arr1.forEach(element => {
        table+="<tr><td>"+
        element.name+
        "</td><td>"+
        element.model+
        "</td><td>"+   
        element.memory+
        "</td><td>"+
        element.price+     
          "</td></tr>"
  });
  table+="</table>"
  document.getElementById("p1").innerHTML=table;
}
}