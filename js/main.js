document.addEventListener('DOMContentLoaded', function() {
    // --- Scroll Animations ---
    const animateOnScroll = function() {
        const elementsToAnimate = document.querySelectorAll('.fade-in, .slide-in-left, .slide-in-right');
        
        elementsToAnimate.forEach(element => {
            const elementTop = element.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            
            // Trigger animation when the element is 150px from the bottom of the viewport
            if (elementTop < windowHeight - 150) {
                element.classList.add('active');
            } else {
                // Optional: Remove 'active' class when element scrolls out of view upwards
                // This allows re-triggering animation if scrolled back up.
                // Consider if this behavior is desired for your design.
                // if (element.classList.contains('active') && elementTop > windowHeight) {
                //     element.classList.remove('active');
                // }
            }
        });

        // --- Skill Level Bar Animations (Skills page specific) ---
        // Only run this if we are on the skills.html page
        if (window.location.pathname.includes('skills.html')) {
            const skillLevels = document.querySelectorAll('.skill-level');
            skillLevels.forEach(level => {
                const levelTop = level.getBoundingClientRect().top;
                const windowHeight = window.innerHeight;

                if (levelTop < windowHeight - 150 && !level.classList.contains('animate')) {
                    level.classList.add('animate'); // Add a class to trigger CSS animation
                    const width = level.getAttribute('data-level');
                    // Set CSS custom property to control the width
                    level.style.setProperty('--skill-width', width); 
                }
            });
        }
    };
    
    // Initial check on load
    animateOnScroll();
    
    // Add event listener for scroll
    window.addEventListener('scroll', animateOnScroll);


    // --- Contact Form Submission ---
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault(); // Prevent default form submission

            // Get form values
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const message = document.getElementById('message').value;
            
            // --- IMPORTANT: This is where you'd send data to a backend server ---
            // For a real-world contact form, you'll need server-side code (e.g., Node.js, Python, PHP)
            // to process this data and send an email.
            // Example using fetch (requires a backend endpoint):
            /*
            fetch('/submit-contact-form', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ name, email, message }),
            })
            .then(response => response.json())
            .then(data => {
                if (data.success) {
                    alert('Thank you for your message! I will get back to you soon.');
                    contactForm.reset(); // Clear the form
                } else {
                    alert('Failed to send message: ' + (data.message || 'Unknown error.'));
                }
            })
            .catch((error) => {
                console.error('Error submitting form:', error);
                alert('There was an issue sending your message. Please try again later.');
            });
            */

            // For now, we'll just log to console and show an alert:
            console.log('Form submitted:', { name, email, message });
            alert('Thank you for your message! I will get back to you soon.');
            contactForm.reset(); // Clear the form
        });
    }

    // --- Resume Download Functionality (if applicable) ---
    const downloadResume = document.getElementById('downloadResume'); // Assuming a button with this ID on index.html or contact.html
    if (downloadResume) {
        downloadResume.addEventListener('click', function(e) {
            e.preventDefault(); // Prevent default link behavior if it's an anchor tag
            alert('Initiating resume download...');
            // In a real scenario, you'd set the href of a hidden link and programmatically click it,
            // or directly link to the PDF.
            // Example:
            // window.location.href = 'path/to/your/resume.pdf'; 
        });
    }
});