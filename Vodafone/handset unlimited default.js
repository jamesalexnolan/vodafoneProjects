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
                    //MATCH URL CONDITION
                    if (window.location.href.indexOf('#airtimeplans') > -1) {
                        var vtxxx_dataAllowanceContainer = document.querySelector('[data-selector="plans-data-filters"]')
                        if (vtxxx_dataAllowanceContainer && vtxxx_dataAllowanceContainer.lastChild.children.length > 3) {
                            vtxxx_dataAllowanceContainer.lastChild.children[3].querySelector('span>label').click()
                            vtxxx_observer.disconnect()
                        }
                    } else {
                        vtxxx_observer.disconnect()
                    }
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

        //Reconnect mutation observer if user navigates back 
        window.navigation.addEventListener("navigate", (event) => {
            //start observing again
            vtxxx_observer.observe(document.body, {
                //characterDataOldValue: true,
                subtree: true,
                childList: true,
                //characterData: true,
                attributes: true
            });
        })
    }
}