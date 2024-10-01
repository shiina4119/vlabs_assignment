let changeableFields = new Set();
changeableFields.add(3);
changeableFields.add(4);
changeableFields.add(8);

function editRow(i) {
  row = document.querySelectorAll("tbody tr")[i];
  for (let field of changeableFields) {
    row.cells[field].innerHTML =
      "<input type='number' class='form-control'></input>";
  }
}

function changeRow(i) {
  row = document.querySelectorAll("tbody tr")[i];
  for (let field of changeableFields) {
    let value = row.cells[field].childNodes[0].value;
    row.cells[field].innerText = value === "" ? 0 : value;
  }
}

let editButtons = document.getElementsByTagName("button");

for (let i = 0; i < editButtons.length; i++) {
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
