////POLLING FUNCTION////
//polling function config
var vtxxx_nodeCheck_pxFuncFired = 0;
var vtxxx_nodeCheck_pxInterval = setInterval(vtxxx_nodeCheck_pxPollFunc, 100); //0.1 seconds * 20 = 2 seconds

//polling function
function vtxxx_nodeCheck_pxPollFunc() {
    vtxxx_nodeCheck_pxFuncFired += 1;

    if (vtxxx_nodeCheck_pxFuncFired >= 20) {
        //try 20 times, if not found, clear px func
        clearInterval(vtxxx_nodeCheck_pxInterval);
    }

    if (document.body.nodeType === 1) {
        //clear polling when found
        clearInterval(vtxxx_nodeCheck_pxInterval);
        //MUTATION OBSERVER
        let vtxxx_observer = new MutationObserver((mutations) => {
            mutations.forEach((mutation) => {
                let vtxxx_oldValue = mutation.oldValue;
                let vtxxx_newValue = mutation.target.textContent;
                if (vtxxx_oldValue !== vtxxx_newValue) {
                    vtxxx_cardAdjustment()
                }
            });
        });

        vtxxx_observer.observe(document.body, {
            //characterDataOldValue: true,
            subtree: true,
            childList: true,
            //characterData: true,
            attributes: true
        });
    }

    function vtxxx_cardAdjustment() {
        //Select cards
        var vtxxx_cardSelection = document.querySelectorAll('[class*="DiscoveryGridstyle__CardWrapper-sc"]')
        //Third card adjustments [2]
        //Header
        vtxxx_cardSelection[2].querySelector('h3').innerHTML = 'Hello'
        //Text
        vtxxx_cardSelection[2].querySelector('p').innerHTML = 'Hello'
        //Link
        vtxxx_cardSelection[2].querySelector('a>div:nth-child(2)').innerHTML = 'Hello'
    }
}