function callPhoneNumber(phoneNumber) {
    window.location.href = 'tel:' + phoneNumber;
}

function sendEmail(email) {
    window.location.href = 'mailto:' + email;
}

function openWebsite() {
    window.open("https://www.foxlink.ca", "_blank");
}

document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("download-contact-btn").addEventListener("click", function() {
        var contactData = [
            "BEGIN:VCARD",
            "VERSION:3.0",
            "N:Randhawa;Harman;;;",
            "FN:Harman Randhawa",
            "ORG:FoxLink Communications Ltd.;",
            "TEL;TYPE=CELL:(647) 965-4321",
            "EMAIL;TYPE=WORK:harman@foxlink.ca",
            "URL;TYPE=WORK:https://www.foxlink.ca",
            "END:VCARD"
        ].join("\n");

        var blob = new Blob([contactData], { type: "text/vcard" });
        var url = URL.createObjectURL(blob);

        var link = document.createElement("a");
        link.setAttribute("href", url);
        link.setAttribute("download", "contact.vcf");
        link.style.display = "none";

        document.body.appendChild(link);
        link.click();

        document.body.removeChild(link);
        URL.revokeObjectURL(url);
    });

    var phoneDiv = document.querySelector(".contact-item.phone");
    phoneDiv.addEventListener("click", function() {
        var phoneNumber = document.querySelector(".contact-item.phone p").textContent;
        callPhoneNumber(phoneNumber);
    });

    var emailDiv = document.querySelector(".contact-item.email");
    emailDiv.addEventListener("click", function() {
        var email = document.querySelector(".contact-item.email p a").textContent;
        sendEmail(email);
    });

    var websiteDiv = document.querySelector(".contact-item.website");
    websiteDiv.addEventListener("click", openWebsite);
});
