//templates// 
//code wrap
try {
    //error count to prevent multiple hits// 
    var cro_err_fired = 0
    /* CODE BELOW */

} catch (err) {
    //err fired (count to prevent multiple hits firing)
    cro_err_fired += 1
    if (cro_err_fired === 1) {
        //TRACKING
        if (err instanceof ReferenceError || err instanceof DOMException) {
            if (err instanceof ReferenceError) {
                var CRO_errorCode = 1
            }
            if (err instanceof DOMException) {
                var CRO_errorCode = 2
            }
        } else {
            var CRO_errorCode = 3
        }

        if (typeof utag !== 'undefined' && typeof utag.vfuk_data !== 'undefined') {
            utag.vfuk_data.event_action = "cro_test_error";
            utag.vfuk_data.event_label = "cro_test_error:vtxxx";
            utag.vfuk_data.error_message = err;
            utag.vfuk_data.error_code = CRO_errorCode;
            utag.link(utag.vfuk_data);
        }
    }
}

//loop template
try {
    //error count for loop to prevent multiple hits// 
    var cro_err_fired_loop = 0
    /* LOOP BELOW */
    
} catch (err) {
    //disconnect loop on error 
    xxx_observer.disconnect()
    //err fired (count to prevent multiple hits firing)
    cro_err_fired_loop += 1
    //TRACKING
    if (cro_err_fired_loop === 1) {
        if (typeof utag !== 'undefined' && typeof utag.vfuk_data !== 'undefined') {
            utag.vfuk_data.event_action = "cro_test_error-loop";
            utag.vfuk_data.event_label = "cro_test_error:vtxxx_loop";
            utag.vfuk_data.error_message = err;
            utag.link(utag.vfuk_data);
        }
    }
}