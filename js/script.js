// ========================================
// MOBILE NAVIGATION
// ========================================

const menuIcon = document.getElementById("menuIcon");
const navLinks = document.getElementById("navLinks");

menuIcon.addEventListener("click", () => {

    navLinks.classList.toggle("active");

});


// Close mobile menu after clicking a link

const links = document.querySelectorAll(".nav-links a");

links.forEach(link => {

    link.addEventListener("click", () => {

        navLinks.classList.remove("active");

    });

});


// ========================================
// BOOKING FORM
// ========================================

const bookingForm = document.getElementById("bookingForm");

bookingForm.addEventListener("submit", function(event) {

    event.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;
    const service = document.getElementById("service").value;
    const date = document.getElementById("date").value;
    const time = document.getElementById("time").value;


    // Create appointment object

    const appointment = {

        name: name,
        email: email,
        phone: phone,
        service: service,
        date: date,
        time: time

    };


    // Save appointment in LocalStorage

    localStorage.setItem(
        "salonAppointment",
        JSON.stringify(appointment)
    );


    alert(
        `Thank you ${name}! Your ${service} appointment has been booked for ${date} at ${time}.`
    );


    bookingForm.reset();

});