(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
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

},{}]},{},[1]);
