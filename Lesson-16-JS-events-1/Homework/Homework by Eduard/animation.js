const box = document.getElementById("box")
const container = document.getElementById("container")
const limit = container.clientWidth - box.clientWidth

let pos = 0
const t = setInterval(move, 15)

function move() {
    pos++
    box.style.top = pos + 'px'
    box.style.left = pos + 'px'
    if (pos >= limit) {
        clearInterval(t)
    }
}