////MUTATION OBSERVER////
let vtxxx_observer = new MutationObserver((mutations) => {
    mutations.forEach((mutation) => {
        let vtxxx_oldValue = mutation.oldValue;
        let vtxxx_newValue = mutation.target.textContent;
        if (vtxxx_oldValue !== vtxxx_newValue) {
            //changes here 
        }
    });
});

vtxxx_observer.observe(document.body, {
    characterDataOldValue: true,
    subtree: true,
    childList: true,
    characterData: true
});

////POLLING FUNCTION////
//polling function config
var vtxxx_pxFuncFired = 0;
var vtxxx_pxInterval = setInterval(vtxxx_pxPollFunc, 100);

//polling function
function vtxxx_pxPollFunc() {
    vtxxx_pxFuncFired += 1;

    if (vtxxx_pxFuncFired >= 20) {
        //try 20 times, if not found clear px func
        clearInterval(vtxxx_pxInterval);
    }

    //target element 
    var TARGET = document.querySelector('TARGET')

    if (TARGET) {
        //clear polling when found
        clearInterval(vtxxx_pxInterval);
        //ACTIONS HERE 
    }
}