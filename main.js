var contactButton = document.getElementById("contactButton");
var modal = document.getElementById("contactModal");
var closeBtn = document.getElementsByClassName("close")[0];

contactButton.addEventListener("click", function() {
    modal.style.display = "block";
});

closeBtn.addEventListener("click", function() {
    modal.style.display = "none";
});

window.addEventListener("click", function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
});

function sendEmail() {
    var fullName = document.getElementById("fullName").value;
    var message = document.getElementById("message").value;

    var subject = "New Inquiry from " + fullName;
    var body = "Full Name: " + fullName + "\n\nMessage: " + message;

    var mailtoLink = "mailto:example@gmail.com?subject=" + encodeURIComponent(subject) + "&body=" + encodeURIComponent(body);

    window.location.href = mailtoLink;
}
