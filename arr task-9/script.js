var arr1=[
    {name:"samsung",model:"Galaxy",memory:32,price:15000,rating:""},
    {name:"nokia",model:"S07",memory:64,price:22000,rating:""},
    {name:"Xiomi",model:"note",memory:128,price:12000,rating:""},
    {name:"apple",model:"s01",memory:64,price:2500,rating:""},
    {name:"motorola",model:"s01",memory:64,price:15000,rating:""}
  
  ]
  function fun(){
  var table="<table><tr><th>Comapny</th><th>model</th><th>Memory</th><th>price</th><th>Rating</th></tr>"
   arr1.forEach((element)=>{
      table+=
      "<tr><td>"+
      element.name+
      "</td><td>"+
      element.model+
      "</td><td>"+
      element.memory+
      "</td><td>"+
      element.price+
      "</td><td>"+
      element.rating+
      "</td></tr>"

      document.getElementById("p1").innerHTML=table
   })
  table+="</table>"
  }
function rate(){
  var sel1=document.getElementById("sel1").value;
  var sel2=document.getElementById("sel2").value;

  if(sel1=="samsung" )
  {
    arr1[0].rating=sel2
  }
  else if(sel1=="nokia" )
  {
    arr1[1].rating=sel2
  }
  else if(sel1=="xiomi" )
  {
    arr1[2].rating=sel2
  }
  else if(sel1=="apple" )
  {
    arr1[3].rating=sel2
  }
  else if(sel1=="moto" )
  {
    arr1[4].rating=sel2
  }
  var table="<table><th>Companny</th><th>Model</th><th>Memory</th><th>price</th><th>Rating</th>"


arr1.forEach(element => {
    table+="<tr><td>"+
        element.name+
        "</td><td>"+
        element.model+
        "</td><td>"+
        element.memory+
        "</td><td>"+
        element.price+
        "</td><td>"+
        element.rating+
        "</td></tr>"
        document.getElementById("p2").innerHTML=table
});
table+="</table>"

}