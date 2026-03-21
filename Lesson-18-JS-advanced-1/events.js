const btn = document.getElementById("btn")
const names = document.getElementById("nameBox").children

btn.addEventListener('click', show)
btn.addEventListener('click', e => console.log(e.timeStamp))
// btn.addEventListener('click', e => console.log(e.target))

for (let i = 0; i < names.length; i++) {
   names[i].firstElementChild.oninput = valueToUpperCase
}

function show(e) {
    for (let i = 0; i < names.length; i++) {
        const paragraph = document.createElement('p')
        const content = document.createTextNode(names[i].firstElementChild.value)
        paragraph.appendChild(content)
        document.body.appendChild(paragraph)
        names[i].firstElementChild.value = ''
    }
}

function valueToUpperCase(e) {
    e.target.value = e.target.value.toUpperCase()
}
