const box = document.getElementById("box")
const container = document.getElementById("container")
let pos = 0
const limit = container.clientWidth - box.clientWidth
const start = 0


const t = setInterval(move, 150)
// basic movement function
// function move() {
//     pos++
//     box.style.top = pos + "px"
//     box.style.left = pos + "px"
//     if (pos === limit) {
//         clearInterval(t)
//     }
// }

function move() {
    //TODO
    if (pos === start) {
        pos++
        box.style.top = pos + "px"
        box.style.left = pos + "px"
    }
    if (pos > start) {
        pos++
        box.style.top = pos + "px"
        box.style.left = pos + "px"
        }
    if ( pos === limit) {
            pos--
            box.style.top = pos + "px"
            box.style.left = pos + "px"
        }
    if (pos < limit) {
        pos--
        box.style.top = pos + "px"
        box.style.left = pos + "px"
    }


}

