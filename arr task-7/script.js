var data1 = {
  name: "Samsung",
  model: "Galaxy",
  memory: 32,
  price: 15000,
  quantity: 20,
};

var data2 = {
  name: "Nokia",
  model: "S07",
  memory: 64,
  price: 22000,
  quantity: 15,
};

var data3 = {
  name: "Xiomi",
  model: "note",
  memory: 128,
  price: 12000,
  quantity: 21,
};

var data4 = {
  name: "Apple",
  model: "s01",
  memory: 64,
  price: 2500,
  quantity: 13,
};

var data5 = {
  name: "Moto",
  model: "s01",
  memory: 64,
  price: 15000,
  quantity: 18,
};
var arr = [data1, data2, data3, data4, data5];
function data() {
  table =
    "<table><tr><th>Companny</th><th>Model</th><th>Memory</th><th>price</th><th>Quantity</th></tr>";
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
      "</td></tr>";
  });
  table += "</table>";
  document.getElementById("p1").innerHTML = table;
}
function cart() {
  var input = document.getElementById("input").value;
  var dropdown = document.getElementById("dropdown").value;
  if (input === "") {
    alert("Please enter no of quantity");
  } else if (dropdown == "Samsung") {
    arr[0].quantity = input;
    display();
  } else if (dropdown == "Nokia") {
    arr[1].quantity = input;
    display();
  } else if (dropdown == "Xiomi") {
    arr[2].quantity = input;
    display();
  } else if (dropdown == "Apple") {
    arr[3].quantity = input;
    display();
  } else if (dropdown == "Moto") {
    arr[4].quantity = input;
    display();
  }
}

function display() {
  var input = document.getElementById("input").value;
  var table2 =
    "<table><tr><th>Company</th><th>Model</th><th>Memory</th><th>price</th><th>Quantity</th></tr>";
  arr.forEach((element) => {
    table2 +=
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
      "</td></tr>";
  });

  table2 += "</table>";
  document.getElementById("res").innerHTML = table2;
}
