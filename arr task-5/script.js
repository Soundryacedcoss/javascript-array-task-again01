var arr1=[
    {name:"samsung",price:15000},
    {name:"nokia",price:22000},
    {name:"Xiomi",price:12000},
    {name:"apple",price:2500},
    {name:"motorola",price:15000}

]
var arr=[];

function add(){
    var sel=document.getElementById("sel").value
    var quantity=document.getElementById("quantity").value

    if(sel=="samsung"){
        var list={
            name:sel,
            quantity:quantity,
            price:arr1[0].price
        };
        arr.push(list)
    }
    
    else if(sel=="nokia"){
        var list={
            name:sel,
            quantity:quantity,
            price:arr1[1].price
        };
        arr.push(list)
    }

    else if(sel=="Xiomi"){
        var list={
            name:sel,
            quantity:quantity,
            price:arr1[2].price
        };
        arr.push(list)
    }
    else if(sel=="apple"){
        var list={
            name:sel,
            quantity:quantity,
            price:arr1[3].price
        };
        arr.push(list)
    }
    else if(sel=="motorola"){
        var list={
            name:sel,
            quantity:quantity,
            price:arr1[4].price
        };
        arr.push(list)
    }
    console.log(arr)
    var table="<table><tr><th>Name</th><th>Quantity</th><th>Amount</th><th>Total</th></tr>"
  arr.forEach(element => {
    table+="<tr><td>"+
        element.name+
        "</td><td>"+
         element.quantity+
         "</td><td>"+
         element.price+
         '</td></tr>'
        //  "</td><td>"+
        //  element.price*element.quantity+
        //  "</td></tr>";
  });
  table+="</table>";
  document.getElementById("res").innerHTML=table;
}

function Gen_bill(){
    var sel=document.getElementById("sel").value;
    var quan=document.getElementById("quantity").value
    var total=0
    var table="<h3>Bill:</h3>"
    table+="<table><tr><th>Discription</th><th>quantity</th><th>price</th></tr>"
    for (let i = 0; i< arr.length; i++) {
        if(sel=="samsung"){
            total+=15000*arr[i].quantity
            table+=
            "<tr><td>"
            arr[i].name+
            "/td><td>"
            arr[i].quantity+
            "</td><td>15000</td></tr>"


        }
        else if(sel=="nokia"){
            total+=22000*arr[i].quantity
            table+=
            "<tr><td>"
            arr[i].name+
            "/td><td>"
            arr[i].quantity+
                "</td><td>22000</td></tr>"
        }
        else if(sel=="xiomi"){
            total+=12000*arr[i].quantity
            table+=
            "<tr><td>"
            arr[i].name+
            "/td><td>"
            arr[i].quantity+
                "</td><td>12000</td></tr>"
        }
        else if(sel=="nokia"){
            total+=22000*arr[i].quantity
            table+=
            "<tr><td>"
            arr[i].name+
            "/td><td>"
            arr[i].quantity+
                "</td><td>2200</td></tr>"
        }
        else if(sel=="apple"){
            total+=25000*arr[i].quantity
            table+=
            "<tr><td>"
            arr[i].name+
            "/td><td>"
            arr[i].quantity+
                "</td><td>25000</td></tr>"
        }
        else if(sel=="motorola"){
            total+=15000*arr[i].quantity
            table+=
            "<tr><td>"
            arr[i].name+
            "/td><td>"
            arr[i].quantity+
                "</td><td>15000</td></tr>"
        }
        table+="<tr><td>"+total+"</td></tr></table>"
    } 
    document.getElementById("p1").innerHTML=table
}
  
