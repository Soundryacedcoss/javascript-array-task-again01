var data1 = {
  name: "samsung",
  model: "Galaxy",
  memory: 32,
  price: 15000,
  quantity: 20,
  chk: "<input type='checkbox' id='d1'>",
};

var data2 = {
  name: "nokia",
  model: "S07",
  memory: 64,
  price: 22000,
  quantity: 15,
  chk: "<input type='checkbox' id='d2'>",
};

var data3 = {
  name: "Xiomi",
  model: "note",
  memory: 128,
  price: 12000,
  quantity: 21,
  chk: "<input type='checkbox' id='d3'>",
};

var data4 = {
  name: "apple",
  model: "s01",
  memory: 64,
  price: 2500,
  quantity: 13,
  chk: "<input type='checkbox' id='d4'>",
};

var data5 = {
  name: "motorola",
  model: "s01",
  memory: 64,
  price: 15000,
  quantity: 18,
  chk: "<input type='checkbox' id='d5'>",
};
var arr = [data1, data2, data3, data4, data5];
console.log(arr);
function data() {
  table =
    "<table><tr><th>Companny</th><th>Model</th><th>Memory</th><th>price</th><th>Quantity</th><th>Cart</th></tr>";
  arr.forEach((element) => {
    table +=
      "<tr><td>" +
      element.name +
      "</td><td>" +
      element.model +
      "</td><td>" +
      element.memory +
      "</td><td>" +
      element.price +
      "</td><td>" +
      element.quantity +
      "</td><td>" +
      element.chk +
      "</td></tr>";
  });
  table += "</table>";
  document.getElementById("p1").innerHTML = table;
}

function cart() {
    
  if ((arr[0].name = "samsung" && d1.checked)) {
    arr[0].quantity = arr[0].quantity - 1;
    display();
  } else if ((arr[1].name = "nokia" && d2.checked)) {
    arr[1].quantity = arr[1].quantity - 1;
    display();
  } else if ((arr[2].name = "xiomi" && d3.checked)) {
    arr[2].quantity = arr[2].quantity - 1;
    display();
  } else if ((arr[3].name = "apple" && d4.checked)) {
    arr[3].quantity = arr[3].quantity - 1;
    display();
  } else if ((arr[4].name = "moto" && d5.checked)) {
    arr[4].quantity = arr[4].quantity - 1;
    display();
  }
}
function display(){
 var table2="<table><tr><th>Company</th><th>Model</th><th>Memory</th><th>price</th><th>Quantity</th></tr>";
 arr.forEach(element => {
    table2+="<tr><td>"+
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
 });
   
   table2+="</table>";
   document.getElementById("res").innerHTML=table2;
}
