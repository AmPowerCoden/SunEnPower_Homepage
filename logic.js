function writeMail(message){
    send_button.value = 'sending...';
    send_button.disabled = true;

    var request = new XMLHttpRequest();

    request.onreadystatechange = function() {
        if (request.readyState == 4 && request.status == 200) {
            js_onSuccess();
        } else
        if(request.readyState == 4) {
            js_onError(request.response);
        }

        var nachricht = document.querySelector("#js_send_mail [name='Nachricht']")
        var name = document.querySelector("#js_send_mail [name='Name']")
        var Mail = document.querySelector("#js_send_mail [name='Mail']")
    };
}

function js_onSuccess() {
    window.location = window.location.pathname + "?message=Email+Successfully+Sent%21&isError=0";
}

function js_onError(error) {
    window.location = window.location.pathname + "?message=Email+could+not+be+sent.&isError=1";
}

var send_button = document.getElementById("js_send");

send_button.onclick(writeMail);