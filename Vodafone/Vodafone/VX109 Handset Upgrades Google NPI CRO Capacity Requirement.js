/**Mutation observer */
//list of devices
//color ++ assosciated storage that needs selecting 
/**function for changes */
//if device 
//insert second CTA
//check device and color 
//update CTA text based on selection 
//click function is then based on required GB 

////POLLING FUNCTION////
//polling function config
var vx109_nodeCheck_pxFuncFired = 0;
var vx109_nodeCheck_pxInterval = setInterval(vx109_nodeCheck_pxPollFunc, 100); //0.1 seconds * 20 = 2 seconds

//polling function
function vx109_nodeCheck_pxPollFunc() {
    vx109_nodeCheck_pxFuncFired += 1;

    if (vx109_nodeCheck_pxFuncFired >= 20) {
        //try 20 times, if not found, clear px func
        clearInterval(vx109_nodeCheck_pxInterval);
    }

    if (document.body.nodeType === 1) {
        //clear polling when found
        clearInterval(vx109_nodeCheck_pxInterval);
        //MUTATION OBSERVER
        let vx109_observer = new MutationObserver((mutations) => {
            mutations.forEach((mutation) => {
                let vx109_oldValue = mutation.oldValue;
                let vx109_newValue = mutation.target.textContent;
                if (vx109_oldValue !== vx109_newValue) {
                    //MATCH URL CONDITION
                    if (window.location.href.indexOf('#add-ons') > -1 || window.location.href.indexOf('#airtimeplans') > -1 || window.location.href.indexOf('#phoneplan') > -1) {
                        vx109_observer.disconnect()
                    } else {
                        storageUpdate()
                    }
                }
            });
        });

        vx109_observer.observe(document.body, {
            //characterDataOldValue: true,
            subtree: true,
            childList: true,
            //characterData: true,
            attributes: true
        });

        //Reconnect mutation observer if user navigates back 
        window.navigation.addEventListener("navigate", (event) => {
            //start observing again
            vx109_observer.observe(document.body, {
                //characterDataOldValue: true,
                subtree: true,
                childList: true,
                //characterData: true,
                attributes: true
            });
        })
    }
}

function storageUpdate() {
    var colorSelection = document.getElementById('selectedColor').innerHTML
    var capacitySelection = document.getElementById('selectedCapacity')
    var capacitySelection_open = document.querySelector('[aria-label="Select capacity"]')
    //check for device 
    if (window.location.href.indexOf('/apple/iphone-15-pro') > -1) {
        //add CTA 

        if (colorSelection.indexOf("Black") > -1) {
            //populate CTA text 

            //click on drop down 
            capacitySelection.click(firedClickEvent())
            //function fired on click
            function firedClickEvent() {
                if (capacitySelection_open.children.length > 0 && capacitySelection.innerHTML.indexOf("1TB") === -1) {
                    //ACTIONS HERE 
                    var capacitySelection_options = document.querySelectorAll('[aria-label="Select capacity"]>li')
                    for (var i = 0; i > capacitySelection_options.length; i++) {
                        if (capacitySelection_options[i].innerHTML.indexOf("1TB") > -1) {
                            console.log('true')
                        }
                    }
                }
            }
        }
    } else if (colorSelection.indexOf("Sea") > -1) {

    }
}