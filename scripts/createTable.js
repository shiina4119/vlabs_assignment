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

    rowValues.forEach((value, i) => {
      let td = document.createElement("td");
      if (editableFields.has(i)) {
        let input = document.createElement("input");
        input.className = "form-control form-control-sm";
        input.style.width = "8em";
        input.type = "number";
        input.value = Number(value);
        td.appendChild(input);
      } else td.innerText = value;
      tr.appendChild(td);
    });
    tbody.appendChild(tr);
  });
  table.appendChild(tbody);
}

createTable(data);
