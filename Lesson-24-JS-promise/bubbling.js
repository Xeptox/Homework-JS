const clickHandler = function () {
    console.log(this.id)
    console.log(event.currentTarget.id)
}

div1.onclick = clickHandler
div2.onclick = clickHandler
div3.onclick = clickHandler