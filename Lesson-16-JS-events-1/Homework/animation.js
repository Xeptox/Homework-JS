const box = document.getElementById("box")
const container = document.getElementById("container")
let pos = 0
const limit = container.clientWidth - box.clientWidth
const start = 0
const fwd = move()
const bwd = moveBack()
let x
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
boxAnimation(x)
function boxAnimation(x){
    if (x === fwd) {
        setInterval(move, 15)
    }
    if (x === bwd) {
        setInterval(moveBack, 15)
    }
}

function move() {
    //TODO
    pos++
    box.style.top = pos + "px"
    box.style.left = pos + "px"
    if (pos === limit) {
        return x = fwd
    }
}
function moveBack() {
    //TODO
    pos--
    box.style.top = pos + "px"
    box.style.left = pos + "px"
    if (pos === start) {
        return x = bwd
    }
}
