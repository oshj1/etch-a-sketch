const container = document.querySelector(".container");
const newSketchBtn = document.querySelector(".new-sketch-btn");

// default values
let Rows = 30;
let ItemsPerRow = 16;
let Color = "green"

function getRandomColor(){
    let randomColor = Math.floor(Math.random()*16777215).toString(16);
    return randomColor;
}

function createGrid(Rows, ItemsPerRow){
    for (let i=0; i<Rows; i++){
        let newRow = document.createElement("div");
        newRow.setAttribute("class", "row");
        container.appendChild(newRow);

        for(let i=0; i<ItemsPerRow; i++){
            let newGridItem = document.createElement("div");
            newGridItem.setAttribute("class", "grid-item");

            newGridItem.addEventListener("mouseenter", function(){
                newGridItem.style.backgroundColor = "#" + getRandomColor();
            });

            newRow.appendChild(newGridItem);
        }
    }
}

function deleteGrid(){
    container.textContent ="";
}

newSketchBtn.addEventListener("click", function(){
    input = prompt("How many squares in each row?")
    if (input > 100){
        alert("too large");
        return;
    }

    console.log("creating new sketch")
    deleteGrid();
    createGrid(input, input);
});

createGrid(Rows, ItemsPerRow);