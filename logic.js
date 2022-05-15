function SendMail()
{
    let name = document.getElementById('input_name').value;

    let email = document.getElementById('input_mail').value;

    let nachricht = document.getElementById('textarea_nachricht').value;

    var formdata = new FormData();
    formdata.append("name", name);
    formdata.append("email", email);
    formdata.append("nachricht", nachricht);

    var xhttp;
    xhttp = new XMLHttpRequest();

    var alertmsg = ""

    xhttp.open("POST", "email.php", true);
    xhttp.send(formdata);
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
          alert("Ihre Anfrage wurde erfolgreich versendet");
        }
    }

    document.getElementById("textarea_nachricht").value = "";
    document.getElementById('input_mail').value = "";
    document.getElementById('input_name').value  = "";
}

//Funktion um die Nav-Leiste beim Scrollen am oberen Ende zu fixieren
window.onscroll = function() {stickyHeader()};

var header = document.getElementById("header");

var sticky = header.offsetTop;

function stickyHeader() {
    if (window.pageYOffset >= sticky) {
      header.classList.add("sticky")
    } else {
      header.classList.remove("sticky");
    }
}
