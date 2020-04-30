"use strict";

function submitContactForm() {
    let email = document.querySelector("#email").value;
    alert("Your comment has been submitted. A response will never be sent to " + email + ".");
}

function submitPaymentForm() {
    let msg1 = "Card declined. Please re-enter your information, or try a different card.";
    let msg2;
    let ssn = document.querySelector("#ssn").value;
    if (!ssn)
        msg2 = "It might help to fill out the Social Security number field.";
    else
        msg2 = "Thank you for trusting us with your Social Security number, though. It has been discarded, as we don't need it, but that was very brave of you.";
    alert(msg1 + "\n\n" + msg2);
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