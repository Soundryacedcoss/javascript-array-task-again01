var data1=
    
        {name:"samsung",model:"Galaxy",memory:32,price:15000,
        ack:"<input type='checkbox' id='d1'>",
    }

var data2=
        {name:"nokia",model:"S07",memory:64,price:22000,
        ack:"<input type='checkbox' id='d2'>",
    }
   
var data3=
        {name:"Xiomi",model:"note",memory:128,price:12000,
        ack:"<input type='checkbox' id='d3'>",
    }
    
    var data4=
        {name:"apple",model:"s01",memory:64,price:2500,
        ack:"<input type='checkbox' id='d4'>",
    }
    
var data5=
        {name:"motorola",model:"s01",memory:64,price:15000,
        ack:"<input type='checkbox' id='d5'>",
    }

var arr=[data1,data2,data3,data4,data5]
function show(){
    table="<table><tr><th>Companny</th><th>Model</th><th>Memory</th><th>price</th><th>Action</th></tr>"
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
                element.ack+
            "</td></tr>"
    });
    table+="</table>"
    document.getElementById("p1").innerHTML=table
}

function fun(){
    var i1=document.getElementById("d1").checked;
    var i2=document.getElementById("d2").checked;
    var i3=document.getElementById("d3").checked;
    var i4=document.getElementById("d4").checked;
    var i5=document.getElementById("d5").checked;
    if(i1==true && i5==true){
        delete arr[4]
        delete arr[0]
    }
    else if(i1==true && i2==true){
        delete arr[1]
        delete arr[0]
    }
    else if(i1==true && i3==true){
        delete arr[2]
        delete arr[0]
    }
    else if(i1==true && i4==true){
        delete arr[3]
        delete arr[0]
    }
    else if(i1==true){
        delete arr[0]
        
    }
    else if(i2==true){
        delete arr[1]
    }
    else if(i3==true){
        delete arr[2]
    }
    else if(i4==true){
        delete arr[3]
    }
    else if(i5==true){
        delete arr[4]
    }
    
    table="<table><tr><th>Companny</th><th>Model</th><th>Memory</th><th>price</th><th>Action</th></tr>"
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
                element.ack+
            "</td></tr>"
    });
    table+="</table>"
    document.getElementById("p1").innerHTML=table
    
}
      
