const container = document.querySelector(".container");
const newSketchBtn = document.querySelector(".new-sketch-btn");

let Rows = 16;
let ItemsPerRow = 16;
let Color = "green"


function createGrid(){
    for (let i=0; i<Rows; i++){
        let newRow = document.createElement("div");
        newRow.setAttribute("class", "row");
        container.appendChild(newRow);

        for(let i=0; i<ItemsPerRow; i++){
            let newGridItem = document.createElement("div");
            newGridItem.setAttribute("class", "grid-item");

            newGridItem.addEventListener("mouseenter", function(){
                newGridItem.style.backgroundColor = Color;
            });

            newRow.appendChild(newGridItem);
        }
    }
}

function deleteGrid(){
    container.textContent ="";
}

newSketchBtn.addEventListener("click", function(){
    input = prompt("How many squares in each column?")
    if (input > 100){
        alert("too large");
        return;
    }

    console.log("creating new sketch")
    deleteGrid();
});

createGrid();