let selectedRow = -1;

function rowClickHandler(i) {
  let rows = document.querySelectorAll("tbody tr");
  if (selectedRow != -1) {
    rows[selectedRow].className = "";
  }
  selectedRow = i;
  rows[selectedRow].className = "table-info";
}

function deselectRow(i) {
  if (i == -1) return;
  document.querySelectorAll("tbody tr")[i].className = "";
}

function addRowClickHandler(i) {
  let row = document.querySelectorAll("tbody tr")[i - 1];
  console.log(row);
  row.onclick = function () {
    rowClickHandler(i - 1);
  };
}

function addRowClickHandlers() {
  let rows = document.querySelectorAll("tbody tr");
  for (let i = 0; i < rows.length; i++) {
    rows[i].onclick = function () {
      rowClickHandler(i);
    };
  }
}

addRowClickHandlers();
