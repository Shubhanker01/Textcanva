const text = document.getElementById('text')
const color = document.getElementById('color')
const size = document.getElementById('number')
const font = document.getElementById('font')
const addText = document.getElementById('add-text')
const area = document.getElementById('area')

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

// to drag the text
// function dragElement() {
//     var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0
//     text.onmousedown = dragMouseDown


//     function dragMouseDown(e) {
//         e = e || window.Event
//         e.preventDefault()
//         pos3 = e.clientX
//         pos4 = e.clientY
//         document.onmouseup = closeDragElement
//         document.onmouseover = elementDrag

//     }

//     function elementDrag(e) {
//         e = e || window.Event
//         e.preventDefault()
//         pos1 = pos3 - e.clientX
//         pos2 = pos4 - e.clientY
//         pos3 = e.clientX
//         pos4 = e.clientY

//         text.style.top = text.offsetTop - pos2 + "px"
//         text.style.left = text.offsetLeft - pos1 + "px"

//     }
//     function closeDragElement() {
//         document.onmouseup = null
//         document.onmouseover = null
//     }
// }
// dragElement()

function onMouseDrag({movementX,movementY}){
   let getContainerStyle = window.getComputedStyle(area)
   let leftvalue = parseInt(getContainerStyle.left)
   let topvalue = parseInt(getContainerStyle.top)
   area.style.left = `${leftvalue + movementX}px`
   area.style.top = `${topvalue + movementY}px`

}
area.addEventListener('mousedown',function(){
    area.addEventListener('mousemove',onMouseDrag)
})
document.addEventListener('mouseup',function(){
    area.removeEventListener('mousemove',onMouseDrag)
})