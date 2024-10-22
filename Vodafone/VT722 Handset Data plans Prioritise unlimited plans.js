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
    function vt722AirTimePicker() {
    // Insert banner into the HTML (you can replace this with your actual banner content)
    var vt722Banner = '<div class="banner">Your custom banner here</div>';
    simPlanPickers.insertAdjacentHTML('beforeend', vt722Banner);

    // Capture pricing elements that contain the word "from" in their data-subtitle attribute
    var vt722_pricing = document.querySelectorAll('[data-subtitle*="from"]');
    
    // Initialize an array to hold the prices
    var pricingArray = [];

    // Loop through each pricing element
    vt722_pricing.forEach(function (vt722_price) {
        // Remove all letters, spaces, and currency symbols (£), leaving only the numeric values
        var price = vt722_price.innerHTML.replace(/[a-z £]/g, '');
        
        // Push the cleaned price into the array
        pricingArray.push(price); // Always push the price since there will be no "Unlimited" option
    });

    // Select all the plan cards by targeting their parent div
    var vt722_cards = document.querySelector('[data-selector="plans-data-filters"]>div').children;

    // Add click event listener to each card
    Array.from(vt722_cards).forEach(function (vt722_card, index) {
        vt722_card.addEventListener('click', function () {
            // Use the pricing array to get the price based on the clicked card's index
            var selectedPrice = pricingArray[index];

            // Display the price for the selected card
            alert("You selected a plan with a price of £" + selectedPrice);
        });
    });
    }
}
