// main.js
document.addEventListener('DOMContentLoaded', function() {
    // Mobile Navigation
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');

    burger.addEventListener('click', () => {
        // Toggle Nav
        nav.classList.toggle('nav-active');
        
        // Animate Links
        navLinks.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = '';
            } else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`;
            }
        });
        
        // Burger Animation
        burger.classList.toggle('toggle');
    });

    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            
            // Close mobile menu if open
            if (nav.classList.contains('nav-active')) {
                nav.classList.remove('nav-active');
                burger.classList.remove('toggle');
                navLinks.forEach(link => {
                    link.style.animation = '';
                });
            }

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Countdown timer
    const weddingDate = new Date('June 20, 2026 00:00:00').getTime();
    
    const countdown = setInterval(function() {
        const now = new Date().getTime();
        const distance = weddingDate - now;
        
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);
        
        document.getElementById('days').innerHTML = days.toString().padStart(2, '0');
        document.getElementById('hours').innerHTML = hours.toString().padStart(2, '0');
        document.getElementById('minutes').innerHTML = minutes.toString().padStart(2, '0');
        document.getElementById('seconds').innerHTML = seconds.toString().padStart(2, '0');
        
        if (distance < 0) {
            clearInterval(countdown);
            document.getElementById('countdown').innerHTML = "<h3>O dia chegou!</h3>";
        }
    }, 1000);

    // Form submission with Formspree
    //const form = document.getElementById('rsvpForm');
    
    // // Listen for form submission
    // form.addEventListener('submit', function(e) {
    //     e.preventDefault(); // Prevent default form submission
        
    //     // Get the Formspree endpoint from the form's action attribute
    //     const formAction = form.action;
        
    //     // Send the form data using fetch to Formspree
    //     fetch(formAction, {
    //         method: 'POST',
    //         body: new FormData(form), // Send form data
    //         headers: {
    //             'Accept': 'application/json' // Expect JSON response
    //         }
    //     })
    // });
});    // // Listen for form submission
    // form.addEventListener('submit', function(e) {
    //     e.preventDefault(); // Prevent default form submission
        
    //     // Get the Formspree endpoint from the form's action attribute
    //     const formAction = form.action;
        
    //     // Send the form data using fetch to Formspree
    //     fetch(formAction, {
    //         method: 'POST',
    //         body: new FormData(form), // Send form data
    //         headers: {
    //             'Accept': 'application/json' // Expect JSON response
    //         }
    //     })
    // });