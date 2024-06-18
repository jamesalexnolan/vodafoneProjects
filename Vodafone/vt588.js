// //A/B test
// let vt588_observer = new MutationObserver((mutations) => {
//     mutations.forEach((mutation) => {
//         let vt588_oldValue = mutation.oldValue;
//         let vt588_newValue = mutation.target.textContent;
//         if (vt588_oldValue !== vt588_newValue) {
//             //a/b test re-direct (9am to 5pm)
//             if (window.location.href.indexOf('voxi.co.uk/contact-us') > -1) {
//                 var d = new Date();
//                 var currentHourGMT = d.getUTCHours() + 1 //daylight savings
//                 var currentDayGMT = d.getUTCDay()
//                 if ((currentHourGMT >= 9 && currentHourGMT < 17) && ([1, 2, 3, 4, 5].includes(currentDayGMT))) {
//                     window.location = 'https://www.voxi.co.uk/contactus'
//                 }
//             }

//             //a-b test redirect (out of office hours)
//             if (window.location.href.indexOf('voxi.co.uk/contactus') > -1) {
//                 var d = new Date();
//                 var currentDayGMT = d.getUTCDay()
//                 var currentHourGMT = d.getUTCHours() + 1 //daylight savings
//                 if (!(currentHourGMT >= 9 && currentHourGMT < 17) || (([6, 7].includes(currentDayGMT)))) {
//                     window.location = 'https://www.voxi.co.uk/contact-us'
//                 }
//             }
//         }
//     });
// });

// vt588_observer.observe(document.body, {
//     //characterDataOldValue: true,
//     subtree: true,
//     childList: true,
//     //characterData: true
//     attributes: true
// });

// //Kill Switch 
// let vt588_ks_observer = new MutationObserver((mutations) => {
//     mutations.forEach((mutation) => {
//         let vt588_ks_oldValue = mutation.oldValue;
//         let vt588_ks_newValue = mutation.target.textContent;
//         if (vt588_ks_oldValue !== vt588_ks_newValue) {
//             if (window.location.href.indexOf('voxi.co.uk/contactus') > -1) {
//                 //     var d = new Date();
//                 //     var currentHourGMT = d.getUTCHours() - (d.getTimezoneOffset() / 60)
//                 //     if (!(currentHourGMT >= 9 && currentHourGMT < 17)) {
//                 //         window.location = 'https://www.voxi.co.uk/contact-us'
//                 //     }
//                 // }
//                 window.location = 'https://www.voxi.co.uk/contact-us'
//             }
//         }
//     });
// });

// vt588_ks_observer.observe(document.body, {
//     //characterDataOldValue: true,
//     subtree: true,
//     childList: true,
//     //characterData: true
//     attributes: true
// });

//-----------------------------------------------------------

////POLLING FUNCTION////
//polling function config
var vt588_pxFuncFired = 0;
var vt588_pxInterval = setInterval(vt588_pxPollFunc, 100);

//polling function
function vt588_pxPollFunc() {
    vt588_pxFuncFired += 1;

    if (vt588_pxFuncFired >= 20) {
        //try 20 times, if not found clear px func
        clearInterval(vt588_pxInterval);
    }

    if (document.body.nodeType === 1) {
        //clear polling when found
        clearInterval(vt588_pxInterval);
        //ACTIONS HERE 
        //A/B test
        let vt588_observer = new MutationObserver((mutations) => {
            mutations.forEach((mutation) => {
                let vt588_oldValue = mutation.oldValue;
                let vt588_newValue = mutation.target.textContent;
                if (vt588_oldValue !== vt588_newValue) {
                    if (window.location.href.indexOf('voxi.co.uk/contact-us') > -1 || window.location.href.indexOf('voxi.co.uk/contactus') > -1) {
                        //a/b test re-direct (9am to 5pm)
                        //if (window.location.href.indexOf('voxi.co.uk/contact-us') > -1) {
                        if (window.location.href.indexOf('/contact-us') > -1) {
                            var d = new Date();
                            var currentHourGMT = d.getUTCHours() + 1 //daylight savings
                            var currentDayGMT = d.getUTCDay()
                            if ((currentHourGMT >= 9 && currentHourGMT < 17) && ([1, 2, 3, 4, 5].includes(currentDayGMT))) {
                                window.location = 'https://www.voxi.co.uk/contactus'
                            }
                        }

                        //a-b test redirect (out of office hours)
                        // if (window.location.href.indexOf('voxi.co.uk/contactus') > -1) {
                        if (window.location.href.indexOf('/contact-us') > -1) {
                            var d = new Date();
                            var currentDayGMT = d.getUTCDay()
                            var currentHourGMT = d.getUTCHours() + 1 //daylight savings
                            if (!(currentHourGMT >= 9 && currentHourGMT < 17) || (([6, 7].includes(currentDayGMT)))) {
                                window.location = 'https://www.voxi.co.uk/contact-us'
                            }
                        }
                    } else {
                        vt588_observer.disconnect()
                    }
                }
            });
        });

        vt588_observer.observe(document.body, {
            //characterDataOldValue: true,
            subtree: true,
            childList: true,
            //characterData: true,
            attributes: true
        });

        //Reconnect mutation observer if user navigates back 
        window.navigation.addEventListener("navigate", (event) => {
            //start observing again
            vt588_observer.observe(document.body, {
                //characterDataOldValue: true,
                subtree: true,
                childList: true,
                //characterData: true,
                attributes: true
            });
        })
    }
}

////POLLING FUNCTION////
//polling function config
var vt588_pxFuncFired = 0;
var vt588_pxInterval = setInterval(vt588_pxPollFunc, 100);

//polling function
function vt588_pxPollFunc() {
    vt588_pxFuncFired += 1;

    if (vt588_pxFuncFired >= 20) {
        //try 20 times, if not found clear px func
        clearInterval(vt588_pxInterval);
    }

    if (document.body.nodeType === 1) {
        //clear polling when found
        clearInterval(vt588_pxInterval);
        //ACTIONS HERE 
        //A/B test
        let vt588_observer = new MutationObserver((mutations) => {
            mutations.forEach((mutation) => {
                let vt588_oldValue = mutation.oldValue;
                let vt588_newValue = mutation.target.textContent;
                if (vt588_oldValue !== vt588_newValue) {
                    //Kill Switch 
                    let vt588_ks_observer = new MutationObserver((mutations) => {
                        mutations.forEach((mutation) => {
                            let vt588_ks_oldValue = mutation.oldValue;
                            let vt588_ks_newValue = mutation.target.textContent;
                            if (vt588_ks_oldValue !== vt588_ks_newValue) {
                                //if (window.location.href.indexOf('voxi.co.uk/contactus') > -1) {
                                if (window.location.href.indexOf('/contactus') > -1) {
                                    //     var d = new Date();
                                    //     var currentHourGMT = d.getUTCHours() - (d.getTimezoneOffset() / 60)
                                    //     if (!(currentHourGMT >= 9 && currentHourGMT < 17)) {
                                    //         window.location = 'https://www.voxi.co.uk/contact-us'
                                    //     }
                                    // }
                                    window.location = 'https://www.voxi.co.uk/contact-us'
                                } else {
                                    vt588_ks_observer.disconnect()
                                }
                            }
                        });
                    });
                }
            });
        });

        vt588_ks_observer.observe(document.body, {
            //characterDataOldValue: true,
            subtree: true,
            childList: true,
            //characterData: true,
            attributes: true
        });

        //Reconnect mutation observer if user navigates back 
        window.navigation.addEventListener("navigate", (event) => {
            //start observing again
            vt588_ks_observer.observe(document.body, {
                //characterDataOldValue: true,
                subtree: true,
                childList: true,
                //characterData: true,
                attributes: true
            });
        })
    }
}