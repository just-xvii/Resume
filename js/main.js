document.addEventListener('DOMContentLoaded', function() {
    // Scroll Animations
    const animateOnScroll = function() {
        // Select elements to animate
        const elementsToAnimate = document.querySelectorAll('.fade-in, .slide-in-left, .slide-in-right');
        
        elementsToAnimate.forEach(element => {
            const elementTop = element.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            
            // Trigger animation when the element is 150px from the bottom of the viewport
            if (elementTop < windowHeight - 150) {
                element.classList.add('active');
            }
        });

        // Skill Level Bar Animations (Skills page specific)
        // Only run this if on the skills.html page
        if (window.location.pathname.includes('skills.html') || window.location.pathname.endsWith('skills.html')) {
            const skillLevels = document.querySelectorAll('.skill-level');
            skillLevels.forEach(level => {
                const levelTop = level.getBoundingClientRect().top;
                const windowHeight = window.innerHeight;

                // Trigger skill bar animation when in view and not already animated
                if (levelTop < windowHeight - 150 && !level.classList.contains('animate')) {
                    level.classList.add('animate'); // Add class to trigger CSS animation
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

    // Contact Form Submission
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault(); // Prevent default form submission

            // Get form values
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const message = document.getElementById('message').value;
            
            // For now, log to console and show an alert. 
            // In a real application, you would send this data to a backend server.
            console.log('Form submitted:', { name, email, message });
            alert('Thank you for your message! I will get back to you soon.');
            contactForm.reset(); // Clear the form
        });
    }

    // Resume Download Functionality
    const downloadResume = document.getElementById('downloadResume'); 
    if (downloadResume) {
        downloadResume.addEventListener('click', function(e) {
            e.preventDefault(); // Prevent default link behavior if it's an anchor tag
            alert('Initiating resume download...');
            // In a real scenario, you would link directly to the PDF or trigger a download.
            // Example: window.location.href = 'path/to/your/resume.pdf'; 
        });
    }
});