function vt612_changePromoText() {
    //return product titles
    var vt612_targetTexts = document.querySelectorAll('[class*=Headingstyle__Heading-sc]')

    //define an array of possible values to match
    var vt612_valuesToMatch = [
        'iPhone 15',
        'iPhone 15 Pro',
        'iPhone 15 Pro Max',
        'iPhone 15 Plus',
        'iPhone 14',
        'Galaxy S24 5G',
        'Galaxy S24 Plus 5G',
        'Galaxy S24 Ultra 5G',
        'Pixel 8',
        'Pixel 8 Pro',
        'Pixel 8a'
    ];

    //define text change
    var vt612_promos = [
        '£528 saving',
        '£528 saving',
        '£528 saving',
        '£528 saving',
        'Save £288',
        'Save up to £636',
        'Save up to £600',
        'Save up to £600',
        'Save up to £636',
        'Save up to £636',
        'Save up to £672'
    ]

    for (var i = 0; i < vt612_targetTexts.length; i++) {
        var vt612_textContent = vt612_targetTexts[i].innerText.trim();

        //check for matches in the array
        if (vt612_valuesToMatch.includes(vt612_textContent)) {
            //indexed array value
            var index = vt612_valuesToMatch.indexOf(vt612_textContent)
            if (index !== -1) {
                var vt612_textUpdate = vt612_promos[index]
                //find the closest sash to change
                var vt612_targetLabel = vt612_targetTexts[i].parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.querySelector('[class*="Spanstyle__Span-sc"]')
                if (vt612_targetLabel && vt612_targetLabel.innerHTML === 'Offers Available') {
                    //change text
                    vt612_targetLabel.innerHTML = vt612_textUpdate
                }
            }
        }
    }
}

////POLLING FUNCTION////
//polling function config
var vt612_pxFuncFired = 0;
var vt612_pxInterval = setInterval(vt612_pxPollFunc, 50);

//polling function
function vt612_pxPollFunc() {
    vt612_pxFuncFired += 1;

    if (vt612_pxFuncFired >= 20) {
        //try 20 times, if not found clear px func
        clearInterval(vt612_pxInterval);
    }

    //target element 
    var vt612_gridSection = document.querySelector('[data-component-name="ContainerWithLabel"]')

    if (vt612_gridSection) {
        //clear polling when found
        clearInterval(vt612_pxInterval);
        //ACTIONS HERE 
        vt612_changePromoText() 
    }
}

//mutation observer 
const observer = new MutationObserver((mutationsList, observer) => {
    //check for mutations
    for (const mutation of mutationsList) {
        if (mutation.target.matches('[data-component-name="SimpleGrid"]')) {
            //apply modifications when changes are detected
            vt612_changePromoText()
        }
    }
});

//define the configuration for the MutationObserver
const observerConfig = {
    childList: true,
    subtree: true,
};

//start observing changes
observer.observe(document.body, observerConfig);