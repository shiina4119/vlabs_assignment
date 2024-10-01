// Data
let data = [
  {
    ID: 1,
    "Chemical Name": "Ammonium Persulfate",
    Vendor: "LG Chem",
    Density: 3525.92,
    Viscocity: 60.63,
    Packaging: "Bag",
    "Pack Size": 100.0,
    Unit: "Kg",
    Quantity: 6495.18,
  },
  {
    ID: 2,
    "Chemical Name": "Caustic Potash",
    Vendor: "Formosa",
    Density: 3172.15,
    Viscocity: 48.22,
    Packaging: "Bag",
    "Pack Size": 100.0,
    Unit: "Kg",
    Quantity: 8751.9,
  },

  {
    ID: 3,
    "Chemical Name": "Dimethylamine",
    Vendor: "LG Chem",
    Density: 8435.37,
    Viscocity: 12.62,
    Packaging: "Barrel",
    "Pack Size": 75.0,
    Unit: "L",
    Quantity: 5964.61,
  },
  {
    ID: 4,
    "Chemical Name": "Mono Ammonium Phosphate",
    Vendor: "Sinopec",
    Density: 1597.65,
    Viscocity: 76.51,
    Packaging: "Bag",
    "Pack Size": 105.0,
    Unit: "Kg",
    Quantity: 4154.33,
  },
  {
    ID: 5,
    "Chemical Name": "Ferric Nitrate",
    Vendor: "DowDuPont",
    Density: 364.04,
    Viscocity: 14.9,
    Packaging: "Bag",
    "Pack Size": 105.0,
    Unit: "Kg",
    Quantity: 4154.33,
  },
  {
    ID: 6,
    "Chemical Name": "n-Pentane",
    Vendor: "Sinopec",
    Density: 4535.26,
    Viscocity: 66.76,
    Packaging: "N/A",
    "Pack Size": null,
    Unit: "t",
    Quantity: 6272.34,
  },
  {
    ID: 7,
    "Chemical Name": "Glycol Ether PM",
    Vendor: "LG Chem",
    Density: 6495.18,
    Viscocity: 72.12,
    Packaging: "Bag",
    "Pack Size": 250.0,
    Unit: "Kg",
    Quantity: 8749.54,
  },
];

let schema = [
  ["number", "ID"],
  ["string", "Chemical Name"],
  ["string", "Vendor"],
  ["number", "Density"],
  ["number", "Viscocity"],
  ["string", "Packaging"],
  ["number", "Pack Size"],
  ["string", "Kg"],
  ["number", "Quantity"],
];

// Table Creation
function createTable(data) {
  columns = schema.map((x) => x[1]);

  let tableContainer = document.getElementById("table-container");
  tableContainer.replaceChildren();

  let table = document.createElement("table");
  table.id = "uniqueTable";
  table.className = "table table-bordered table-striped table-hover";
  tableContainer.appendChild(table);

  let thead = document.createElement("thead");
  let tr = document.createElement("tr");
  columns.forEach((item) => {
    let th = document.createElement("th");
    th.innerText = item;
    tr.appendChild(th);
  });
  let th = document.createElement("th");
  tr.appendChild(th);
  thead.appendChild(tr);
  table.appendChild(thead);

  let tbody = document.createElement("tbody");
  data.forEach((row) => {
    let tr = document.createElement("tr");
    let rowValues = Object.values(row);

    rowValues.forEach((value) => {
      let td = document.createElement("td");
      td.innerText = value;
      tr.appendChild(td);
    });
    let td = document.createElement("td");
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
    tr.appendChild(td);
    tbody.appendChild(tr);
  });
  table.appendChild(tbody);
}

createTable(data);

// Sort column
function sortTable(n) {
  let table,
    rows,
    switching,
    i,
    x,
    y,
    shouldSwitch,
    dir,
    switchcount = 0;
  table = document.getElementById("uniqueTable");
  switching = true;
  dir = "asc";
  while (switching) {
    switching = false;
    rows = table.rows;
    for (i = 1; i < rows.length - 1; i++) {
      shouldSwitch = false;
      x = rows[i].getElementsByTagName("td")[n];
      y = rows[i + 1].getElementsByTagName("td")[n];
      if (typeof Object.values(data[1])[n] == "string") {
        if (dir == "asc") {
          if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
            shouldSwitch = true;
            break;
          }
        } else if (dir == "desc") {
          if (x.innerHTML.toLowerCase() < y.innerHTML.toLowerCase()) {
            shouldSwitch = true;
            break;
          }
        }
      } else if (typeof Object.values(data[1])[n] == "number") {
        if (dir == "asc") {
          if (Number(x.innerHTML) > Number(y.innerHTML)) {
            shouldSwitch = true;
            break;
          }
        } else if (dir == "desc") {
          if (Number(x.innerHTML) < Number(y.innerHTML)) {
            shouldSwitch = true;
            break;
          }
        }
      }
    }
    if (shouldSwitch) {
      rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
      switching = true;
      switchcount++;
    } else {
      if (switchcount == 0 && dir == "asc") {
        dir = "desc";
        switching = true;
      }
    }
    if (dir == "asc") {
      data.sort(function (a, b) {
        let x = a[schema[n][1]];
        let y = b[schema[n][1]];
        if (x < y) return -1;
        else if (x > y) return 1;
        else return 0;
      });
    } else {
      data.sort(function (a, b) {
        let x = a[schema[n][1]];
        let y = b[schema[n][1]];
        if (x > y) return -1;
        else if (x < y) return 1;
        else return 0;
      });
    }
    addEditButtonHandlers(data.length);
    addDeleteButtonHandlers(data.length);
  }
}

let tableHeaders = document.getElementsByTagName("th");
for (let i = 0; i < tableHeaders.length; i++) {
  tableHeaders[i].onclick = function () {
    sortTable(i);
  };
}

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
