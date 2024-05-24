////MUTATION OBSERVER - BODY////
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
    //characterDataOldValue: true,
    subtree: true,
    childList: true,
    //characterData: true
    attributes: true
});

////MUTATION OBSERVER - PARENT ELEMENT////
//mutation observer 
const vtxxxObserver = new MutationObserver((mutationsList, vtxxxObserver) => {
    //check for mutations
    for (const mutation of mutationsList) {
        if (mutation.target.matches('')) {
            //CHANGES HERE
        }
    }
});

//define the configuration for the MutationObserver
const vtxxxObserverConfig = {
    childList: true,
    subtree: true,
};

//start observing changes
vtxxxObserver.observe(document.body, vtxxxObserverConfig);

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