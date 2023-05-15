const gridContainer = document.createElement('div');
gridContainer?.setAttribute("id","grid-container");
const body = document.querySelector("body");
const introText = document.createElement("div");
introText.textContent = "Etch a Sketch"
introText.style.cssText = 'padding: 10px; text-align: center;   font-family: "Lucida Console", "Courier New", monospace; font-size: 40px'

body.appendChild(introText);
body.appendChild(gridContainer);

function getRandomColor() {
  const red = Math.floor(Math.random() * 256); // Random value between 0 and 255
  const green = Math.floor(Math.random() * 256);
  const blue = Math.floor(Math.random() * 256);
  return `rgb(${red}, ${green}, ${blue})`;
}


function createGrid(rows, columns) {
  //gridContainer=document.getElementById("grid-container");
  gridContainer.innerHTML = ''; // Clear previous grid
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
    rowDiv.addEventListener('mouseenter', () => 
                              rowDiv.style.backgroundColor = getRandomColor(), {once: true} );

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

createGrid(64, 64); // Create a 16x16 grid

const buttons = document.createElement("div");
buttons.classList.add("buttons");
const resetButton = document.createElement('button');
resetButton.textContent = 'Reset Colors';
resetButton.classList.add('reset')
resetButton.addEventListener('click', function() {
  const cellDivs = document.querySelectorAll('.grid-row');
  cellDivs.forEach(function(cellDiv) {
    cellDiv.style.backgroundColor = '';
  });
});

const resetGrid = document.createElement("button")
resetGrid.textContent = "Reset grid";
resetGrid.classList.add("reset");
resetGrid.addEventListener("click", function() {
  const square = +prompt('Enter a number lower than 100', "");
  if (square && square <= 100) {
    createGrid(square, square)
  }
})
buttons.appendChild(resetGrid);
buttons.appendChild(resetButton);
buttons.style.cssText = `display: flex; justify-content: center; align-items: center;
                          gap: 10px`
body.appendChild(buttons);

body.style.cssText = `display: flex; flex-direction: column; 
                      justify-content: center; align-items: center; 
                      padding: 20px; background-color: #fefbd8;
                      border: 10px solid black; gap: 20px`

const navs = document.querySelectorAll('.reset');
navs.forEach(child => {
  child.style.cssText = `padding: 10px; border: 1px solid black; 
                        font-family: "Lucida Console", "Courier New", monospace;
                        font-size: 10px; color: black; background-color: yellow;`
})





