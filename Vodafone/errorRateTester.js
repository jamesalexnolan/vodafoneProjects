try {
    //CODE HERE
} catch (err) {
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

    //TRACKING
    if (typeof utag !== 'undefined' && typeof utag.vfuk_data !== 'undefined') {
        utag.vfuk_data.event_action = "cro_test_error";
        utag.vfuk_data.event_label = "cro_test_error:vtxxx";
        utag.vfuk_data.error_message = err;
        utag.vfuk_data.error_code = CRO_errorCode;
        utag.link(utag.vfuk_data);
    }
}