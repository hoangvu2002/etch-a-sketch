const container = document.createElement("div");
container.classList.add("container");

body = document.querySelector("body");
body.appendChild(container)

// this is just a draft of what i will do
// first i will create a container div using DOM
// i wil create 16 more divs ( each div with flex-direction: row) for each row
// append lay out 16 divs in the container div using flex-direction: column
// in each row div, create 16 more divs with the lay out row div of display: flex; flex-direction: row;
//remember to use box-sizing: border-box for each div for ease of use

const divRow1 = document.createElement("div");
divRow1.classList.add("row");

const divRow2 = document.createElement("div");
divRow2.classList.add("row");

const divRow3 = document.createElement("div");
divRow3.classList.add("row");

const divRow4 = document.createElement("div");
divRow4.classList.add("row");

const divRow5 = document.createElement("div");
divRow5.classList.add("row");

const divRow6 = document.createElement("div");
divRow6.classList.add("row");

const divRow7 = document.createElement("div");
divRow7.classList.add("row");

const divRow8 = document.createElement("div");
divRow1.classList.add("row");

const divRow9 = document.createElement("div");
divRow9.classList.add("row");

const divRow10 = document.createElement("div");
divRow10.classList.add("row");

const divRow11 = document.createElement("div");
divRow11.classList.add("row");

const divRow12 = document.createElement("div");
divRow12.classList.add("row");

const divRow13 = document.createElement("div");
divRow13.classList.add("row");

const divRow14 = document.createElement("div");
divRow14.classList.add("row");

const divRow15 = document.createElement("div");
divRow15.classList.add("row");

const divRow16 = document.createElement("div");
divRow16.classList.add("row");

const rows = document.querySelectorAll(".row");
rows.forEach(child => {
    container.appendChild(child)});







