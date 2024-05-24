//A/B test
let vt588_observer = new MutationObserver((mutations) => {
    mutations.forEach((mutation) => {
        let vt588_oldValue = mutation.oldValue;
        let vt588_newValue = mutation.target.textContent;
        if (vt588_oldValue !== vt588_newValue) {
            //a/b test re-direct (9am to 5pm)
            if (window.location.href.indexOf('voxi.co.uk/contact-us') > -1) {
                var d = new Date();
                var currentHourGMT = d.getUTCHours() + 1 //daylight savings
                var currentDayGMT = d.getUTCDay()
                if ((currentHourGMT >= 9 && currentHourGMT < 17) && ([1,2,3,4,5].includes(currentDayGMT)) ) {
                    window.location = 'https://www.voxi.co.uk/contactus'
                }
            } 

            //a-b test redirect (out of office hours)
            if (window.location.href.indexOf('voxi.co.uk/contactus') > -1) {
                var d = new Date();
                var currentDayGMT = d.getUTCDay()
                var currentHourGMT = d.getUTCHours() + 1 //daylight savings
                if (!(currentHourGMT >= 9 && currentHourGMT < 17) || (([6,7].includes(currentDayGMT)))) {
                    window.location = 'https://www.voxi.co.uk/contact-us'
                }
            }
        }
    });
});

vt588_observer.observe(document.body, {
    characterDataOldValue: true,
    subtree: true,
    childList: true,
    characterData: true
});

//Kill Switch 
let vt588_ks_observer = new MutationObserver((mutations) => {
    mutations.forEach((mutation) => {
        let vt588_ks_oldValue = mutation.oldValue;
        let vt588_ks_newValue = mutation.target.textContent;
        if (vt588_ks_oldValue !== vt588_ks_newValue) {
            if (window.location.href.indexOf('voxi.co.uk/contactus') > -1) {
                //     var d = new Date();
                //     var currentHourGMT = d.getUTCHours() - (d.getTimezoneOffset() / 60)
                //     if (!(currentHourGMT >= 9 && currentHourGMT < 17)) {
                //         window.location = 'https://www.voxi.co.uk/contact-us'
                //     }
                // }
                window.location = 'https://www.voxi.co.uk/contact-us'
            }
        }
    });
});

vt588_ks_observer.observe(document.body, {
    characterDataOldValue: true,
    subtree: true,
    childList: true,
    characterData: true
});