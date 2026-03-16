const box = document.getElementById("box")
const container = document.getElementById("container")
const limit = container.clientWidth - box.clientWidth

const t = setInterval(move, 10);
let pos = 0;
let i = 1;

function move() {
    pos += i;
    if (pos >= limit || pos <= 0) {
        i = -i;
    }
    box.style.left = pos + 'px';
    box.style.top = pos + 'px';
}