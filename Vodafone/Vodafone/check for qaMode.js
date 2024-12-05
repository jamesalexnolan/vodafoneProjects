/*
---
QAMODE CHECKER
---
*/
window.onload = (event) => {
    //check for qaMode once full page has loaded
    if (utag.data["cp.at_qa_mode"]) {
        //check for meta data 
        const ttMETA = window.ttMETA;
        if (window.ttMETA[0].CampaignName != '') {
            //add banner to top of page
            function waitForTTMetaData() {
                if (window.ttMETA[0].CampaignName.length < 5) {
                    window.setTimeout(waitForTTMetaData, 100);
                } else {
                    const campaignName = ttMETA[0].CampaignName;
                    var styleElement = document.createElement('style');
                    styleElement.textContent += `body:before { content: "${campaignName}";
                display: block;
                line-height: 70px;
                text-align: center;
                background: #0036F4;
                color: white;
                font-size: larger;
                font-weight: 800;}`;
                    document.head.appendChild(styleElement);
                }
            }
            waitForTTMetaData();
        }
    }
}
/*
---
QAMODE CHECKER
---
*/