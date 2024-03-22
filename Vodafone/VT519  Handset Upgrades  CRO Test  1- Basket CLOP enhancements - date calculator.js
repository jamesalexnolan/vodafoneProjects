////POLLING FUNCTION////
//polling function config
var vt519_pxFuncFired = 0;
var vt519_pxInterval = setInterval(vt519_pxPollFunc, 100);

//polling function
function vt519_pxPollFunc() {
    vt519_pxFuncFired += 1;

    if (vt519_pxFuncFired >= 20) {
        //try 20 times, if not found clear px func
        clearInterval(vt519_pxInterval);
    }

    //target element 
    var vt519_target_element = document.querySelectorAll('[class*=Paragraphstyle__Paragraph-sc]')[6]

    if (vt519_target_element) {
        //clear polling when found
        clearInterval(vt519_pxInterval);
        //Apply changes
        vt519_end_month_cal()
    }
}

function vt519_end_month_cal() {
    //todays date 
    const vt519_date = new Date();

    let vt519_day = vt519_date.getDate();
    let vt519_month = vt519_date.getMonth() + 1;
    let vt519_year = vt519_date.getFullYear();

    //return date on website 
    let vt159_endDate = document.querySelectorAll('[class*=Paragraphstyle__Paragraph-sc]')[6].innerText.split(" ")
    //end month
    var vt159_endDate_month = vt159_endDate[3]
    //end year 
    var vt159_endDate_year = vt159_endDate[4]
    //date array
    var vt519_date_array = ["Jan", "Feb", "Mar", "Apr", "May", "June", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
    //match date to array
    let vt519_month_index = vt519_date_array.findIndex(x => x == vt159_endDate_month)
    //month numeric value
    let vt519_month_numeric = vt519_month_index + 1
    //get difference between months
    if (vt159_endDate_year == vt519_year && vt519_month < vt519_month_numeric) {
        var vt519_monh_calc_element = vt519_month_numeric - vt519_month
    } else if (vt159_endDate_year === '2025') {
        var vt519_monh_calc_element = vt519_month_numeric + 12 - vt519_month - 1
    } else if (vt159_endDate_year === '2026') {
        var vt519_monh_calc_element = vt519_month_numeric + 24 - vt519_month - 1
    }

    //change element inner text
    document.querySelectorAll('[class*=Paragraphstyle__Paragraph-sc]')[6].innerHTML = 'Contract Ends in ' + vt519_monh_calc_element + ' Months'
}