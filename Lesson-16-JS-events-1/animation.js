const box = document.getElementById("box")
const container = document.getElementById("container")
let pos = 0
const limit = container.clientWidth - box.clientWidth
const start = container.clientWidth


if (pos === start && pos < limit) {
    setInterval(move, 15)
}
if (pos === limit && pos > start) {
    setInterval(moveBack, 15)
}

function move() {
    //TODO
        pos++
        box.style.top = pos + "px"
        box.style.left = pos + "px"
}

function moveBack() {
        pos--
        box.style.top = pos - "px"
        box.style.left = pos - "px"
    }

