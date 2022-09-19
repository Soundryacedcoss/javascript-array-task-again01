var arr=[
    
    {name:"samsung",model:"Galaxy",memory:32,price:15000,
    
    },
    
    
    {name:"nokia",model:"S07",memory:64,price:22000,
  
    },
    
    
    {name:"Xiomi",model:"note",memory:128,price:12000,
    
    },
    
    
    {name:"apple",model:"s01",memory:64,price:25000,
    
    },
    
    
    {name:"motorola",model:"s01",memory:64,price:15000,
   
    },
    ];

function search(){
    var mini=document.getElementById("mini").value;
    var maxx=document.getElementById("maxx").value;
    var table="<table><tr><th>Comapny</th><th>Model</th><th>Memory</th><th>price</th></tr>"
    document.getElementById("p2").innerHTML=table
    arr.forEach(element => {
        if(element.price>=mini && element.price<=maxx){
        table+="<tr><td>"+
        element.name+
        "</td><td>"+
        element.model+
        "</td><td>"+
        element.memory+
        "</td><td>"+
        element.price+
        "</td></tr>"
        }
        document.getElementById("p1").innerHTML=table
    });
    table+="</table>"
}
// function display(){}
