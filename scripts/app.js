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

// function readJSON() {
//   let fr = new FileReader();
//   let jsonFile = new File([], "./data.json");
//   console.log(jsonFile);

//   fr.readAsText(jsonFile);

//   fr.onload = function () {
//     console.log(fr.result);
//   };

//   fr.onerror = function () {
//     console.log(fr.error);
//   };
// }

// readJSON();

columns = Object.keys(data[0]);

let thead = document.createElement("thead");
let tr = document.createElement("tr");

columns.forEach((item, i) => {
  let th = document.createElement("th");
  th.innerText = item;
  tr.appendChild(th);
});

thead.appendChild(tr);

let tbody = document.createElement("tbody");
data.forEach((item) => {
  let tr = document.createElement("tr");
  let values = Object.values(item);

  values.forEach((elem) => {
    let td = document.createElement("td");
    td.innerText = elem;
    tr.appendChild(td);
  });
  tbody.appendChild(tr);
});

let table = document.createElement("table");
table.id = "uniqueTable";
table.className = "table table-bordered table-striped";
table.append(thead);
table.append(tbody);

let tableContainer = document.getElementById("table-container");
tableContainer.appendChild(table);
