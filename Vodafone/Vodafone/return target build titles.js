var elements = document.querySelectorAll('.spectrum-Link--primary')
var array = []

elements.forEach(function(element){
    array.push(element.innerText)
})

console.log(array)