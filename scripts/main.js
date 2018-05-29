//Diagnostic

// let firstPixel = document.querySelector('first')
// firstPixel.addEventListener('click', setPixelColor('black'))
// pixelArray.setPixelColor('black')

//End Diagnostic

let pixelArray = Array.from(document.getElementsByClassName('pixel'))
let penSelection = Array.from(document.getElementsByClassName('colorSelect'))
let selectedColor = ''




function setPixelColor(event) {
  event.target.style.backgroundColor = selectedColor
}

function setPenColor(event) {
  let targetColor = event.target.style.backgroundColor
  selectedColor = targetColor;
}

for (let i in penSelection) {
    penSelection[i].addEventListener('click', setPenColor)
}

for (let i in pixelArray) {
    pixelArray[i].addEventListener('click', setPixelColor)
}

//
// pixelArray.forEach(function(x) {
//     x.addEventListener('click', function() {
//     })
//   })
//
// setPenColor.forEach(function(x) {
//     x.addEventListener('click', function() {
//     })
//   })
