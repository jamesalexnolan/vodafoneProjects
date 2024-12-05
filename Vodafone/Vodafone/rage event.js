///click counter 
document.body.addEventListener('click', function () {
    count++
    console.log(count)
    if (count === 6) {
        console.log('hello')
    }
});

//click timer
let lastClick = 0;
let secondLastClick = 0;
let totalClicks = 0;
let target = null;
let clickedObject = null;
var rageThreshold = 6;
function clickCounter(event) {
    totalClicks++
    if (totalClicks > rageThreshold) {
        totalClicks = 0;
    }
    console.log(totalClicks);
}
function rageClick(event) {
    var now = Math.floor(Date.now())
    if (now - lastClick < 500 && now - secondLastClick && totalClicks >= rageThreshold) {
        //action here
        console.log("rage click on element " + clickedObject);
    }
    secondLastClick = lastClick;
    lastClick = now;
    console.log(event.type + " " + now);
    console.log((now - secondLastClick) / 1000);
}
function clickedElement(element) {
    element = element || window.event;
    target = element.target || element.srcElement,
        clickedObject = target.id || target.className;
}

document.body.addEventListener('click', clickCounter, false);
document.body.addEventListener('click', rageClick, false);
document.body.addEventListener('click', clickedElement, false);