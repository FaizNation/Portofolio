// project js

document.addEventListener("DOMContentLoaded", function () {
    const buttons = document.querySelectorAll(".bttn-skill button");
    const works = document.querySelectorAll(".work");

    buttons.forEach(button => {
        button.addEventListener("click", function () {
            // Remove active class from all buttons
            buttons.forEach(btn => btn.classList.remove("active"));

            // Add active class to clicked button
            this.classList.add("active");

            // Get category from button type attribute
            const filter = this.getAttribute("type").replace("bttn-", "");

            // Loop through all work items and filter
            works.forEach(work => {
                const category = work.querySelector(".category").textContent.toLowerCase().replace(" ", "");

                if (filter === "all" || category.includes(filter)) {
                    work.style.display = "block";
                } else {
                    work.style.display = "none";
                }
            });
        });
    });
});

jQuery(document).ready(function($) {
    "use strict";
    //  TESTIMONIALS CAROUSEL HOOK
    $('#customers-testimonials').owlCarousel({
        loop: true,
        center: true,
        items: 3,
        margin: 0,
        autoplay: true,
        dots:true,
        autoplayTimeout: 8500,
        smartSpeed: 450,
        responsive: {
          0: {
            items: 1
          },
          768: {
            items: 2
          },
          1170: {
            items: 3
          }
        }
    });
});