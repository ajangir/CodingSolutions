// Fri Jan 02 1970 05:30:00 GMT+0530 (IST)
// Initialize to epoch time
var last_called_timestamp = new Date(86400000);
var debug = false;

// variable to track what kind of blur event is fired
var _isWindowBlurEvent = false;
var _safeTarget = false;
var safeTargetClasses = [''];
var disable_tab_switch = window.disable_tab_switch || false;

function checkForLostFocus() {
    // All these checking because blur event was called twice in firefox
    window.onblur = function(e) {
        _isWindowBlurEvent = true;
    };

    window.onfocus = function(e) {
        _isWindowBlurEvent = false;
    };

    window.onblur = function(e) {
        if((! _isWindowBlurEvent) && (! _safeTarget) && (!event_admin_preview)) //if the event is Element.onBlur
        {
            // Do not call hasBeenWarned() if it was called within last 5 seconds
            var curr_timestamp = new Date($.now());
            var diff = Math.round((curr_timestamp - last_called_timestamp) / 1000);
            if(diff > 5) {
                logTabActivity("blurred").always(function(){
                    // Show warning to candidate only if proctoring setting is enabled
                    if (disable_tab_switch) {
                        hasBeenWarned();
                    }
                });
                last_called_timestamp = curr_timestamp;
            }
        }
    };

    window.addEventListener('beforeunload', function() {
        // This function makes sure that the blur event is not called when the test page is refreshed.
        // Fixes the bug: refresh getting counted as tab out
        _isWindowBlurEvent = true;
    });
}

function logTabActivity(activity) {
    var url = $("#activity-log-url").text();
    var xhr = $.ajax({
        url: url,
        type: "POST",
        data: {action: activity},
    });
    return xhr;
}

function disableTabSwitch() {

    // Let the iframe loading finish well
    setTimeout(function(){
        checkForLostFocus();
    }, 3000);

}

function makeIframesSafeTargets() {
    var iframes = $('iframe');
    // Note: frontend problem's editor is also an iframe
    if(iframes.length>0) {
        iframes.iframeTracker({
            blurCallback: function () {
                _safeTarget = true;
                if (debug)
                    console.log("Third party to track iframe click is ON");
            },
            overCallback: function () {
                _safeTarget = true;
                if (debug)
                    console.log("Third party to track iframe mouse over");
            },
            outCallback: function () {
                _safeTarget = false;
                if (debug)
                    console.log("Third party to track iframe mouse out");
            }
        });
    }
}

setInterval(makeIframesSafeTargets, 1000);

$('body').live('click', function(e) {
    makeIframesSafeTargets();
    if (safeTargetClasses.indexOf($(e.srcElement).attr('class')) > -1) {
        _safeTarget = true;
        if(debug)
            console.log("Safe target click detected");
    } else {
        _safeTarget = false;
        if(debug)
            console.log("Clicked target is out of current window");
    }
});

function hasBeenWarned() {
    $this = $("#get-user-logout-data")
    var url = $this.attr('ajax');
    var event_id = $this.attr('event_id');
    var user_id = $this.attr('user_id');
    $.ajax({
        url: url,
        data: {
            'event_id': event_id,
            'user_id': user_id,
        },
        type: 'POST',
        dataType: 'json',
        success: function(response) {
            if(response['status'] == AJAX_OK) {
                if(response['perform_logout']) {
                    if(response['is_superuser']) {
                        alert(PROCTOR_ALERT_1);
                    } else {
                        logReasonForLogout();
                        if ($("#end-test-form").length) {
                            // only incase of assessments
                            logout();
                        } else {
                            $('#end-test-click').get(0).click();
                        }
                    }
                } else {
                    alert(PROCTOR_ALERT_2);
                }
            }
        },
        error: function(jqXHR, exception) {
            window.global.checkAndShowServerError(jqXHR.status);
        }
    });
    return false;
}

function logout() {
    var $div = $("#end-test-form");
    if (!$div.length) {
        window.location.reload();
    }

    var $form = $div.find('form');
    var url = $form.attr('ajax');
    $.ajax({
        url: url,
        type: "POST",
        data: {
            csrfmiddlewaretoken: $form.find("input[name=csrfmiddlewaretoken]").val(),
        },
        success: function() {
            // fallback
            window.location.reload();
        },
        error: function() {
            typeof addAlert !== "undefined" && addAlert(SOMETHING_WENT_WRONG_ERROR_TEXT);
        }
    })
}

function logReasonForLogout() {
    $this = $('#logout-reason-url');
    var logout_reason_url = $this.attr('ajax');
    var event_id = $this.attr('event_id');
    var user_id = $this.attr('user_id');
    var page_url = $(location).attr('href');


    $.ajax({
        url: logout_reason_url,
        data: {
            'page_url': page_url,
            'event_id': event_id,
            'user_id': user_id,
        },
        type: 'POST',
        dataType: 'json'
    });
}

function disableCopyPaste() {
    $('body').addClass("unselectable");
    $('.question-container, .problem-description, .problem-statement').on('select copy paste cut', function(e) {
        e.preventDefault();
    });
}
