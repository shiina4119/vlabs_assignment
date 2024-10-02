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

let editableFields = new Set();
editableFields.add(3);
editableFields.add(4);
editableFields.add(8);
