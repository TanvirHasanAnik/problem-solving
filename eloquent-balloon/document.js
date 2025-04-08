let balloon = document.getElementById("balloon");

window.addEventListener('keydown', (event) => {
    let currentSize = parseInt(getComputedStyle(balloon).fontSize);
    switch(event.key){
        case 'ArrowUp': {
            event.preventDefault;
            currentSize >= 200 ? balloon.textContent = "💥" : balloon.style.fontSize = (currentSize + 10) + "px";
        }
        break;
        case 'ArrowDown': {
            event.preventDefault;
            balloon.textContent == "💥" ? balloon.textContent = "🎈" : balloon.style.fontSize = (currentSize - 10) + "px";
        }
        break;
        default: {console.log("Wrong button")}
    }
})