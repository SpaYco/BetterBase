// clears the table
const clearTable = () => {
  const table = document.getElementById("table");
  table.innerHTML = "";
  const tableHead = document.createElement("thead");
  tableHead.setAttribute("id", "thead");
  const tableBody = document.createElement("thead");
  tableBody.setAttribute("id", "tbody");
  table.appendChild(tableHead);
  table.appendChild(tableBody);
};

const populateData = (data) => {
  // Taking all the keys from the first object in the array, metabse should have the same keys on all objects
  const tableKeys = Object.keys(data[0]);
  const table = document.getElementById("table");
  const tableHead = document.getElementById("thead");
  const tableBody = document.getElementById("tbody");
  // populating the table with all the data in the array of objects
  tableKeys.forEach((key) => {
    const title = document.createElement("td")
    title.textContent = key;
    tableHead.appendChild(title);
  });
  data.forEach((object) => {
    const row = document.createElement("tr");
    tableKeys.forEach((key) => {
      const cell = document.createElement("td");
      cell.textContent = object[key];
      row.appendChild(cell);
    });
    tableBody.appendChild(row);
  })
};

const onReaderLoad = (event) => {
  const data = JSON.parse(event.target.result);
  clearTable();
  populateData(data);
};

const onChange = (event) => {
  const reader = new FileReader();
  reader.onload = onReaderLoad;
  reader.readAsText(event.target.files[0]);
};

document.getElementById("file").addEventListener("change", onChange);
