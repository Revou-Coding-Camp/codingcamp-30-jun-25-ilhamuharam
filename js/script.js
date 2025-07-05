        // Hamburger menu toggle
        const hamburgerBtn = document.getElementById('hamburgerBtn');
        const navbarMenu = document.getElementById('navbarMenu');
        hamburgerBtn.addEventListener('click', () => {
            navbarMenu.classList.toggle('active');
        });
        // Allow keyboard accessibility for hamburger
        hamburgerBtn.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' || e.key === ' ') {
                navbarMenu.classList.toggle('active');
            }
        });
        // Close menu on link click (mobile)
        document.querySelectorAll('.navbar-links a').forEach(link => {
            link.addEventListener('click', function() {
                if (window.innerWidth <= 600) {
                    navbarMenu.classList.remove('active');
                }
            });
        });

        // Smooth scroll for navbar links
        document.querySelectorAll('nav a').forEach(link => {
            link.addEventListener('click', function(e) {
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    e.preventDefault();
                    target.scrollIntoView({ behavior: 'smooth' });
                }
            });
        });

        // Contact form submission with nugget notification
        document.getElementById('contactForm').addEventListener('submit', function(e) {
            e.preventDefault();
            const name = document.getElementById('name').value.trim();
            const nugget = document.getElementById('nugget');
            nugget.textContent = `Thank you, ${name}! Your message has been sent successfully.`;
            nugget.style.display = 'block';
            setTimeout(() => {
                nugget.style.display = 'none';
            }, 3500);
            this.reset();
        });