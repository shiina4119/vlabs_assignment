// Edit row
function addEditButtonHandlers(size) {
  let changeableFields = new Set();
  changeableFields.add(3);
  changeableFields.add(4);
  changeableFields.add(8);

  function editRow(i) {
    row = document.querySelectorAll("tbody tr")[i];
    for (let field of changeableFields) {
      row.cells[field].innerHTML =
        "<input type='number' class='form-control form-control-sm' style='width:8em'></input>";
    }
  }

  function changeRow(i) {
    row = document.querySelectorAll("tbody tr")[i];
    for (let field of changeableFields) {
      let value = row.cells[field].childNodes[0].value;
      row.cells[field].innerText = value === "" ? 0 : value;
      data[i][field] = value === "" ? 0 : value;
    }
  }

  let editButtons = document.getElementsByClassName("edit-btn");

  for (let i = 0; i < size; i++) {
    let active = false;
    let button = editButtons.item(i);
    button.onclick = function () {
      active = !active;
      if (active) {
        button.innerText = "Done";
        editRow(i);
      } else {
        button.innerText = "Edit";
        changeRow(i);
      }
    };
  }
}
addEditButtonHandlers(data.length);

// Delete row
function addDeleteButtonHandlers(size) {
  let deleteButtons = document.getElementsByClassName("delete-btn");
  for (let i = 0; i < size; i++) {
    let table = document.getElementById("uniqueTable");
    deleteButtons[i].onclick = function () {
      table.deleteRow(i + 1);
      data.splice(i, 1);
      addEditButtonHandlers(data.length);
      addDeleteButtonHandlers(data.length);
    };
  }
}
addDeleteButtonHandlers(data.length);

// Add row
let addBtn = document.getElementById("add-btn");
let addForm = document.getElementById("add-form");

let addState = false;

addBtn.onclick = function () {
  addState = !addState;
  if (addState) {
    addForm.className = "d-block";
  } else {
    addForm.className = "d-none";
  }
};

let doneBtn = document.getElementById("add-done");

doneBtn.onclick = function () {
  let table = document.getElementById("uniqueTable");
  let tr = table.insertRow(-1);
  let fields = addForm.children;
  let i = 0;
  let dataItem = {};
  for (let field of fields) {
    console.log(field);
    console.log(field.value);
    if (schema[i][0] == "number") {
      let td = tr.insertCell(-1);
      td.innerText = field.value === "" ? 0 : Number(field.value);
      dataItem[schema[i][1]] = Number(field.value);
    } else {
      let td = tr.insertCell(-1);
      td.innerText = field.value;
      dataItem[schema[i][1]] = field.value;
    }
    i++;
    if (i == 9) break;
  }
  data.push(dataItem);
  let td = tr.insertCell(-1);
  let editBtn = document.createElement("button");
  editBtn.className = "edit-btn btn btn-sm btn-primary mx-1";
  editBtn.innerText = "Edit";
  editBtn.style.width = "4em";
  let deleteBtn = document.createElement("button");
  deleteBtn.className = "delete-btn btn btn-sm btn-danger mx-1";
  deleteBtn.innerText = "Delete";
  editBtn.style.width = "4em";
  td.appendChild(editBtn);
  td.appendChild(deleteBtn);
  addEditButtonHandlers(data.length);
  addDeleteButtonHandlers(data.length);
  addState = false;
  addForm.className = "d-none";
};
