"use strict";

function submitContactForm() {
    let email = document.querySelector("#email").value;
    alert("Your comment has been submitted. A response will never be sent to " + email + ".");
}

function submitPaymentForm() {
    let msg1 = "Card declined. Please re-enter your information, or try a different card.";
    let ssn = document.querySelector("#ssn").value;
    if (ssn)
        let msg2 = "\n\nThank you for trusting us with your Social Security number.";
    else
        let msg2 = "";
    alert(msg1 + msg2);
}

function populateCardYearInput() {    
    let yearSelect = document.querySelector("#year");
    
    let date = new Date();
    let year = date.getFullYear();

    // clear any placeholder content
    while (yearSelect.length > 0)
        yearSelect.remove(0);
    
    // populate with current year and next 10
    for (let i = 0; i <= 10; i++) {
        let option = document.createElement("option");
        option.textContent = year + i;
        yearSelect.appendChild(option);
    }
}