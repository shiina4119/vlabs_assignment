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
    // if (dir == "asc") {
    //   data.sort(function (a, b) {
    //     let x = a[schema[n][1]];
    //     let y = b[schema[n][1]];
    //     if (x < y) return -1;
    //     else if (x > y) return 1;
    //     else return 0;
    //   });
    // } else {
    //   data.sort(function (a, b) {
    //     let x = a[schema[n][1]];
    //     let y = b[schema[n][1]];
    //     if (x > y) return -1;
    //     else if (x < y) return 1;
    //     else return 0;
    //   });
    // }
    // addEditButtonHandlers(data.length);
    // addDeleteButtonHandlers(data.length);
  }
  addRowClickHandlers();
}

let tableHeaders = document.getElementsByTagName("th");
for (let i = 0; i < tableHeaders.length; i++) {
  tableHeaders[i].onclick = function () {
    sortTable(i);
  };
}
