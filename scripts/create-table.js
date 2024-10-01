data = [
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
    ID: 6,
    "Chemical Name": "n-Pentane",
    Vendor: "Sinopec",
    Density: 4535.26,
    Viscocity: 66.76,
    Packaging: "N/A",
    "Pack Size": -1,
    Unit: "t",
    Quantity: 6272.34,
  },
];

columns = Object.keys(data[0]);

let tableContainer = document.getElementById("table-container");

let table = document.createElement("table");
table.id = "uniqueTable";
table.className = "table table-bordered table-striped";
tableContainer.appendChild(table);

let thead = document.createElement("thead");
let tr = document.createElement("tr");
columns.forEach((item) => {
  let th = document.createElement("th");
  th.innerText = item;
  tr.appendChild(th);
});
let th = document.createElement("th");
th.innerHTML = "Edit";
tr.append(th);
thead.appendChild(tr);
table.appendChild(thead);

let tbody = document.createElement("tbody");
data.forEach((item) => {
  let tr = document.createElement("tr");
  let values = Object.values(item);

  values.forEach((elem) => {
    let td = document.createElement("td");
    td.innerText = elem;
    tr.appendChild(td);
  });
  let td = document.createElement("td");
  td.innerHTML = "<button type='button' class='btn'>Edit</button>";
  tr.append(td);
  tbody.appendChild(tr);
});
table.appendChild(tbody);
