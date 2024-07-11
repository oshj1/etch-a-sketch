const container = document.querySelector(".container");
const Rows = 16;
const ItemsPerRow = 16;


function createGrid(){
    for (let i=0; i<Rows; i++){
        let newRow = document.createElement("div");
        newRow.setAttribute("class", "row");
        container.appendChild(newRow);

        for(let i=0; i<ItemsPerRow; i++){
            let newGridItem = document.createElement("div");
            newGridItem.setAttribute("class", "grid-item");

            newGridItem.addEventListener("mouseenter", function(){
                newGridItem.style.backgroundColor = "green";
            });

            newRow.appendChild(newGridItem);
        }
    }
}

createGrid();