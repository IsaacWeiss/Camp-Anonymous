"use strict";

function submitContactForm() {
    let email = document.getElementById("email").value;
    alert("Your comment has been submitted. A response will never be sent to " + email + ".");
}

function submitPaymentForm() {
    alert("Card declined. Please re-enter your information, or try a different card.\n\nThank you for your social security number, though.");
}