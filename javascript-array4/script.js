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
  if(list.name==""&& list.memory=="" && list.model=="" && list.price=="")
  {
    document.getElementById("p1").innerHTML =
      "plss Enter all details";
      console.log("hi");
  }
  else if(list.name==""&& list.memory=="" && list.model==""){
    {
      document.getElementById("p1").innerHTML =
        "plss Enter name memory and model";
    }
  }
  else if(list.name=="" && list.memory=="" && list.price==""){
    {
      document.getElementById("p1").innerHTML =
        "plss Enter name memory and price";
    }
  }
  else if(list.name=="" && list.memory){
    document.getElementById("p1").innerHTML =
      "plss Enter name and memory";
  }
  else if(list.name=="" && list.model){
    document.getElementById("p1").innerHTML =
      "plss Enter name and model";
  }
  else if(list.name=="" && list.price){
    document.getElementById("p1").innerHTML =
      "plss Enter name and price";
  }
  else if(list.name==""){
    document.getElementById("p1").innerHTML =
      "plss Enter name";
  }
  else if(list.memory==""){
    document.getElementById("p1").innerHTML =
      "plss Enter memory";
  }
  else if(list.price==""){
    document.getElementById("p1").innerHTML =
      "plss Enter price";
  }
  else if(list.model==""){
    document.getElementById("p1").innerHTML =
      "plss Enter model";
  }
  else if (!isNaN(list.name)) {
    document.getElementById("p1").innerHTML =
      "plss Enter comapny name in string.";
  } 
  else{
    data.splice(1, 0, list);
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
