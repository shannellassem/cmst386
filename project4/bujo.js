function updateDateTime() {
    const now = new Date();
    const dateTimeString = now.toLocaleString(); 
    document.getElementById("dateTime").textContent = `Current date and time: ${dateTimeString}`;
}

updateDateTime();
setInterval(updateDateTime, 1000);

document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("myForm");

    form.addEventListener("submit", function(event) {
        let isValid = true;
        let messages = [];

    const name = form.elements["name"].value.trim();
    const email = form.elements["email"].value.trim();


    if (name === "") {
        isValid = false;
        messages.push("Name is required.");
    }


    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (email === "" || !emailPattern.test(email)) {
        isValid = false;
        messages.push("Please enter a valid email address.");
    }

    if (!isValid) {
        event.preventDefault();
        alert(messages.join("\n"));
    }
    });
});