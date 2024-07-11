const container = document.querySelector(".container");

// create divs
for(i=0; i<32; i++){
    let newDiv = document.createElement("div");
    newDiv.setAttribute("class", "grid-item");
    container.appendChild(newDiv);
}