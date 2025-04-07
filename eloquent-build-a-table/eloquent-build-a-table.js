
const MOUNTAINS = [
    {name: "Kilimanjaro", height: 5895, place: "Tanzania"},
    {name: "Everest", height: 8848, place: "Nepal"},
    {name: "Mount Fuji", height: 3776, place: "Japan"},
    {name: "Vaalserberg", height: 323, place: "Netherlands"},
    {name: "Denali", height: 6168, place: "United States"},
    {name: "Popocatepetl", height: 5465, place: "Mexico"},
    {name: "Mont Blanc", height: 4808, place: "Italy/France"}
  ];

let mountainKeys = Object.keys(MOUNTAINS[0]);
let table = document.createElement("table");
table.border = 1;

// Adding Heading Row
let headingRow = document.createElement("tr");
mountainKeys.forEach(key => {
    let columnHeading = document.createElement("th");
    columnHeading.textContent = key;
    headingRow.appendChild(columnHeading);
});
table.appendChild(headingRow);

// Adding Data
MOUNTAINS.forEach(obj => {
let dataRow = document.createElement("tr");
for(let key in obj){
    let cellData = document.createElement("td");
    cellData.textContent = obj[key];
    dataRow.appendChild(cellData);
}
table.appendChild(dataRow);
});

let mountainTable = document.getElementById("mountains");
mountainTable.appendChild(table);