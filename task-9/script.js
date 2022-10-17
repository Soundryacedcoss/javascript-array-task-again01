var arr = [];

function add() {
  var id = document.getElementById("id").value;
  var name1 = document.getElementById("name1").value;
  var salary = document.getElementById("sal").value;

  try {
    if (isNaN(id)) throw "id sould be integer";
    if(id=="") throw "id can not be empty"
    if (name1 == "") throw "Name can not to be Empty";
    if (isNaN(salary)) throw "salary sould be integer";
    if(salary=="") throw "salary can not be empty"
    else {
      var obj = {
        id: id,
        name1: name1,
        salary: salary,
      };
      arr.push(obj);
      display();
    }
  } catch (error) {
    document.getElementById("p1").innerHTML = error;
  }
}

function display() {
  var table = "<table><tr><th>id</th><th>name</th><th>Salary</th></tr>";
  arr.forEach((element) => {
    table +=
      "<tr><td>" +
      element.id +
      "</td><td>" +
      element.name1 +
      "</td><td>" +
      element.salary +
      "</td></tr>";
  });
  table += "</table>";
  document.getElementById("Demo1").innerHTML = table;
}
