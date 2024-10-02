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
  deselectRow(selectedRow);
  selectedRow = -1;
  let table = document.getElementById("uniqueTable");
  let tr = table.insertRow(-1);
  let fields = addForm.children;
  for (let i = 0; i < fields.length - 1; i++) {
    if (editableFields.has(i)) {
      let td = tr.insertCell(-1);
      let input = document.createElement("input");
      input.className = "form-control form-control-sm";
      input.style.width = "8em";
      input.type = "number";
      input.value = Number(fields[i].value);
      td.appendChild(input);
    } else {
      if (fields[i].type === "number") {
        let td = tr.insertCell(-1);
        td.innerText = fields[i].value === "" ? 0 : Number(fields[i].value);
      } else {
        let td = tr.insertCell(-1);
        td.innerText = fields[i].value;
      }
    }
  }
  addEditRowHandler(tr);
  addState = false;
  for (let field of fields) {
    field.value = null;
  }
  addForm.className = "d-none";
};
