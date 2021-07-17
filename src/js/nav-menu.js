

function infoPopupButton() {
    const headernavpopup = document.getElementById("infoPopup");
    // const headernavpopup = document.querySelector("#infoPopup"); id
    // const headernavpopup = document.querySelector(".infoPopup"); class
    headernavpopup.classList.toggle("show");
}

function modalPopupButton() {
    var modal = document.getElementById("meetBakerModal");
    var btn = document.getElementById("meetBakerLink");
    var span = document.getElementsByClassName("close")[0];

    btn.onclick = function () {
        modal.style.display = "block";
    }

    span.onclick = function () {
        modal.style.display = "none";
    }

    window.onclick = function (event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }
}