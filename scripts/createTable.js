let numRows = data.length;

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
    // let td = document.createElement("td");
    // let editBtn = document.createElement("button");
    // editBtn.className = "edit-btn btn btn-sm btn-primary mx-1";
    // editBtn.innerText = "Edit";
    // editBtn.style.width = "4em";
    // let deleteBtn = document.createElement("button");
    // deleteBtn.className = "delete-btn btn btn-sm btn-danger mx-1";
    // deleteBtn.innerText = "Delete";
    // editBtn.style.width = "4em";
    // td.appendChild(editBtn);
    // td.appendChild(deleteBtn);
    // tr.appendChild(td);
    tbody.appendChild(tr);
  });
  table.appendChild(tbody);
}

createTable(data);
