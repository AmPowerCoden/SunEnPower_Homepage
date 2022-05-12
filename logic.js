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

    xhttp.open("POST", "email.php", true);
    xhttp.send(formdata);

}

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
