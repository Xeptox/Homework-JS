const box =document.getElementById("box")
let pos = 0
const limit = clientWidth - boxWidth
const t = setInterval(move, 15)
function move() {
    //TODO
    pos++
    box.style.top = pos + "px"
    box.style.left = pos + "px"
    if (pos >= limit) {
        clearInterval(t)

    }
}