const color = document.getElementById("colorPicker"); // Select color input

const size = document.getElementById("sizePicker"); // Select size input
const height = document.getElementById("inputHeight"); 
const width = document.getElementById("inputWidth");

const canvas = document.getElementById("pixelCanvas"); // Canvas for pixel display

var submitButtonInput = document.getElementById("submitButton");

// When size is submitted by the user, call makeGrid()

submitButtonInput.addEventListener("click", function (event) {
    event.preventDefault(); // Block the initial submit action
    clearGrid();
    makeGrid();
}); 

function clearGrid(){
    while (canvas.firstChild) { // Loop over canvas and remove all children
        canvas.removeChild(canvas.firstChild);
    }
}

function makeGrid() {
    for(var r = 0; r < height.value; r++){
        const row = document.createElement("tr"); //Define table rows
        
        canvas.appendChild(row);

        for(var c = 0; c < width.value; c++) {
         const col = document.createElement("td"); //Define table columns
         
         row.appendChild(col);
        
         col.addEventListener("click", function() { // Add color event
            col.style.backgroundColor = color.value;
         });
        }
    }
};