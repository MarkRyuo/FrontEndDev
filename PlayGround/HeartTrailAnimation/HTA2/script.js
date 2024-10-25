const mainEl = document.querySelector("main") ;

mainEl.document.addEventListener("mousemove", (event) => {
    const posX = event.offsetX ;
    const posY = event.offsetY ;
    const spanEl = document.createElement("span")
    mainEl.appendChild("spanEl")

    spanEl.style.top = posX + 'px' ;
    spanEl.style.left = posY + 'px' ;

})