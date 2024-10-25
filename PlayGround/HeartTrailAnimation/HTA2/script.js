const mainEl = document.querySelector("main") ;

mainEl.document.addEventListener("mousemove", (event) => {
    const posX = event.offsetX ; //* Declare pos x 
    const posY = event.offsetY ; //* Declare pos y 
    const spanEl = document.createElement("span"); //* Create Element <span></span>
    mainEl.appendChild("spanEl") //* Append to the main element the newly created span

    spanEl.style.top = posX + 'px' ; //* design the posX to the top
    spanEl.style.left = posY + 'px' ; //* design the posY to the left

})