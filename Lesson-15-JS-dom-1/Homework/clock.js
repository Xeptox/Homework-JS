setInterval(showTime, 1000)

function showTime() {
    const date = new Date()
    const h = date.getHours()
    const m = date.getMinutes()
    const s = date.getSeconds()
    const time = `${h}:${m}:${s}`
    const h1 = document.createElement('h1')
    const text = document.createTextNode(time)
    h1.appendChild(text)
    root.appendChild(h1)
    if (root.firstElementChild) {
        root.replaceChild(h1, root.firstElementChild)
    } else {
        root.appendChild(h1)
    }
}