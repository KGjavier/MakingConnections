var user = document.querySelector("#user")
var numberrequest = document.querySelector("#numberrequest")
var numberconnect = document.querySelector("#numberconnect")


function switchname() {
    user.innerText = "Jose Rizal";
}

function accept(id) {
    var element = document.querySelector(id)
    element.remove();
    numberrequest.innerText--;
    numberconnect.innerText++;
}

function ignore(id) {
    var element = document.querySelector(id)
    element.remove();
    numberrequest.innerText--;
}





