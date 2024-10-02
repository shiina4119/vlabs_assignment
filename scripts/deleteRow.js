let deleteBtn = document.getElementById("delete-btn");

deleteBtn.onclick = function () {
  if (selectedRow == -1) return;

  deselectRow(selectedRow);
  let table = document.getElementById("uniqueTable");
  table.deleteRow(selectedRow + 1);
  addRowClickHandlers();
  addEditRowHandlers();
};
