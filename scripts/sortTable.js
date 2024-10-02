// Sort column
function sortTable(n) {
  deselectRow(selectedRow);
  selectedRow = -1;
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
      if (editableFields.has(n)) {
        x = x.childNodes[0];
        y = y.childNodes[0];
        if (dir == "asc") {
          if (Number(x.value) > Number(y.value)) {
            shouldSwitch = true;
            break;
          }
        } else if (dir == "desc") {
          if (Number(x.value) < Number(y.value)) {
            shouldSwitch = true;
            break;
          }
        }
      } else {
        if (schema[n][0] == "string") {
          if (dir == "asc") {
            if (x.innerText.toLowerCase() > y.innerText.toLowerCase()) {
              shouldSwitch = true;
              break;
            }
          } else if (dir == "desc") {
            if (x.innerText.toLowerCase() < y.innerText.toLowerCase()) {
              shouldSwitch = true;
              break;
            }
          }
        } else if (schema[n][0] == "number") {
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
  }
  addRowClickHandlers();
  addEditRowHandlers();
}

let tableHeaders = document.getElementsByTagName("th");
for (let i = 0; i < tableHeaders.length; i++) {
  tableHeaders[i].onclick = function () {
    sortTable(i);
  };
}
