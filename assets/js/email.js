function sendMail(contactForm) {
    emailjs.send("service_yzlka1p","audrey_contact", {
        "from_name": contactForm.name.value,
        "from_email": contactForm.email.value,
        "project_message": contactForm.message.value
    })
    .then(
        function(response) {
            console.log("SUCCESS", response);
        },
        function(error) {
            console.log("FAILED", error);
        }
    );
    return false;
}
