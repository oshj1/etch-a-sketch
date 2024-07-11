const container = document.querySelector(".container");

// create divs
for(i=0; i<16*16; i++){
    let newDiv = document.createElement("div");
    container.appendChild(newDiv);
}