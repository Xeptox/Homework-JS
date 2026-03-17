const prev = document.getElementById('prev')
const next = document.getElementById('next')
const picture = document.getElementById('picture')
let slide = 1
prev.onclick = function () {
    //TODO
    slide--
    picture.src = `Images/Rouen_Cathedral_${slide}.jpg`
    if (slide === 1){
        slide = 6
    }
}
next.onclick = function () {
    //TODO
    slide++
    if (slide === 6){
        slide = 1
    }
    picture.src = `Images/Rouen_Cathedral_${slide}.jpg`

}