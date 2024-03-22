///UPDATED SELECTORS///

//mutation observer
let observer = new MutationObserver((mutations) => {
    mutations.forEach((mutation) => {
        let oldValue = mutation.oldValue;
        let newValue = mutation.target.textContent;
        if (oldValue !== newValue) {

            var pxFuncFired = 0;
            var pxInterval = setInterval(pxPollFunc, 100);

            //polling function
            function pxPollFunc() {
                pxFuncFired += 1;

                if (pxFuncFired >= 20) {
                    clearInterval(pxInterval);
                }

                //get local storage item 
                var config_value = localStorage.getItem('configutor_adjusted');
                //set local storage item on first instance
                if (config_value === null) {
                    localStorage.setItem('configutor_adjusted', '0');
                } else if (config_value === '1' && window.location.href === 'https://www.vodafone.co.uk/mobile/phones/pay-monthly-contracts/' || window.location.href === 'https://www.vodafone.co.uk/mobile/phones/pay-monthly-contracts') {
                    localStorage.setItem('configutor_adjusted', '0');
                }

                //target element 
                var vt590_lengthSelectorCard = document.querySelector('div[class*="CardBuilderstyle__CardBuilder"]')

                if (vt590_lengthSelectorCard && document.querySelector('span[class*="ConfiguratorSelectorValuestyle__ValueLabel"]')) {
                    //clear polling when found
                    clearInterval(pxInterval);
                    //contract length text
                    var vt590_contractLngthValue = document.querySelector('span[class*="ConfiguratorSelectorValuestyle__ValueLabel"]').innerHTML.split(" ")[0]
                    //max contract value
                    var vt590_maxContractValue = document.querySelectorAll('div[data-selector="tenure-stepper"] p[class*="Paragraphstyle__Paragraph"]')[1].innerText.split(" ")[1]

                    if (config_value === '0') {
                        //check max vaule is greater than 24 months
                        if (vt590_maxContractValue > '24') {
                            if (vt590_contractLngthValue > '24') {
                                contractLengthChange_Minus()
                                localStorage.setItem('configutor_adjusted', '1');
                            } else if (vt590_contractLngthValue < '24') {
                                contractLengthChange_Plus()
                                localStorage.setItem('configutor_adjusted', '1');
                            }
                        }
                    }
                }
            }
        }
    });
});

observer.observe(document.body, {
    characterDataOldValue: true,
    subtree: true,
    childList: true,
    characterData: true
});
//end mutation oberver 

//PLUS BUTTON CHANGE 
function contractLengthChange_Plus() {

    //'+' clicks in sequence 
    //changes value to one needed
    var pxFuncFired = 0;
    var pxInterval = setInterval(pxPollFunc, 100);

    //polling function
    function pxPollFunc() {
        pxFuncFired += 1;

        if (pxFuncFired >= 20) {
            clearInterval(pxInterval);
            //card selection
            var vt590_lengthSelectorCard = document.querySelector('div[class*="CardBuilderstyle__CardBuilder"]')
            //show card again 
            vt590_lengthSelectorCard.style.opacity = 100
        }
        //update selector with each attempt
        //inner Text
        var vt590_contractLngthText = document.querySelector('span[class*="ConfiguratorSelectorValuestyle__ValueLabel"]').innerText.split(" ")[0]
        //card selection
        var vt590_lengthSelectorCard = document.querySelector('div[class*="CardBuilderstyle__CardBuilder"]')
        //button selection
        var vt590_plusBtn = document.querySelector('button[aria-label="plus contract length"]')

        //change opacity to hide it
        vt590_lengthSelectorCard.style.opacity = 0

        if (vt590_contractLngthText != '24') {
            vt590_plusBtn.click()
        } else if (vt590_contractLngthText === '24') {
            clearInterval(pxInterval);
            vt590_lengthSelectorCard.style.opacity = 100
            //disconnect observer to prevent further button presses on user input 
            observer.disconnect();
        }
    }
}

//MINUS BUTTON CHANGE
function contractLengthChange_Minus() {

    //'-' clicks in sequence 
    //changes value to one needed
    var pxFuncFired = 0;
    var pxInterval = setInterval(pxPollFunc, 100);

    //polling function
    function pxPollFunc() {
        pxFuncFired += 1;

        if (pxFuncFired >= 20) {
            clearInterval(pxInterval);
            //card selection
            var vt590_lengthSelectorCard = document.querySelector('div[class*="CardBuilderstyle__CardBuilder"]')
            //show card again 
            vt590_lengthSelectorCard.style.opacity = 100
        }

        //update selector with each attempt
        //inner Text
        var vt590_contractLngthText = document.querySelector('span[class*="ConfiguratorSelectorValuestyle__ValueLabel"]').innerText.split(" ")[0]
        //card selection
        var vt590_lengthSelectorCard = document.querySelector('div[class*="CardBuilderstyle__CardBuilder"]')
        //button selection
        var vt590_minusBtn = document.querySelector('button[aria-label="minus contract length"]')

        //change opacity to hide it
        vt590_lengthSelectorCard.style.opacity = 0

        if (vt590_contractLngthText != '24') {
            vt590_minusBtn.click()
        } else if (vt590_contractLngthText === '24') {
            clearInterval(pxInterval);
            vt590_lengthSelectorCard.style.opacity = 100
            //disconnect observer to prevent further button presses on user input 
            observer.disconnect();
        }
    }
}

//Reconnect mutation observer if user navigates back 
window.addEventListener("hashchange", function (e) {
    //start observing again
    observer.observe(document.body, {
        characterDataOldValue: true,
        subtree: true,
        childList: true,
        characterData: true
    });
})

// ////ORIGINAL WORKING BUILD////
// //mutation observer
// let observer = new MutationObserver((mutations) => {
//     mutations.forEach((mutation) => {
//         let oldValue = mutation.oldValue;
//         let newValue = mutation.target.textContent;
//         if (oldValue !== newValue) {

//             var pxFuncFired = 0;
//             var pxInterval = setInterval(pxPollFunc, 1);

//             //polling function
//             function pxPollFunc() {
//                 pxFuncFired += 1;

//                 if (pxFuncFired >= 20) {
//                     clearInterval(pxInterval);
//                 }

//                 //target element
//                 var lengthSelectorCard = document.querySelector('.CardBuilderstyle__CardBuilderCompareCheckboxWrapper-sc-3jpuvl-3.hWJXqf')

//                 if (lengthSelectorCard && document.querySelector('.ConfiguratorSelectorValuestyle__ValueLabel-sc-1c8m306-0.wEyAr')) {
//                     //clear polling when found
//                     clearInterval(pxInterval);
//                     //contract length text
//                     var contractLngthValue = document.querySelector('.ConfiguratorSelectorValuestyle__ValueLabel-sc-1c8m306-0.wEyAr').innerHTML.split(' months')[0]
//                     //max contract value
//                     var maxContractValue = document.querySelectorAll('.Paragraphstyle__Paragraph-sc-ejay05-0.cRtiRA')[3].innerText.split('Max ')[1]

//                     //check max vaule is greater than 24 months
//                     if (maxContractValue > '24') {
//                         if (contractLngthValue > '24') {
//                             contractLengthChange_Minus()
//                         } else if (contractLngthValue < '24') {
//                             contractLengthChange_Plus()
//                         }
//                     }
//                 }
//             }
//         }
//     });
// });

// observer.observe(document.body, {
//     characterDataOldValue: true,
//     subtree: true,
//     childList: true,
//     characterData: true
// });
// //end mutation oberver

// //PLUS BUTTON CHANGE
// function contractLengthChange_Plus() {

//     //'+' clicks in sequence
//     //changes value to one needed
//     var pxFuncFired = 0;
//     var pxInterval = setInterval(pxPollFunc, 1);

//     //polling function
//     function pxPollFunc() {
//         pxFuncFired += 1;

//         if (pxFuncFired >= 20) {
//             clearInterval(pxInterval);
//             lengthSelectorCard.style.opacity = 100
//         }
//         //update selector with each attempt
//         //inner Text
//         var contractLngthText = document.querySelector('.ConfiguratorSelectorValuestyle__ValueLabel-sc-1c8m306-0.wEyAr').innerText;
//         //card selection
//         var lengthSelectorCard = document.querySelector('.CardBuilderstyle__CardBuilderCompareCheckboxWrapper-sc-3jpuvl-3.hWJXqf')
//         //button selection
//         var plusBtn = document.querySelectorAll('.Interactionstyle__Button-sc-53qagq-0.cFkItY.sc-gKsecS.iiGfys')[2]

//         //change opacity to hide it
//         lengthSelectorCard.style.opacity = 0

//         if (contractLngthText != '24 months') {
//             plusBtn.click()
//         } else if (contractLngthText === '24 months') {
//             clearInterval(pxInterval);
//             lengthSelectorCard.style.opacity = 100
//             //discount observer to prevent further button presses on user input
//             observer.disconnect();
//         }
//     }
// }

// //MINUS BUTTON CHANGE
// function contractLengthChange_Minus() {

//     //'-' clicks in sequence
//     //changes value to one needed
//     var pxFuncFired = 0;
//     var pxInterval = setInterval(pxPollFunc, 1);

//     //polling function
//     function pxPollFunc() {
//         pxFuncFired += 1;

//         if (pxFuncFired >= 20) {
//             clearInterval(pxInterval);
//             lengthSelectorCard.style.opacity = 100
//         }
//         //update selector with each attempt
//         //inner Text
//         var contractLngthText = document.querySelector('.ConfiguratorSelectorValuestyle__ValueLabel-sc-1c8m306-0.wEyAr').innerText;
//         //card selection
//         var lengthSelectorCard = document.querySelector('.CardBuilderstyle__CardBuilderCompareCheckboxWrapper-sc-3jpuvl-3.hWJXqf')
//         //button selection
//         var minusBtn = document.querySelectorAll('.Interactionstyle__Button-sc-53qagq-0.cFkItY.sc-gKsecS.iiGfys')[1]

//         //change opacity to hide it
//         lengthSelectorCard.style.opacity = 0

//         if (contractLngthText != '24 months') {
//             minusBtn.click()
//         } else if (contractLngthText === '24 months') {
//             clearInterval(pxInterval);
//             lengthSelectorCard.style.opacity = 100
//             //discount observer to prevent further button presses on user input
//             observer.disconnect();
//         }
//     }
// }

// //Reconnect mutation observer if user navigates back
// window.addEventListener("hashchange", function (e) {
//     observer.observe(document.body, {
//         characterDataOldValue: true,
//         subtree: true,
//         childList: true,
//         characterData: true
//     });
// })