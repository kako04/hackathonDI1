let rgbCode = document.getElementById('rgbCode')

function rgb() {
    let r = Math.floor(Math.random() * 256)
    let g = Math.floor(Math.random() * 256)
    let b = Math.floor(Math.random() * 256)
    return 'rgb('+r+','+g+','+b+')'

}
rgbCode.innerHTML = rgb() //rgb(r,g,b)
function applycolor(button , rgb) {
    button.setAttribute('style', `background: ${rgb}`)

}
let randomlyChosen = document.getElementById(Math.floor(Math.random() * 6)+1)
applycolor(randomlyChosen, rgb())
document.getElementsByTagName("button")

