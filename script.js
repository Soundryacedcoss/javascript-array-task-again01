function Detail(){
    "use strict"
    var tableBody=document.getElementById("table-body");
    var td1=document.createElement("td");
    var td2=document.createElement("td");
    var td3=document.createElement("td");
    var td4=document.createElement("td");
    var row=document.createElement("tr");

    // if((product_id=="") ||  (product_name == "") || (product_price== ""))
    // {
    //     alert("Please fill all the boxes");
    // }

    td1.innerHTML=document.getElementById("Company").value;
    td2.innerHTML=document.getElementById("Model").value;
    td3.innerHTML=document.getElementById("Price").value;
    td4.innerHTML=document.getElementById("Memory").value;
    // if((td1.innerHTML=="") ||  (td2.innerHTML== "") || (td3.innerHTML== ""))
    // {
    //     alert("Please fill all the boxes");
    // }
    row.appendChild(td1);
    row.appendChild(td2);
    row.appendChild(td3);
    row.appendChild(td4);

    tableBody.appendChild(row);
}