////MUTATION OBSERVER////
let vt588_observer = new MutationObserver((mutations) => {
    mutations.forEach((mutation) => {
        let vt588_oldValue = mutation.oldValue;
        let vt588_newValue = mutation.target.textContent;
        if (vt588_oldValue !== vt588_newValue) {
            if (window.location.href.indexOf('voxi.co.uk/contact-us') > -1) {
                window.location = 'https://www.voxi.co.uk/contactus'
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