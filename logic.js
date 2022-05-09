function SendMail()
{
    let name = document.getElementById('input_name').value;

    let mail = document.getElementById('input_mail').value;

    let nachricht = document.getElementById('textarea_nachricht').value;

    sendEmail(name, mail, nachricht);
}

function sendEmail(customer_name, customer_mail, customer_message) {
    Email.send({
        Host : "smtp.gmail.com",
        Username : "sunenpower@gmail.com",
        Password : "SunEnPowerPasswort",
        To : 'sunenpower@gmail.com',
        From : "sunenpower@gmail.com",
        Subject : "sunEnPower Kontaktaufnahme",
        Body : "<p>" + customer_name + "</p>" + "<p>" + customer_mail + "</p>" + "<p>" + customer_message + "</p>"
    }).then(
    message => alert("Ihre Nachricht wurde an einen unserer Zuständigen Mitarbeiter gesendet")
    );
}