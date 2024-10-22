//polling function config
var vt722_nodeCheck_pxFuncFired = 0
var vt722_nodeCheck_pxInterval = setInterval(vt722_nodeCheck_pxPollFunc, 100) //0.1 seconds * 20 = 2 seconds

//polling function
function vt722_nodeCheck_pxPollFunc() {
    vt722_nodeCheck_pxFuncFired += 1

    if (vt722_nodeCheck_pxFuncFired >= 20) {
        //try 20 times, if not found, clear px func
        clearInterval(vt722_nodeCheck_pxInterval)
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
                            document.body.addEventListener('click', function (event) {
                                if (event.target.closest('[class*="Pickerstyle__PickerItemWrapper-sc"]') && window.location.href.indexOf('#airtimeplans') > -1) {
                                    vt722AirTimePicker()
                                }
                            })
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
    //function to call
    function vt722AirTimePicker() {
        //capture prices    
        var vt722_pricing = document.querySelectorAll('[data-subtitle*="from"]')
        var pricingArray = []
        vt722_pricing.forEach(function (vt722_price) {
            var price = vt722_price.innerHTML.replace(/[a-z £]/g, '')
            pricingArray.push(price)
        })
        //insert banner
        var simPlanPickers = document.querySelector('[data-component-name="SimpleGrid"]')
        var bannerTarget = simPlanPickers.parentElement.parentElement.parentElement.parentElement
        var initalPricing = pricingArray[pricingArray.length - 1] - pricingArray[0]
        var vt722Banner = '<div class="vt722_banner">Spend £' + initalPricing + ' and get Unlimited data</div>'
        var banner = document.querySelector('.vt722_banner')
        if (!banner) {
            bannerTarget.insertAdjacentHTML('afterend', vt722Banner)
        }
        //click events on cards
        var vt722_cards = document.querySelector('[data-selector="plans-data-filters"]>div').children
        Array.from(vt722_cards).forEach(function (vt722_card, index) {
            vt722_card.addEventListener('click', function () {
                var selectedPrice = pricingArray[index]
                var unlimitedPrice = pricingArray[pricingArray.length - 1]
                var upliftPrice = unlimitedPrice - selectedPrice
                if (unlimitedPrice) {
                    banner.innerHTML = "Unlimited selected"
                } else {
                    banner.innerHTML = "Spend £" + upliftPrice + " and get Unlimited data"
                }
            })
        })
    }
}