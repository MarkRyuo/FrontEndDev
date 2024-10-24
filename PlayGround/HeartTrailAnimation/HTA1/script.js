const bodyEl = document.querySelector("body") ;

bodyEl.addEventListener("mousemove", (event) => {
    const xPos = event.offsetX ;
    const yPos = event.offsetY ;
    const spanEl = document.createElement("span");
    spanEl.style.left = xPos + "px"
    bodyEl.appendChild(spanEl) ;

})