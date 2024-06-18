////POLLING FUNCTION////
//polling function config
var vt519_pxFuncFired = 0;
var vt519_pxInterval = setInterval(vt519_pxPollFunc, 100);

//polling function
function vt519_pxPollFunc() {
    vt519_pxFuncFired += 1;

    if (vt519_pxFuncFired >= 40) {
        //try 20 times, if not found clear px func
        clearInterval(vt519_pxInterval);
    }

    if (window.utag != undefined && window.utag.vfuk_data != undefined && window.utag.vfuk_data.page_name != undefined && window.utag.vfuk_data.page_name === 'uk>shop>basket>concurrent loans') {
        if (window.CRO_SIMPLIFIED_BASKET_CLOP_DATA && window.CRO_SIMPLIFIED_BASKET_CLOP_DATA.currentLoan.deviceName && window.CRO_SIMPLIFIED_BASKET_CLOP_DATA.currentLoan.deviceName != '') {
            if (document.querySelector('[data-component-name="upgrade-plan-info"]>ul>li:nth-child(2)')) {
                //clear polling when found
                clearInterval(vt519_pxInterval);
                //ACTIONS HERE 
                vt519_CLOPChanges()
            }
        }
    }
}

//CLOP CHANGES FUNC//
function vt519_CLOPChanges() {
    //change text
    //header 
    document.querySelectorAll('[data-component-name="Heading"]')[1].innerHTML = 'How do you want to manage your current Phone Plan?'
    document.querySelectorAll('[data-component-name="Heading"]')[1].style.fontSize = 'xx-large'
    //hide number
    document.querySelectorAll('[data-component-name="Heading"]')[2].remove()
    //hide hr 

    document.querySelector('.vfuk-BasketCLOP__divider-container').remove()
    //hide number 
    document.querySelectorAll('[data-component-name="SimpleGridColumn"]')[4].remove()
    //change text
    document.querySelectorAll('[data-component-name="Paragraph"]')[0].innerHTML = 'Before you start a new Phone Plan,  \n choose one of these options:'
    //desktop
    if (screen.width > 880) {
        document.querySelectorAll('[data-component-name="Paragraph"]')[0].setAttribute("style", "width: calc(30% + 0px); margin: 25px;")
    } else if (screen.width < 880) { //mobile
        document.querySelectorAll('[data-component-name="Paragraph"]')[0].setAttribute("style", "width: calc(60% + 0px); margin: 25px;")
    }
    document.querySelectorAll('[data-component-name="Paragraph"]')[0].parentElement.setAttribute("style", "display: flex; justify-content: center;")

    //option 1
    //option 1 title
    var vt519_option1 = document.querySelector("#root > div:nth-child(3) > div > div > div > div > div:nth-child(2)")
    var vt519_option_p_1 = document.createElement('p')
    vt519_option_p_1.textContent = 'Option 1'
    vt519_option_p_1.setAttribute('style', 'font-weight: bold;')
    vt519_option1.insertAdjacentElement('afterend', vt519_option_p_1)
    //option 1 header 
    document.querySelectorAll('[data-component-name="Heading"]')[2].innerHTML = 'Pay off my balance in full'
    //get remaining time 
    //todays date
    const vt519today = new Date();
    //window object date
    const vt519targetDate = new Date(window.CRO_SIMPLIFIED_BASKET_CLOP_DATA.currentLoan.agreementEndDate);
    //calc the diff using miliseconds
    const vt519differenceInMilliseconds = vt519targetDate - vt519today;
    //calculate diff in days
    const vt519differenceInDays = Math.floor(vt519differenceInMilliseconds / (1000 * 60 * 60 * 24));
    //diff in months and years
    let vt519yearsDifference = vt519targetDate.getFullYear() - vt519today.getFullYear();
    let vt519monthsDifference = vt519targetDate.getMonth() - vt519today.getMonth();

    if (vt519monthsDifference < 0) {
        vt519yearsDifference--;
        vt519monthsDifference += 12;
    }
    // Total months difference
    let totalvt519MonthsDifference = vt519yearsDifference * 12 + vt519monthsDifference;
    //option 1 sub text
    //desktop
    if (screen.width > 880) {
        document.querySelectorAll('[data-component-name="Paragraph"]')[1].parentElement.style.width = '80%'
    } else if (screen.width < 880) { //mobile
        document.querySelectorAll('[data-component-name="Paragraph"]')[1].parentElement.style.width = '100%'
    }

    if (totalvt519MonthsDifference === 0 || totalvt519MonthsDifference === 1) {
        document.querySelectorAll('[data-component-name="Paragraph"]')[1].innerHTML = 'There\'s <strong>£' + window.CRO_SIMPLIFIED_BASKET_CLOP_DATA.currentLoan.outstandingBalance + '</strong> left to pay and ' + vt519differenceInDays + ' days remaining on your ' + window.CRO_SIMPLIFIED_BASKET_CLOP_DATA.currentLoan.deviceName + ' plan. Agreement ends: ' + window.CRO_SIMPLIFIED_BASKET_CLOP_DATA.currentLoan.agreementEndDate
    } else {
        document.querySelectorAll('[data-component-name="Paragraph"]')[1].innerHTML = 'There\'s <strong>£' + window.CRO_SIMPLIFIED_BASKET_CLOP_DATA.currentLoan.outstandingBalance + '</strong> left to pay and ' + totalvt519MonthsDifference + ' months remaining on your ' + window.CRO_SIMPLIFIED_BASKET_CLOP_DATA.currentLoan.deviceName + ' plan. Agreement ends: ' + window.CRO_SIMPLIFIED_BASKET_CLOP_DATA.currentLoan.agreementEndDate
    }
    //option 1 CTA text
    document.querySelector('[aria-label="Pay off before upgrading"]').innerHTML = "Make a payment"

    //option 2
    //option 2 title
    var vt519_option2 = document.querySelector("#root > div:nth-child(3) > div > div > div > div > div:nth-child(6)")
    var vt519_option_p_2 = document.createElement('p')
    vt519_option_p_2.textContent = 'Option 2'
    vt519_option_p_2.setAttribute('style', 'font-weight: bold;')
    vt519_option2.insertAdjacentElement('beforebegin', vt519_option_p_2)
    //option 2 header 
    document.querySelectorAll('[data-component-name="Heading"]')[3].innerHTML = 'Split my balance into monthly payments'
    //option 2 sub-header
    document.querySelectorAll('[data-component-name="Paragraph"]')[3].innerHTML = 'You’ll keep paying off this phone alongside your new one, so you’ll pay <strong>£' + window.CRO_SIMPLIFIED_BASKET_CLOP_DATA.basket.monthlyCost + '</strong> more a month.'
    //select 'I understand' to active CTA
    document.querySelector('[id="user-acceptance-checkbox"]').click()
    //hide check box
    document.querySelector('.vfuk-UserAcceptanceModule__checkbox-wrapper').remove()
    //change option 2 CTA
    var vt519_ctaWidth = document.querySelector("#root > div:nth-child(3) > div > div > div > div > div > div > div > div > div > div > div > div > div > div > div > a").offsetWidth
    document.querySelector('[aria-label="Go to checkout"]').setAttribute("style", "background: black; border: black")
    document.querySelector('[aria-label="Go to checkout"]').style.width = vt519_ctaWidth + 'px'
    //hide 'Or'
    document.querySelector("#root > div:nth-child(3) > div > div > div > div > div:nth-child(5) > p").remove()
    //t and c change
    document.querySelector('[data-component-name="upgrade-plan-info"]').setAttribute("style", "text-align: -webkit-center;")
    //change text
    document.querySelector('[data-component-name="upgrade-plan-info"]>ul>li').innerHTML = '<span aria-hidden="true" size="2" data-component-name="Icon" class="Iconstyle__Icon-sc-yxw4v5-0 gohqvj" style="width: 20px;"><span><span><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 192 192" class="injected-svg" data-src="/upgrade-and-offers/assets/icons/SourceStateIcons/info.svg" xmlns:xlink="http://www.w3.org/1999/xlink"><path fill="#005ea5" d="M95.75 16.25a80 80 0 1 0 80 80 80 80 0 0 0-80-80M94 55.75a5 5 0 1 1-5 5 5 5 0 0 1 5-5m10 80H88a4 4 0 0 1 0-8h4v-40h-4a4 4 0 0 1 0-8h8a4 4 0 0 1 4 4v44h4a4 4 0 0 1 0 8"></path></svg></span></span></span><b style="display: contents;">Please note:</b> Getting a new phone is subject to a credit check. Having an outstanding balance on one or more existing phones might affect this credit check.'
    //desktop
    if (screen.width > 880) {
        document.querySelector('[data-component-name="upgrade-plan-info"]>ul').setAttribute("style", "display: flex;justify-content: center;max-width: 80%;text-align: left;")
    } else if (screen.width < 880) { //mobile
        document.querySelector('[data-component-name="upgrade-plan-info"]>ul').setAttribute("style", "display: flex;justify-content: center;max-width: 100%;text-align: left;")
    }
    document.querySelector('[data-component-name="upgrade-plan-info"]>ul>li').setAttribute("style", "font-size: smaller;")
    //hide second option
    document.querySelector('[data-component-name="upgrade-plan-info"]>ul>li:nth-child(2)').remove()
}