const gridContainer = document.createElement('div');
gridContainer?.setAttribute("id","grid-container");
const body = document.querySelector("body");
body.appendChild(gridContainer);

function getRandomColor() {
  const red = Math.floor(Math.random() * 256); // Random value between 0 and 255
  const green = Math.floor(Math.random() * 256);
  const blue = Math.floor(Math.random() * 256);
  return `rgb(${red}, ${green}, ${blue})`;
}

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
    rowDiv.addEventListener('mouseenter', function () {
      rowDiv.style.backgroundColor = 'red';
    });

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







