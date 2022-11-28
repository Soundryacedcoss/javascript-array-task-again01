var arr = [];
function add() {
var data1 = document.getElementById("ID").value;
var data2 = document.getElementById("name").value;
var data3 = document.getElementById("sal").value;
    // for clearing the input area 
    
 if(data1=="" || data2==""||data3==""){
    alert("Please fill all the box")
 }
 else if(!isNaN(data2)){
  alert("Name should be String")
 }
 else if(isNaN(data3)){
  alert("salary should be integer")
 }
 else{
  var obj = {
    data1: data1,
    data2: data2,
    data3: data3,
  };
  arr.push(obj);
  display();
  document.getElementById("ID").value="";
    document.getElementById("name").value='';
    document.getElementById("sal").value='';
}
}

function display() {
  let table='<table id="table1"><tr><th>id</th><th>Name</th><th>Salery</th><th>Action</th></tr>'
  arr.forEach((element) => {
    table+=
    '<tr><td>'+
      element.data1 +
      '</td><td>' +
      element.data2 +
      '</td><td>'
      +element.data3+
      '</td><td>'
      +'<a href="#" id="del" onclick="del(\'' +
      element.data1 +
      '\')">delete</a>'+
      '</td></tr>'
     
  });
  table+='</table>';
  document.getElementById("Demo1").innerHTML=table;
}
function del(val1) {
  for (let i = 0; i < arr.length; i++) {
    if (val1 == arr[i].data1){
      arr.splice(i, 1);
    }
  }
  display();
}

