var data = [
  { name: "samsung", model: "Galaxy", memory: 32, price: 15000 },
  { name: "nokia", model: "S07", memory: 64, price: 22000 },
  { name: "Xiomi", model: "note", memory: 128, price: 12000 },
  { name: "apple", model: "s01", memory: 64, price: 2500 },
  { name: "motorola", model: "s01", memory: 64, price: 15000 },
];

function add() {
  var list = {
    name: document.getElementById("Company").value,
    memory: document.getElementById("Model").value,
    model: document.getElementById("Memory").value,
    price: document.getElementById("price").value,
  };
  data.splice(1, 0, list);
  if (!isNaN(Company)) {
    document.getElementById("p1").innerHTML =
      "plss Enter comapny name in string.";
  } else {
    var table =
      "<table><th>Companny</th><th>Model</th><th>Memory</th><th>price</th></tr>";
    data.forEach((element) => {
      table +=
        "<tr><td>" +
        element.name +
        "</td><td>" +
        element.model +
        "</td><td>" +
        element.memory +
        "</td><td>" +
        element.price +
        "</td></tr>";
    });
    table += "</table>";
    document.getElementById("p1").innerHTML = table;
  }
}
