const box = document.getElementById("box")
const container = document.getElementById("container")
let pos = 0
const limit = container.clientWidth - box.clientWidth
const start = 0
// const t = setInterval(x, 15)

// basic movement function
// function move() {
//     pos++
//     box.style.top = pos + "px"
//     box.style.left = pos + "px"
//     if (pos === limit) {
//         pos += -1
//     }
// }
setInterval(boxAnimation, 15)
function boxAnimation() {
    if (pos === start){
        return pos++
    }
    if (pos === limit) {
        return pos--
    }
    pos
    box.style.top = pos + "px"
    box.style.left = pos + "px"
}
