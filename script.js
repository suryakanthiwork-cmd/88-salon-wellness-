/* ==========================================
   88 SALON & WELLNESS
   Premium Website Script
========================================== */

// Mobile Navigation

const menuBtn = document.getElementById("menuBtn");
const nav = document.getElementById("nav");

menuBtn.addEventListener("click", () => {
    nav.classList.toggle("open");
});

// Sticky Header

const header = document.getElementById("header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 40) {
        header.classList.add("compact");
    } else {
        header.classList.remove("compact");
    }

});

// Reveal Animation

const revealElements = document.querySelectorAll(".reveal");

const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {
            entry.target.classList.add("visible");
        }

    });

}, {
    threshold: 0.15
});

revealElements.forEach(item => observer.observe(item));

// Counter Animation

const counters = document.querySelectorAll(".counter");

counters.forEach(counter => {

    const target = Number(counter.dataset.target);

    let count = 0;

    const increment = Math.ceil(target / 100);

    const timer = setInterval(() => {

        count += increment;

        if (count >= target) {

            counter.innerText = target;

            clearInterval(timer);

        } else {

            counter.innerText = count;

        }

    }, 20);

});

// Testimonial Slider

const testimonials = document.querySelectorAll(".testimonial");

let testimonialIndex = 0;

setInterval(() => {

    testimonials[testimonialIndex].classList.remove("active");

    testimonialIndex++;

    if (testimonialIndex >= testimonials.length) {

        testimonialIndex = 0;

    }

    testimonials[testimonialIndex].classList.add("active");

}, 4000);

// WhatsApp Links

const whatsappNumber = "919742288883";

const heroWhatsapp =
`https://wa.me/${whatsappNumber}?text=` +
encodeURIComponent(
"Hello 88 Salon & Wellness, I would like to book an appointment."
);
const waCTA = document.getElementById("waCTA");
if (waCTA) waCTA.href = heroWhatsapp;

const waHero = document.getElementById("waHero");
if (waHero) waHero.href = heroWhatsapp;

const waFloat = document.getElementById("waFloat");
if (waFloat) waFloat.href = heroWhatsapp;

const waContact = document.getElementById("waContact");
if (waContact) waContact.href = heroWhatsapp;
/* ==========================================
   BOOKING FORM
========================================== */

const bookingForm = document.getElementById("bookingForm");

if (bookingForm) {

    bookingForm.addEventListener("submit", function (e) {

        e.preventDefault();

        const name = document.getElementById("name").value.trim();

        const phone = document.getElementById("phone").value.trim();

        const service = document.getElementById("service").value;

        const date = document.getElementById("date")
            ? document.getElementById("date").value
            : "";

        const message = document.getElementById("message").value.trim();

        const text =
`Hello 88 Salon & Wellness,

I'd like to book an appointment.

Name: ${name}

Phone: ${phone}

Service: ${service}

Preferred Date: ${date}

Message: ${message}`;

        window.open(
            `https://wa.me/919742288883?text=${encodeURIComponent(text)}`,
            "_blank"
        );

    });

}

/* ==========================================
   SERVICE DROPDOWN
========================================== */

const services = [

"Bridal Makeup",
"Airbrush Makeup",
"Eye Makeup",
"Hair Styling",
"Hair Cut",
"Hair Colouring",
"Hair Straightening",
"Hair Spa",
"Keratin Treatment",
"Hair Extensions",
"Facial",
"Skin Care",
"Body Polishing",
"Body Scrub",
"Body Wrap",
"Massage Therapy",
"Couple Spa",
"Jacuzzi",
"Hydrotherapy",
"Infrared Sauna",
"Pedicure",
"Manicure",
"Nail Art",
"Nail Extensions",
"Gel Manicure",
"Eyebrow Threading",
"Waxing",
"Brazilian Waxing",
"Laser Hair Removal"

];

const serviceSelect = document.getElementById("service");

if (serviceSelect) {

    services.forEach(service => {

        const option = document.createElement("option");

        option.value = service;

        option.textContent = service;

        serviceSelect.appendChild(option);

    });

}

/* ==========================================
   ACTIVE NAVIGATION
========================================== */

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const top = section.offsetTop - 150;

        const height = section.offsetHeight;

        if (pageYOffset >= top && pageYOffset < top + height) {
            current = section.getAttribute("id");
        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {
            link.classList.add("active");
        }

    });

});

/* ==========================================
   SMOOTH SCROLL
========================================== */

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function (e) {

        const target = document.querySelector(this.getAttribute("href"));

        if (target) {

            e.preventDefault();

            target.scrollIntoView({

                behavior: "smooth"

            });

            nav.classList.remove("open");

        }

    });

});

/* ==========================================
   PORTFOLIO HOVER
========================================== */

document.querySelectorAll(".portfolio-grid img").forEach(image => {

    image.addEventListener("mouseenter", () => {

        image.style.transform = "scale(1.05)";

    });

    image.addEventListener("mouseleave", () => {

        image.style.transform = "scale(1)";

    });

});

/* ==========================================
   COPYRIGHT YEAR
========================================== */

const copyright = document.querySelector(".copyright");

if (copyright) {

    copyright.innerHTML =
        `© ${new Date().getFullYear()} 88 Salon & Wellness. All Rights Reserved.`;

}

/* ==========================================
   END
========================================== */

console.log("88 Salon & Wellness Website Loaded Successfully");