
var newDiv = document.createElement('div')
// add class
newDiv.className = 'halo'
// add id
newDiv.id = 'hi'
// add attr
newDiv.setAttribute('title', 'Hello World!')

// create text node
var newDivText = document.createTextNode('Halo Dunia!')
// add text to newDiv
newDiv.appendChild(newDivText)

console.log(newDiv)

/////////////////////////////////
// add newDiv element to document!

var body = document.querySelector('body')
var h1 = document.querySelector('h1')

body.insertBefore(newDiv, h1)

newDiv.style.fontFamily = 'Impact'
newDiv.style.fontSize = '50px'