document.body.addEventListener("mousemove", (event) => {
    let point = document.createElement("div");
    point.classList.add("trail");

    point.style.left = event.clientX + "px";
    point.style.top = event.clientY + "px";

    document.body.appendChild(point);
    setTimeout(()=> {
        point.remove();
    },500);
})