document.body.style.backgroundColor = "#004EA3"
const headDiv = document.createElement('div')
headDiv.id = 'divH1'
document.body.append(headDiv)
document.getElementById('divH1').style.display = "flex"
headDiv.style.display = "flex"
headDiv.style.justifyContent = "center"


const H1 = document.createElement('H1')
document.getElementById('divH1').append(H1)

H1.innerText = "Astro-Tools"
H1.onmouseover = bigLetters
H1.onmouseout = smallLetters
function bigLetters(e) {
    e.target.innerText = e.target.innerText.toUpperCase()
}
function smallLetters(e) {
    e.target.innerText = e.target.innerText.toLowerCase()
}
H1.style.border = "solid black"
H1.style.padding = "3px"
const mainMenuDiv = document.createElement('div')
document.body.append(mainMenuDiv)
mainMenuDiv.id = "mainMenuDiv"

document.getElementById('mainMenuDiv').style.border = "solid black"
const mainMenuList = document.createElement('ul')
mainMenuList.id = "mainMenuList"
mainMenuDiv.append(mainMenuList)



for (let i = 0; i < 3; i++){
    const mainMenuItem = document.createElement('li')
    mainMenuItem.style.margin = "20px"
    mainMenuList.appendChild(mainMenuItem)
    const menuButton = document.createElement('button')
    menuButton.style.backgroundColor = "#A35400"
    mainMenuItem.append(menuButton)
    menuButton.innerText = `Button ${i}`
}

for (let i = 0; i < 8; i++){
    const div = document.createElement('div')
    div.style.height = "20px"
    div.style.margin = "10px"
    div.style.border = "solid black"
    div.style.textAlign = "center"
    document.body.appendChild(div).id = `div ${i}`
    div.append(`DIV ${i}`)

}







