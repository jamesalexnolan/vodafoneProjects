////MUTATION OBSERVER////
let observer = new MutationObserver((mutations) => {
    mutations.forEach((mutation) => {
        let oldValue = mutation.oldValue;
        let newValue = mutation.target.textContent;
        if (oldValue !== newValue) {
            //changes here 
        }
    });
});

observer.observe(document.body, {
    characterDataOldValue: true,
    subtree: true,
    childList: true,
    characterData: true
});

////POLLING FUNCTION////
//polling function config
var pxFuncFired = 0;
var pxInterval = setInterval(pxPollFunc, 100);

//polling function
function pxPollFunc() {
    pxFuncFired += 1;

    if (pxFuncFired >= 20) {
        //try 20 times, if not found clear px func
        clearInterval(pxInterval);
    }

    //target element 
    var TARGET = document.querySelector('TARGET')

    if (TARGET) {
        //clear polling when found
        clearInterval(pxInterval);
        //ACTIONS HERE 
    }
}