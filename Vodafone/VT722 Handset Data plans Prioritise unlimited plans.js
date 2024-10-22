//polling function config
var vt722_nodeCheck_pxFuncFired = 0
var vt722_nodeCheck_pxInterval = setInterval(vt722_nodeCheck_pxPollFunc, 100) //0.1 seconds * 20 = 2 seconds

//polling function
function vt722_nodeCheck_pxPollFunc() {
    vt722_nodeCheck_pxFuncFired += 1

    if (vt722_nodeCheck_pxFuncFired >= 20) {
        //try 20 times, if not found, clear px func
        clearInterval(vt722_nodeCheck_pxInterval);
    }

    if (document.body.nodeType === 1) {
        //clear polling when found
        clearInterval(vt722_nodeCheck_pxInterval)
        //MUTATION OBSERVER
        let vt722_observer = new MutationObserver((mutations) => {
            mutations.forEach((mutation) => {
                let vt722_oldValue = mutation.oldValue
                let vt722_newValue = mutation.target.textContent
                if (vt722_oldValue !== vt722_newValue) {
                    //MATCH URL CONDITION
                    if (window.location.href.indexOf('#airtimeplans') > -1) {
                        var simPlanPickers = document.querySelector('[data-component-name="SimpleGrid"]')
                        if (simPlanPickers) {
                            vt722AirTimePicker()
                            vt722_observer.disconnect()
                        }
                    } else {
                        vt722_observer.disconnect()
                    }
                }
            })
        })

        vt722_observer.observe(document.body, {
            //characterDataOldValue: true,
            subtree: true,
            childList: true,
            //characterData: true,
            attributes: true
        })

        //Reconnect mutation observer if user navigates back 
        window.navigation.addEventListener("navigate", (event) => {
            //start observing again
            vt722_observer.observe(document.body, {
                //characterDataOldValue: true,
                subtree: true,
                childList: true,
                //characterData: true,
                attributes: true
            })
        })
    }
}
