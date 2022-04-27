const color = document.getElementById("colorPicker"); // Select color input

const size = document.getElementById("sizePicker"); // Select size input
const height = document.getElementById("inputHeight"); 
const width = document.getElementById("inputWidth");

const canvas = document.getElementById("pixelCanvas"); // Canvas for pixel display

var submitButtonInput = document.getElementById("submitButton");
// When size is submitted by the user, call makeGrid()
submitButtonInput.addEventListener("click", function (event) {
    event.preventDefault();
    clearGrid();
    makeGrid();
}); 

function clearGrid(){
    while (canvas.firstChild) {
        canvas.removeChild(canvas.firstChild);
    }
}

function makeGrid() {
    for(var r = 0; r < height.value; r++){
        const row = document.createElement("tr");
        
        canvas.appendChild(row);

        for(var c = 0; c < width.value; c++) {
         const col = document.createElement("td"); 
         
         row.appendChild(col);
        
         col.addEventListener("click", function() {
            col.style.backgroundColor = color.value;
         });
        }
    }
};