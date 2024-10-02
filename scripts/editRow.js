function addEditRowHandler(row) {
  for (let field of editableFields) {
    let input = row.cells[field].childNodes[0];
    input.onchange = function (event) {
      input.value = event.target.value;
    };
  }
}

function addEditRowHandlers() {
  let rows = document.querySelectorAll("tbody tr");
  for (let row of rows) {
    for (let field of editableFields) {
      let input = row.cells[field].childNodes[0];
      input.onchange = function (event) {
        input.value = event.target.value;
      };
    }
  }
}

addEditRowHandlers();
