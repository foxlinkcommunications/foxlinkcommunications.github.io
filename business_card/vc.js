document.getElementById("download-contact-btn").addEventListener("click", function() {
    var contactData = [
        "BEGIN:VCARD",
        "VERSION:3.0",
        "N:Randhawa;Harman;;;",
        "FN:Harman Randhawa",
        "ORG:FoxLink Communications Ltd.;",
        "TEL;TYPE=CELL:(647)965-4321",
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
