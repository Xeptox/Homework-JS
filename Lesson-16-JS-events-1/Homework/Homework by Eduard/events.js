const btn = document.getElementById("btn")
const name1 = document.getElementById("name1")

btn.onclick = show

function show() {
    alert(`Hello ${name1.value}`)
    name1.value = ""
}