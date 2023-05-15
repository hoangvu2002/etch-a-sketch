const gridContainer = document.createElement('div');
gridContainer?.setAttribute("id","grid-container");
const body = document.querySelector("body");
body.appendChild(gridContainer);



function createGrid(rows, columns) {
  //gridContainer=document.getElementById("grid-container");
  //gridContainer.innerHTML = ''; // Clear previous grid
  gridContainer.style.display = 'grid';
  gridContainer.style.width = '960px';
  gridContainer.style.height = '960px';
  gridContainer.style.boxSizing = "border-box";
  gridContainer.style.gridTemplateColumns = `repeat(${columns}, 1fr)`; // Set the number of columns
  gridContainer.style.gridTemplateRows = `repeat(${rows}, 1fr)`; // Set the number of rows

  for (let i = 0; i < rows*columns; i++) {
    const rowDiv = document.createElement('div');   
    rowDiv.classList.add('grid-row');
    rowDiv.style.display = "flex";

//    for (let j = 0; j < columns; j++) {
//      const cellDiv = document.createElement('div');
//      cellDiv.classList.add('grid-cell');
//      rowDiv.appendChild(cellDiv);
//    }
//
    gridContainer.appendChild(rowDiv);

  }
  
  
  
  //body.appendChild(gridContainer);
}

createGrid(16, 16); // Create a 16x16 grid







