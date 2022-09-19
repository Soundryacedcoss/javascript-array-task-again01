var data1=
    
        {name:"samsung",model:"Galaxy",memory:32,price:15000,
        quantity:20,chk:"<input type='checkbox' id='d1'>",
    }

var data2=
        {name:"nokia",model:"S07",memory:64,price:22000,
        quantity:15,chk:"<input type='checkbox' id='d2'>",
    }
   
var data3=
        {name:"Xiomi",model:"note",memory:128,price:12000,
        quantity:21,
        chk:"<input type='checkbox' id='d3'>",
    }
    
    var data4=
        {name:"apple",model:"s01",memory:64,price:2500,
        quantity:13,chk:"<input type='checkbox' id='d4'>",
    }
    
var data5=
        {name:"motorola",model:"s01",memory:64,price:15000,
        quantity:18,chk:"<input type='checkbox' id='d5'>",
    }
var arr=[data1,data2,data3,data4,data5]
function fun(){
    table="<table><tr><th>Companny</th><th>Model</th><th>Memory</th><th>price</th><th>Quantity</th><th>Cart</th></tr>"
    arr.forEach(element => {
        table+="<tr><td>"+
            element.name+
            "</td><td>"+
                element.model+
                "</td><td>"+
                element.memory+
                "</td><td>"+
                element.price+
                "</td><td>"+
                element.quantity+
                "</td><td>"+
                element.chk+
            "</td></tr>"
    });
    table+="</table>"
    document.getElementById("p1").innerHTML=table
}

function fun2()

{
    
    var quantity
    if(arr.name="samsung" && d1.checked){
      quantity=arr[0].quantity-1
      document.getElementById("p2").innerHTML=" updated quantity of " + arr[0].name +  " is " + quantity
      
    }
    else if(arr.name="nokia" && d2.checked){
        quantity=arr[1].quantity-1
        console.log(quantity)
        document.getElementById("p3").innerHTML=" updated quantity of " + arr[1].name +  " is " + quantity
        
    }
    else if(arr.name="xiomi" && d3.checked){
        quantity=arr[2].quantity-1
        console.log(quantity)
        document.getElementById("p4").innerHTML=" updated quantity of " + arr[2].name +  " is " + quantity
        
    }
    else if(arr.name="apple" && d4.checked){
        quantity=arr[3].quantity-1
        console.log(quantity)
        document.getElementById("p5").innerHTML=" updated quantity of " + arr[3].name +  " is " + quantity
        
    }
    else if(arr.name="moto" && d5.checked){
        quantity=arr[4].quantity-1
        console.log(quantity)
        document.getElementById("p6").innerHTML=" updated quantity of " + arr[4].name +  " is " + quantity
        
    }
    //  var table="<table><tr><th>Companny</th><th>Model</th><th>Memory</th><th>price</th><th>Quantity</th>"
    //  arr.forEach(element => {
    //     table+=
    //     "<tr><td>"
    //     element.name+
    //     "</td><td>"+
    //     element.model+
    //     "</td><td>"+
    //     element.memory+
    //     "</td><td>"+
    //     element.price+
    //     "</td><td>"+
    //     element.quantity
    //     "</td></tr>"
    //     document.getElementById("res").innerHTML=table
    //  });
    //  table+="</table>"
    //  document.getElementById("res").innerHTML=table
}

