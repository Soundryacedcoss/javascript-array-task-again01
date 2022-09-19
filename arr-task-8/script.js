
var arr=[
    
{name:"samsung",model:"Galaxy",memory:32,price:15000,
quantity:20,
},


{name:"nokia",model:"S07",memory:64,price:22000,
quantity:21,
},


{name:"Xiomi",model:"note",memory:128,price:12000,
quantity:23,
},


{name:"apple",model:"s01",memory:64,price:2500,
quantity:27,
},


{name:"motorola",model:"s01",memory:64,price:15000,
quantity:29,
}
]

function show(){
var table="<table><tr><th>Companny</th><th>Model</th><th>Memory</th><th>price</th><th>quantity</th></tr>"
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
    "</td></tr>"
    
    document.getElementById("p1").innerHTML=table
});
table+="</table>"

}
function update(){
    var sel=document.getElementById("sel").value;
    var quantity=document.getElementById("quantity").value;

    if(sel="samsung"){
    arr[0].quantity=quantity
    }
    else if(sel="nokia"){
        arr[1].quantity=quantity
    }
    else if(sel="xiaomi"){
        arr[2].quantity=quantity
    }
    else if(sel="apple"){
        arr[3].quantity=quantity
    }
    else if(sel="motorola"){
        arr[4].quantity=quantity
    }
    console.log(quantity)
var table="<table><th>Companny</th><th>Model</th><th>Memory</th><th>price</th><th>quantity</th>"


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
        "</td></tr>"
        document.getElementById("p4").innerHTML=table
});
table+="</table>"
    
}