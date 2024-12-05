/**IGNORE THIS SECTION */
////POLLING FUNCTION////
//polling function config
var vx71_nodeCheck_pxFuncFired = 0;
var vx71_nodeCheck_pxInterval = setInterval(vx71_nodeCheck_pxPollFunc, 100); //0.1 seconds * 20 = 2 seconds

//polling function
function vx71_nodeCheck_pxPollFunc() {
    vx71_nodeCheck_pxFuncFired += 1;

    if (vx71_nodeCheck_pxFuncFired >= 20) {
        //try 20 times, if not found, clear px func
        clearInterval(vx71_nodeCheck_pxInterval);
    }

    if (document.body.nodeType === 1) {
        //clear polling when found
        clearInterval(vx71_nodeCheck_pxInterval);
        vx71_pElementUpdates()
        ////MUTATION OBSERVER////
        //mutation to handle p1,p2,p3 changes 
        //mutation observer 
        const vx71Observer = new MutationObserver((mutationsList, vx71Observer) => {
            //check for mutations
            for (const mutation of mutationsList) {
                if (mutation.target.matches('.section--gutter')) {
                    //CHANGES HERE
                    vx71_pElementUpdates()
                }
            }
        });

        //define the configuration for the MutationObserver
        const vx71ObserverConfig = {
            //characterDataOldValue: true,
            subtree: true,
            childList: true,
            //characterData: true,
            attributes: true
        };

        //start observing changes
        vx71Observer.observe(document.body, vx71ObserverConfig);
    }
}

///EVENT LISTENER - PAGE RE-SIZE///
/*Accounts for instances where user/tester changes page from mobile to desktop*/
window.addEventListener('resize', function (event) {
    vx71_pElementUpdates()
});
/**IGNORE THIS SECTION -- END*/

/**CHANGES TO P ELEMENT MADE BELOW*/
///FUNCTION TO CALL///
function vx71_pElementUpdates() {
    //check all p element CTA's are populated
    var p_elements = document.querySelectorAll('.grid__item.promo-card__item')
    for (var i = 0; i < p_elements.length; i++) {
        if (p_elements[i].querySelector('div>div:nth-child(2)>div').innerText !== '') {
            // ///P1 CHANGES///
            // //image changes 
            // //***this will only work if img url is /cs/groups/public/documents/images/ if the img URL doesn't match this, use redacted version
            // //***if using 'redacted version' comment out below first
            // //mobile img
            // var vx71_mobileImg_p1 = 'vfcon128699'
            // //desktop img
            // var vx71_desktopImg_p1 = 'vfcon128698'
            // //set HTML
            // if (screen.width > 880) {
            //     document.querySelectorAll('.grid__item.promo-card__item')[0].querySelector('a>div:nth-child(2)').outerHTML = '<div class="background__image promo-card__background lazyloaded" data-bgset="/cs/groups/public/documents/images/' + vx71_mobileImg_p1 + '.jpg [(max-width: 640px)] | /cs/groups/public/documents/images/' + vx71_mobileImg_p1 + '.jpg [(max-width: 970px)] | /cs/groups/public/documents/images/' + vx71_desktopImg_p1 + '.jpg" style="background-image: url(&quot;https://www.vodafone.co.uk/cs/groups/public/documents/images/' + vx71_desktopImg_p1 + '.jpg&quot;);"><picture style="display: none;"><source data-srcset="/cs/groups/public/documents/images/' + vx71_mobileImg_p1 + '.jpg" media="(max-width: 640px)" srcset="/cs/groups/public/documents/images/' + vx71_mobileImg_p1 + '.jpg"><source data-srcset="/cs/groups/public/documents/images/' + vx71_mobileImg_p1 + '.jpg" media="(max-width: 970px)" srcset="/cs/groups/public/documents/images/' + vx71_mobileImg_p1 + '.jpg"><source data-srcset="/cs/groups/public/documents/images/' + vx71_desktopImg_p1 + '.jpg" srcset="/cs/groups/public/documents/images/' + vx71_desktopImg_p1 + '.jpg"><img alt="" class=" lazyloaded" sec_uuid_js:web.vodafone.co.uk="0306f658ee02"></picture></div>'
            // } else if (screen.width < 880) {
            //     document.querySelectorAll('.grid__item.promo-card__item')[0].querySelector('a>div:nth-child(2)').outerHTML = '<div class="background__image promo-card__background lazyloaded" data-bgset="/cs/groups/public/documents/images/' + vx71_mobileImg_p1 + '.jpg [(max-width: 640px)] | /cs/groups/public/documents/images/' + vx71_mobileImg_p1 + '.jpg [(max-width: 970px)] | /cs/groups/public/documents/images/' + vx71_desktopImg_p1 + '.jpg" style="background-image: url(&quot;https://www.vodafone.co.uk/cs/groups/public/documents/images/' + vx71_mobileImg_p1 + '.jpg&quot;);"><picture style="display: none;"><source data-srcset="/cs/groups/public/documents/images/' + vx71_mobileImg_p1 + '.jpg" media="(max-width: 640px)" srcset="/cs/groups/public/documents/images/' + vx71_mobileImg_p1 + '.jpg"><source data-srcset="/cs/groups/public/documents/images/' + vx71_mobileImg_p1 + '.jpg" media="(max-width: 970px)" srcset="/cs/groups/public/documents/images/' + vx71_mobileImg_p1 + '.jpg"><source data-srcset="/cs/groups/public/documents/images/' + vx71_desktopImg_p1 + '.jpg" srcset="/cs/groups/public/documents/images/' + vx71_desktopImg_p1 + '.jpg"><img alt="" class=" lazyloaded" sec_uuid_js:web.vodafone.co.uk="0306f658ee02"></picture></div>'
            // }

            // /*
            // var vx71_desktopImg_p1 = 'https://images.vodafone.co.uk/gbnnsauqav4t/46fJOMoa9jnMHx4nuDIGQW/b1b032c06f0d3db729d711e9b80eafdb/DT-P3-Web-Tile-TNN-blank.png'
            // var vx71_mobileImg_p1 = 'https://images.vodafone.co.uk/gbnnsauqav4t/5NZCsITNPKyvYm9CVzYU3W/6d1b8e5fca65e145bc3019a62bfa0266/MB-P3-Web-Tile-TNN-blank.png'

            // if (screen.width > 880) {
            //     document.querySelectorAll('.grid__item.promo-card__item')[0].querySelector('a>div:nth-child(2)').outerHTML = '<div class="background__image promo-card__background lazyloaded" style="background-image: url(&quot;'+ vx71_desktopImg_p1 +'&quot;);"><picture style="display: none;"><img alt="" class=" lazyloaded" sec_uuid_js:web.vodafone.co.uk="0306f658ee02"></picture></div>'
            // } else if (screen.width < 880) {
            //     document.querySelectorAll('.grid__item.promo-card__item')[0].querySelector('a>div:nth-child(2)').outerHTML = '<div class="background__image promo-card__background lazyloaded" style="background-image: url(&quot;'+ vx71_mobileImg_p1 +'&quot;);"><picture style="display: none;"></picture></div>'
            // }
            // */

            // //Header 
            // document.querySelectorAll('.grid__item.promo-card__item')[0].querySelector('div>div>h3').innerText = 'Samsung Galaxy S24 Ultra – save £704'
            // //Sub-Header
            // document.querySelectorAll('.grid__item.promo-card__item')[0].querySelector('div>div>p').innerText = 'When you claim £200 cashback*. Save £432 on Airtime Plan £72 on your phone. Ends 25 June.'
            //CTA text
            document.querySelectorAll('.grid__item.promo-card__item')[0].querySelector('div>div:nth-child(2)>div').innerText = 'Log in to buy now'
            //CTA link 
            document.querySelectorAll('.grid__item.promo-card__item')[0].querySelector('a').setAttribute('href', 'https://www.vodafone.co.uk/web-shop/login?successReturnUrl=/mobile/phones/pay-monthly-contracts/samsung/galaxy-s24-5g?icmp=CBU_home_youmightlike_p1_existing_s24_26/06/2024')
            ///P1 CHANGES -- END///

            // ///P2 CHANGES///
            // //image changes 
            // //***this will only work if img url is /cs/groups/public/documents/images/ if the img URL doesn't match this, use redacted version
            // //***if using 'redacted version' comment out below first
            // //mobile img
            // var vx71_mobileImg_p2 = 'vfcon128699'
            // //desktop img
            // var vx71_desktopImg_p2 = 'vfcon128698'
            // //set HTML
            // if (screen.width > 880) {
            //     document.querySelectorAll('.grid__item.promo-card__item')[1].querySelector('a>div:nth-child(2)').outerHTML = '<div class="background__image promo-card__background lazyloaded" data-bgset="/cs/groups/public/documents/images/' + vx71_mobileImg_p2 + '.jpg [(max-width: 640px)] | /cs/groups/public/documents/images/' + vx71_mobileImg_p2 + '.jpg [(max-width: 970px)] | /cs/groups/public/documents/images/' + vx71_desktopImg_p2 + '.jpg" style="background-image: url(&quot;https://www.vodafone.co.uk/cs/groups/public/documents/images/' + vx71_desktopImg_p2 + '.jpg&quot;);"><picture style="display: none;"><source data-srcset="/cs/groups/public/documents/images/' + vx71_mobileImg_p2 + '.jpg" media="(max-width: 640px)" srcset="/cs/groups/public/documents/images/' + vx71_mobileImg_p2 + '.jpg"><source data-srcset="/cs/groups/public/documents/images/' + vx71_mobileImg_p2 + '.jpg" media="(max-width: 970px)" srcset="/cs/groups/public/documents/images/' + vx71_mobileImg_p2 + '.jpg"><source data-srcset="/cs/groups/public/documents/images/' + vx71_desktopImg_p2 + '.jpg" srcset="/cs/groups/public/documents/images/' + vx71_desktopImg_p2 + '.jpg"><img alt="" class=" lazyloaded" sec_uuid_js:web.vodafone.co.uk="0306f658ee02"></picture></div>'
            // } else if (screen.width < 880) {
            //     document.querySelectorAll('.grid__item.promo-card__item')[1].querySelector('a>div:nth-child(2)').outerHTML = '<div class="background__image promo-card__background lazyloaded" data-bgset="/cs/groups/public/documents/images/' + vx71_mobileImg_p2 + '.jpg [(max-width: 640px)] | /cs/groups/public/documents/images/' + vx71_mobileImg_p2 + '.jpg [(max-width: 970px)] | /cs/groups/public/documents/images/' + vx71_desktopImg_p2 + '.jpg" style="background-image: url(&quot;https://www.vodafone.co.uk/cs/groups/public/documents/images/' + vx71_mobileImg_p2 + '.jpg&quot;);"><picture style="display: none;"><source data-srcset="/cs/groups/public/documents/images/' + vx71_mobileImg_p2 + '.jpg" media="(max-width: 640px)" srcset="/cs/groups/public/documents/images/' + vx71_mobileImg_p2 + '.jpg"><source data-srcset="/cs/groups/public/documents/images/' + vx71_mobileImg_p2 + '.jpg" media="(max-width: 970px)" srcset="/cs/groups/public/documents/images/' + vx71_mobileImg_p2 + '.jpg"><source data-srcset="/cs/groups/public/documents/images/' + vx71_desktopImg_p2 + '.jpg" srcset="/cs/groups/public/documents/images/' + vx71_desktopImg_p2 + '.jpg"><img alt="" class=" lazyloaded" sec_uuid_js:web.vodafone.co.uk="0306f658ee02"></picture></div>'
            // }

            // /*
            // var vx71_desktopImg_p2 = 'https://images.vodafone.co.uk/gbnnsauqav4t/46fJOMoa9jnMHx4nuDIGQW/b1b032c06f0d3db729d711e9b80eafdb/DT-P3-Web-Tile-TNN-blank.png'
            // var vx71_mobileImg_p2 = 'https://images.vodafone.co.uk/gbnnsauqav4t/5NZCsITNPKyvYm9CVzYU3W/6d1b8e5fca65e145bc3019a62bfa0266/MB-P3-Web-Tile-TNN-blank.png'

            // if (screen.width > 880) {
            //     document.querySelectorAll('.grid__item.promo-card__item')[1].querySelector('a>div:nth-child(2)').outerHTML = '<div class="background__image promo-card__background lazyloaded" style="background-image: url(&quot;'+ vx71_desktopImg_p2 +'&quot;);"><picture style="display: none;"><img alt="" class=" lazyloaded" sec_uuid_js:web.vodafone.co.uk="0306f658ee02"></picture></div>'
            // } else if (screen.width < 880) {
            //     document.querySelectorAll('.grid__item.promo-card__item')[1].querySelector('a>div:nth-child(2)').outerHTML = '<div class="background__image promo-card__background lazyloaded" style="background-image: url(&quot;'+ vx71_mobileImg_p2 +'&quot;);"><picture style="display: none;"></picture></div>'
            // }
            // */

            // //Header 
            // document.querySelectorAll('.grid__item.promo-card__item')[1].querySelector('div>div>h3').innerText = 'Samsung Galaxy S24 Ultra – save £704'
            // //Sub-Header
            // document.querySelectorAll('.grid__item.promo-card__item')[1].querySelector('div>div>p').innerText = 'When you claim £200 cashback*. Save £432 on Airtime Plan £72 on your phone. Ends 25 June.'
            //CTA text
            document.querySelectorAll('.grid__item.promo-card__item')[1].querySelector('div>div:nth-child(2)>div').innerText = 'Log in to see offer'
            //CTA link 
            document.querySelectorAll('.grid__item.promo-card__item')[1].querySelector('a').setAttribute('href', 'https://www.vodafone.co.uk/web-shop/login?successReturnUrl=/mobile/phones/pay-monthly-contracts/apple/iphone-15-pro?icmp=CBU_Home_youmightlike_p2_existing_iphone15pro_02/07/2024')
            ///P2 CHANGES -- END///

            // ///P3 CHANGES///
            // //image changes 
            // //***this will only work if img url is /cs/groups/public/documents/images/ if the img URL doesn't match this, use redacted version
            // //***if using 'redacted version' comment out below first
            // //mobile img
            // var vx71_mobileImg_p3 = 'vfcon128699'
            // //desktop img
            // var vx71_desktopImg_p3 = 'vfcon128698'
            // //set HTML
            // if (screen.width > 880) {
            //     document.querySelectorAll('.grid__item.promo-card__item')[2].querySelector('a>div:nth-child(2)').outerHTML = '<div class="background__image promo-card__background lazyloaded" data-bgset="/cs/groups/public/documents/images/' + vx71_mobileImg_p3 + '.jpg [(max-width: 640px)] | /cs/groups/public/documents/images/' + vx71_mobileImg_p3 + '.jpg [(max-width: 970px)] | /cs/groups/public/documents/images/' + vx71_desktopImg_p3 + '.jpg" style="background-image: url(&quot;https://www.vodafone.co.uk/cs/groups/public/documents/images/' + vx71_desktopImg_p3 + '.jpg&quot;);"><picture style="display: none;"><source data-srcset="/cs/groups/public/documents/images/' + vx71_mobileImg_p3 + '.jpg" media="(max-width: 640px)" srcset="/cs/groups/public/documents/images/' + vx71_mobileImg_p3 + '.jpg"><source data-srcset="/cs/groups/public/documents/images/' + vx71_mobileImg_p3 + '.jpg" media="(max-width: 970px)" srcset="/cs/groups/public/documents/images/' + vx71_mobileImg_p3 + '.jpg"><source data-srcset="/cs/groups/public/documents/images/' + vx71_desktopImg_p3 + '.jpg" srcset="/cs/groups/public/documents/images/' + vx71_desktopImg_p3 + '.jpg"><img alt="" class=" lazyloaded" sec_uuid_js:web.vodafone.co.uk="0306f658ee02"></picture></div>'
            // } else if (screen.width < 880) {
            //     document.querySelectorAll('.grid__item.promo-card__item')[2].querySelector('a>div:nth-child(2)').outerHTML = '<div class="background__image promo-card__background lazyloaded" data-bgset="/cs/groups/public/documents/images/' + vx71_mobileImg_p3 + '.jpg [(max-width: 640px)] | /cs/groups/public/documents/images/' + vx71_mobileImg_p3 + '.jpg [(max-width: 970px)] | /cs/groups/public/documents/images/' + vx71_desktopImg_p3 + '.jpg" style="background-image: url(&quot;https://www.vodafone.co.uk/cs/groups/public/documents/images/' + vx71_mobileImg_p3 + '.jpg&quot;);"><picture style="display: none;"><source data-srcset="/cs/groups/public/documents/images/' + vx71_mobileImg_p3 + '.jpg" media="(max-width: 640px)" srcset="/cs/groups/public/documents/images/' + vx71_mobileImg_p3 + '.jpg"><source data-srcset="/cs/groups/public/documents/images/' + vx71_mobileImg_p3 + '.jpg" media="(max-width: 970px)" srcset="/cs/groups/public/documents/images/' + vx71_mobileImg_p3 + '.jpg"><source data-srcset="/cs/groups/public/documents/images/' + vx71_desktopImg_p3 + '.jpg" srcset="/cs/groups/public/documents/images/' + vx71_desktopImg_p3 + '.jpg"><img alt="" class=" lazyloaded" sec_uuid_js:web.vodafone.co.uk="0306f658ee02"></picture></div>'
            // }

            // /*
            // var vx71_desktopImg_p3 = 'https://images.vodafone.co.uk/gbnnsauqav4t/46fJOMoa9jnMHx4nuDIGQW/b1b032c06f0d3db729d711e9b80eafdb/DT-P3-Web-Tile-TNN-blank.png'
            // var vx71_mobileImg_p3 = 'https://images.vodafone.co.uk/gbnnsauqav4t/5NZCsITNPKyvYm9CVzYU3W/6d1b8e5fca65e145bc3019a62bfa0266/MB-P3-Web-Tile-TNN-blank.png'

            // if (screen.width > 880) {
            //     document.querySelectorAll('.grid__item.promo-card__item')[2].querySelector('a>div:nth-child(2)').outerHTML = '<div class="background__image promo-card__background lazyloaded" style="background-image: url(&quot;'+ vx71_desktopImg_p3 +'&quot;);"><picture style="display: none;"><img alt="" class=" lazyloaded" sec_uuid_js:web.vodafone.co.uk="0306f658ee02"></picture></div>'
            // } else if (screen.width < 880) {
            //     document.querySelectorAll('.grid__item.promo-card__item')[2].querySelector('a>div:nth-child(2)').outerHTML = '<div class="background__image promo-card__background lazyloaded" style="background-image: url(&quot;'+ vx71_mobileImg_p3 +'&quot;);"><picture style="display: none;"></picture></div>'
            // }
            // */

            // //Header 
            // document.querySelectorAll('.grid__item.promo-card__item')[2].querySelector('div>div>h3').innerText = 'Samsung Galaxy S24 Ultra – save £704'
            // //Sub-Header
            // document.querySelectorAll('.grid__item.promo-card__item')[2].querySelector('div>div>p').innerText = 'When you claim £200 cashback*. Save £432 on Airtime Plan £72 on your phone. Ends 25 June.'
            //CTA text
            document.querySelectorAll('.grid__item.promo-card__item')[2].querySelector('div>div:nth-child(2)>div').innerText = 'Log in to see offer'
            //CTA link 
            document.querySelectorAll('.grid__item.promo-card__item')[2].querySelector('a').setAttribute('href', 'https://www.vodafone.co.uk/web-shop/login?successReturnUrl=/mobile/phones/pay-monthly-contracts/google/pixel-8?icmp=CBU_Home_youmightlike_p3_existing_googlepixel8_02/07/2024')
            ///P3 CHANGES -- END///

            ///P4 CHANGES///
            // //image changes 
            // //***this will only work if img url is /cs/groups/public/documents/images/ if the img URL doesn't match this, use redacted version
            // //***if using 'redacted version' comment out below first
            // //mobile img
            // var vx71_mobileImg_p4 = 'vfcon128699'
            // //desktop img
            // var vx71_desktopImg_p4 = 'vfcon128698'
            // //set HTML
            // if (screen.width > 880) {
            //     document.querySelectorAll('.grid__item.promo-card__item')[3].querySelector('a>div:nth-child(2)').outerHTML = '<div class="background__image promo-card__background lazyloaded" data-bgset="/cs/groups/public/documents/images/' + vx71_mobileImg_p4 + '.jpg [(max-width: 640px)] | /cs/groups/public/documents/images/' + vx71_mobileImg_p4 + '.jpg [(max-width: 970px)] | /cs/groups/public/documents/images/' + vx71_desktopImg_p4 + '.jpg" style="background-image: url(&quot;https://www.vodafone.co.uk/cs/groups/public/documents/images/' + vx71_desktopImg_p4 + '.jpg&quot;);"><picture style="display: none;"><source data-srcset="/cs/groups/public/documents/images/' + vx71_mobileImg_p4 + '.jpg" media="(max-width: 640px)" srcset="/cs/groups/public/documents/images/' + vx71_mobileImg_p4 + '.jpg"><source data-srcset="/cs/groups/public/documents/images/' + vx71_mobileImg_p4 + '.jpg" media="(max-width: 970px)" srcset="/cs/groups/public/documents/images/' + vx71_mobileImg_p4 + '.jpg"><source data-srcset="/cs/groups/public/documents/images/' + vx71_desktopImg_p4 + '.jpg" srcset="/cs/groups/public/documents/images/' + vx71_desktopImg_p4 + '.jpg"><img alt="" class=" lazyloaded" sec_uuid_js:web.vodafone.co.uk="0306f658ee02"></picture></div>'
            // } else if (screen.width < 880) {
            //     document.querySelectorAll('.grid__item.promo-card__item')[3].querySelector('a>div:nth-child(2)').outerHTML = '<div class="background__image promo-card__background lazyloaded" data-bgset="/cs/groups/public/documents/images/' + vx71_mobileImg_p4 + '.jpg [(max-width: 640px)] | /cs/groups/public/documents/images/' + vx71_mobileImg_p4 + '.jpg [(max-width: 970px)] | /cs/groups/public/documents/images/' + vx71_desktopImg_p4 + '.jpg" style="background-image: url(&quot;https://www.vodafone.co.uk/cs/groups/public/documents/images/' + vx71_mobileImg_p4 + '.jpg&quot;);"><picture style="display: none;"><source data-srcset="/cs/groups/public/documents/images/' + vx71_mobileImg_p4 + '.jpg" media="(max-width: 640px)" srcset="/cs/groups/public/documents/images/' + vx71_mobileImg_p4 + '.jpg"><source data-srcset="/cs/groups/public/documents/images/' + vx71_mobileImg_p4 + '.jpg" media="(max-width: 970px)" srcset="/cs/groups/public/documents/images/' + vx71_mobileImg_p4 + '.jpg"><source data-srcset="/cs/groups/public/documents/images/' + vx71_desktopImg_p4 + '.jpg" srcset="/cs/groups/public/documents/images/' + vx71_desktopImg_p4 + '.jpg"><img alt="" class=" lazyloaded" sec_uuid_js:web.vodafone.co.uk="0306f658ee02"></picture></div>'
            // }

            // /*
            // var vx71_desktopImg_p4 = 'https://images.vodafone.co.uk/gbnnsauqav4t/46fJOMoa9jnMHx4nuDIGQW/b1b032c06f0d3db729d711e9b80eafdb/DT-P3-Web-Tile-TNN-blank.png'
            // var vx71_mobileImg_p4 = 'https://images.vodafone.co.uk/gbnnsauqav4t/5NZCsITNPKyvYm9CVzYU3W/6d1b8e5fca65e145bc3019a62bfa0266/MB-P3-Web-Tile-TNN-blank.png'

            // if (screen.width > 880) {
            //     document.querySelectorAll('.grid__item.promo-card__item')[3].querySelector('a>div:nth-child(2)').outerHTML = '<div class="background__image promo-card__background lazyloaded" style="background-image: url(&quot;'+ vx71_desktopImg_p4 +'&quot;);"><picture style="display: none;"><img alt="" class=" lazyloaded" sec_uuid_js:web.vodafone.co.uk="0306f658ee02"></picture></div>'
            // } else if (screen.width < 880) {
            //     document.querySelectorAll('.grid__item.promo-card__item')[3].querySelector('a>div:nth-child(2)').outerHTML = '<div class="background__image promo-card__background lazyloaded" style="background-image: url(&quot;'+ vx71_mobileImg_p4 +'&quot;);"><picture style="display: none;"></picture></div>'
            // }
            // */

            //Header 
            document.querySelectorAll('.grid__item.promo-card__item')[3].querySelector('div>div>h3').innerText = 'Get a discount on your broadband'
            //Sub-Header
            document.querySelectorAll('.grid__item.promo-card__item')[3].querySelector('div>div>p').innerText = 'Save more with Vodafone Together. From £24 a month*. Ends 31 July. Increases by £3 each April.'
            //CTA text
            document.querySelectorAll('.grid__item.promo-card__item')[3].querySelector('div>div:nth-child(2)>div').innerText = 'Log in to buy now'
            //CTA link 
            document.querySelectorAll('.grid__item.promo-card__item')[3].querySelector('a').setAttribute('href', 'https://www.vodafone.co.uk/web-shop/login?successReturnUrl=/broadband/existing-customer-promotions')
            ///P4 CHANGES -- END///

            ///P5 CHANGES///
            //image changes 
            // //***this will only work if img url is /cs/groups/public/documents/images/ if the img URL doesn't match this, use redacted version
            // //***if using 'redacted version' comment out below first
            // //mobile img
            // var vx71_mobileImg_p5 = 'vfcon128699'
            // //desktop img
            // var vx71_desktopImg_p5 = 'vfcon128698'
            // //set HTML
            // if (screen.width > 880) {
            //     document.querySelectorAll('.grid__item.promo-card__item')[4].querySelector('a>div:nth-child(2)').outerHTML = '<div class="background__image promo-card__background lazyloaded" data-bgset="/cs/groups/public/documents/images/' + vx71_mobileImg_p5 + '.jpg [(max-width: 640px)] | /cs/groups/public/documents/images/' + vx71_mobileImg_p5 + '.jpg [(max-width: 970px)] | /cs/groups/public/documents/images/' + vx71_desktopImg_p5 + '.jpg" style="background-image: url(&quot;https://www.vodafone.co.uk/cs/groups/public/documents/images/' + vx71_desktopImg_p5 + '.jpg&quot;);"><picture style="display: none;"><source data-srcset="/cs/groups/public/documents/images/' + vx71_mobileImg_p5 + '.jpg" media="(max-width: 640px)" srcset="/cs/groups/public/documents/images/' + vx71_mobileImg_p5 + '.jpg"><source data-srcset="/cs/groups/public/documents/images/' + vx71_mobileImg_p5 + '.jpg" media="(max-width: 970px)" srcset="/cs/groups/public/documents/images/' + vx71_mobileImg_p5 + '.jpg"><source data-srcset="/cs/groups/public/documents/images/' + vx71_desktopImg_p5 + '.jpg" srcset="/cs/groups/public/documents/images/' + vx71_desktopImg_p5 + '.jpg"><img alt="" class=" lazyloaded" sec_uuid_js:web.vodafone.co.uk="0306f658ee02"></picture></div>'
            // } else if (screen.width < 880) {
            //     document.querySelectorAll('.grid__item.promo-card__item')[4].querySelector('a>div:nth-child(2)').outerHTML = '<div class="background__image promo-card__background lazyloaded" data-bgset="/cs/groups/public/documents/images/' + vx71_mobileImg_p5 + '.jpg [(max-width: 640px)] | /cs/groups/public/documents/images/' + vx71_mobileImg_p5 + '.jpg [(max-width: 970px)] | /cs/groups/public/documents/images/' + vx71_desktopImg_p5 + '.jpg" style="background-image: url(&quot;https://www.vodafone.co.uk/cs/groups/public/documents/images/' + vx71_mobileImg_p5 + '.jpg&quot;);"><picture style="display: none;"><source data-srcset="/cs/groups/public/documents/images/' + vx71_mobileImg_p5 + '.jpg" media="(max-width: 640px)" srcset="/cs/groups/public/documents/images/' + vx71_mobileImg_p5 + '.jpg"><source data-srcset="/cs/groups/public/documents/images/' + vx71_mobileImg_p5 + '.jpg" media="(max-width: 970px)" srcset="/cs/groups/public/documents/images/' + vx71_mobileImg_p5 + '.jpg"><source data-srcset="/cs/groups/public/documents/images/' + vx71_desktopImg_p5 + '.jpg" srcset="/cs/groups/public/documents/images/' + vx71_desktopImg_p5 + '.jpg"><img alt="" class=" lazyloaded" sec_uuid_js:web.vodafone.co.uk="0306f658ee02"></picture></div>'
            // }

            
            var vx71_desktopImg_p5 = 'https://images.vodafone.co.uk/gbnnsauqav4t/3ID39LbCRUiFf0wZHsdFmD/c838f685182e16b2790ef2829e265515/DT-SIMO-P2Tile-14June.jpg'
            var vx71_mobileImg_p5 = 'https://images.vodafone.co.uk/gbnnsauqav4t/2dVlTZsUyVXJ0tWq5CaN7a/8bc9253c14cabc9b40aa134710abb26c/MB-SIMO-P2Tile-14June.jpg'

            if (screen.width > 880) {
                document.querySelectorAll('.grid__item.promo-card__item')[4].querySelector('a>div:nth-child(2)').outerHTML = '<div class="background__image promo-card__background lazyloaded" style="background-image: url(&quot;'+ vx71_desktopImg_p5 +'&quot;);"><picture style="display: none;"><img alt="" class=" lazyloaded" sec_uuid_js:web.vodafone.co.uk="0306f658ee02"></picture></div>'
            } else if (screen.width < 880) {
                document.querySelectorAll('.grid__item.promo-card__item')[4].querySelector('a>div:nth-child(2)').outerHTML = '<div class="background__image promo-card__background lazyloaded" style="background-image: url(&quot;'+ vx71_mobileImg_p5 +'&quot;);"><picture style="display: none;"></picture></div>'
            }
            

            //Header 
            document.querySelectorAll('.grid__item.promo-card__item')[4].querySelector('div>div>h3').innerText = 'Get 100GB data for £10 a month*.'
            //Sub-Header
            document.querySelectorAll('.grid__item.promo-card__item')[4].querySelector('div>div>p').innerText = 'On an additional SIM only plan, perfect for keeping a loved one connected. Increases by £1.80 each April.'
            //CTA text
            document.querySelectorAll('.grid__item.promo-card__item')[4].querySelector('div>div:nth-child(2)>div').innerText = 'Log in to see offer'
            //CTA link 
            document.querySelectorAll('.grid__item.promo-card__item')[4].querySelector('a').setAttribute('href', 'https://www.vodafone.co.uk/web-shop/login?successReturnUrl=%252Fmobile%252Fbest-sim-only-deals%253FplanId%253D120753%2526journeyType%253Dsecondline?icmp=CBU_home_youmightlike_p5_existing_Red100GB_02/07/2024')
            ///P5 CHANGES -- END///

            // ///P6 CHANGES///
            // //image changes 
            // //***this will only work if img url is /cs/groups/public/documents/images/ if the img URL doesn't match this, use redacted version
            // //***if using 'redacted version' comment out below first
            // //mobile img
            // var vx71_mobileImg_p6 = 'vfcon128699'
            // //desktop img
            // var vx71_desktopImg_p6 = 'vfcon128698'
            // //set HTML
            // if (screen.width > 880) {
            //     document.querySelectorAll('.grid__item.promo-card__item')[5].querySelector('a>div:nth-child(2)').outerHTML = '<div class="background__image promo-card__background lazyloaded" data-bgset="/cs/groups/public/documents/images/' + vx71_mobileImg_p6 + '.jpg [(max-width: 640px)] | /cs/groups/public/documents/images/' + vx71_mobileImg_p6 + '.jpg [(max-width: 970px)] | /cs/groups/public/documents/images/' + vx71_desktopImg_p6 + '.jpg" style="background-image: url(&quot;https://www.vodafone.co.uk/cs/groups/public/documents/images/' + vx71_desktopImg_p6 + '.jpg&quot;);"><picture style="display: none;"><source data-srcset="/cs/groups/public/documents/images/' + vx71_mobileImg_p6 + '.jpg" media="(max-width: 640px)" srcset="/cs/groups/public/documents/images/' + vx71_mobileImg_p6 + '.jpg"><source data-srcset="/cs/groups/public/documents/images/' + vx71_mobileImg_p6 + '.jpg" media="(max-width: 970px)" srcset="/cs/groups/public/documents/images/' + vx71_mobileImg_p6 + '.jpg"><source data-srcset="/cs/groups/public/documents/images/' + vx71_desktopImg_p6 + '.jpg" srcset="/cs/groups/public/documents/images/' + vx71_desktopImg_p6 + '.jpg"><img alt="" class=" lazyloaded" sec_uuid_js:web.vodafone.co.uk="0306f658ee02"></picture></div>'
            // } else if (screen.width < 880) {
            //     document.querySelectorAll('.grid__item.promo-card__item')[5].querySelector('a>div:nth-child(2)').outerHTML = '<div class="background__image promo-card__background lazyloaded" data-bgset="/cs/groups/public/documents/images/' + vx71_mobileImg_p6 + '.jpg [(max-width: 640px)] | /cs/groups/public/documents/images/' + vx71_mobileImg_p6 + '.jpg [(max-width: 970px)] | /cs/groups/public/documents/images/' + vx71_desktopImg_p6 + '.jpg" style="background-image: url(&quot;https://www.vodafone.co.uk/cs/groups/public/documents/images/' + vx71_mobileImg_p6 + '.jpg&quot;);"><picture style="display: none;"><source data-srcset="/cs/groups/public/documents/images/' + vx71_mobileImg_p6 + '.jpg" media="(max-width: 640px)" srcset="/cs/groups/public/documents/images/' + vx71_mobileImg_p6 + '.jpg"><source data-srcset="/cs/groups/public/documents/images/' + vx71_mobileImg_p6 + '.jpg" media="(max-width: 970px)" srcset="/cs/groups/public/documents/images/' + vx71_mobileImg_p6 + '.jpg"><source data-srcset="/cs/groups/public/documents/images/' + vx71_desktopImg_p6 + '.jpg" srcset="/cs/groups/public/documents/images/' + vx71_desktopImg_p6 + '.jpg"><img alt="" class=" lazyloaded" sec_uuid_js:web.vodafone.co.uk="0306f658ee02"></picture></div>'
            // }

            // /*
            // var vx71_desktopImg_p6 = 'https://images.vodafone.co.uk/gbnnsauqav4t/46fJOMoa9jnMHx4nuDIGQW/b1b032c06f0d3db729d711e9b80eafdb/DT-P3-Web-Tile-TNN-blank.png'
            // var vx71_mobileImg_p6 = 'https://images.vodafone.co.uk/gbnnsauqav4t/5NZCsITNPKyvYm9CVzYU3W/6d1b8e5fca65e145bc3019a62bfa0266/MB-P3-Web-Tile-TNN-blank.png'

            // if (screen.width > 880) {
            //     document.querySelectorAll('.grid__item.promo-card__item')[5].querySelector('a>div:nth-child(2)').outerHTML = '<div class="background__image promo-card__background lazyloaded" style="background-image: url(&quot;'+ vx71_desktopImg_p6 +'&quot;);"><picture style="display: none;"><img alt="" class=" lazyloaded" sec_uuid_js:web.vodafone.co.uk="0306f658ee02"></picture></div>'
            // } else if (screen.width < 880) {
            //     document.querySelectorAll('.grid__item.promo-card__item')[5].querySelector('a>div:nth-child(2)').outerHTML = '<div class="background__image promo-card__background lazyloaded" style="background-image: url(&quot;'+ vx71_mobileImg_p6 +'&quot;);"><picture style="display: none;"></picture></div>'
            // }
            // */

            // //Header 
            // document.querySelectorAll('.grid__item.promo-card__item')[5].querySelector('div>div>h3').innerText = 'Samsung Galaxy S24 Ultra – save £704'
            // //Sub-Header
            // document.querySelectorAll('.grid__item.promo-card__item')[5].querySelector('div>div>p').innerText = 'When you claim £200 cashback*. Save £432 on Airtime Plan £72 on your phone. Ends 25 June.'
            // //CTA text
            // document.querySelectorAll('.grid__item.promo-card__item')[5].querySelector('div>div:nth-child(2)>div').innerText = 'Buy Samsung Galaxy S24 Ultra'
            // //CTA link 
            // document.querySelectorAll('.grid__item.promo-card__item')[5].querySelector('a').setAttribute('href', 'https://www.vodafone.co.uk/mobile/phones/pay-monthly-contracts/samsung/galaxy-s24-ultra-5g?icmp=CBU_Home_p6_SamsungS24Ultra_iostest_12/06/2024')
            // ///P6 CHANGES -- END///            
        }
    }
}