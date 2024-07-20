const text = document.getElementById('text')
const color = document.getElementById('color')
const size = document.getElementById('number')
const font = document.getElementById('font')
const addText = document.getElementById('add-text')
const area = document.getElementById('area')
const dropzone = document.getElementById('drop')
let newX = 0, newY = 0, startX = 0, startY = 0

// function to change the color of text
function changeColor() {
    let selectColor = color.value
    text.style.color = selectColor
}
color.addEventListener('change', function () {
    changeColor()
})
// function to change the size of the text
function changeSize() {
    let selectSize = size.value
    text.style.fontSize = `${selectSize}px`
}
size.addEventListener('change', function () {
    changeSize()
})
// function to change the font of the text
function changeFont() {
    let selectFont = font.value
    text.style.fontFamily = `${selectFont}`
}
font.addEventListener('change', function () {
    changeFont()
})

addText.addEventListener('click', function () {
    let newText = document.createElement('textarea')
    newText.setAttribute(this.id, "id2")
    area.append(newText)
})

area.addEventListener('dblclick', mouseDown)
function mouseDown(e) {
    startX = e.clientX
    startY = e.clientY
    document.addEventListener('mousemove', mouseMove)
    document.addEventListener('mouseup', mouseUp)
}
function mouseMove(e) {
    newX = startX - e.clientX
    newY = startY - e.clientY
    startX = e.clientX
    startY = e.clientY
    area.style.top = (area.offsetTop - newY) + "px"
    area.style.left = (area.offsetLeft - newX) + "px"
}
function mouseUp(e) {
    document.removeEventListener('mousemove', mouseMove)
}

