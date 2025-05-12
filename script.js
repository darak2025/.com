        window.addEventListener('load', function() {
            const pageLoader = document.querySelector('.page-loader');
            setTimeout(() => {
                pageLoader.classList.add('fade-out');
                
                addNatureEffects();
            }, 1500);
        });

        window.addEventListener('scroll', function() {
            const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
            const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
            const scrollProgress = (scrollTop / scrollHeight) * 100;
            document.getElementById('progressBar').style.width = scrollProgress + '%';
            
            const backToTop = document.getElementById('backToTop');
            if (scrollTop > 300) {
                backToTop.classList.add('active');
            } else {
                backToTop.classList.remove('active');
            }
        });

        document.getElementById('backToTop').addEventListener('click', function() {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });

        const themeToggle = document.getElementById('themeToggle');
        const mobileThemeToggle = document.getElementById('mobileThemeToggle');
        const body = document.body;
        
        function toggleDarkMode() {
            body.classList.toggle('dark-mode');
            const isDark = body.classList.contains('dark-mode');
            
            const icon = isDark ? 'fa-sun' : 'fa-moon';
            themeToggle.innerHTML = `<i class="fas ${icon}"></i>`;
            mobileThemeToggle.innerHTML = `<i class="fas ${icon}"></i>`;
            
            localStorage.setItem('darkMode', isDark);
        }
        
        themeToggle.addEventListener('click', toggleDarkMode);
        mobileThemeToggle.addEventListener('click', toggleDarkMode);
        
        if (localStorage.getItem('darkMode') === 'true') {
            body.classList.add('dark-mode');
            themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
            mobileThemeToggle.innerHTML = '<i class="fas fa-sun"></i>';
        }

        const menuToggle = document.getElementById('menuToggle');
        const mobileMenu = document.getElementById('mobileMenu');
        const overlay = document.getElementById('overlay');
        const closeMenu = document.getElementById('closeMenu');
        
        menuToggle.addEventListener('click', function() {
            mobileMenu.classList.add('active');
            overlay.classList.add('active');
            document.body.style.overflow = 'hidden';
        });
        
        closeMenu.addEventListener('click', function() {
            mobileMenu.classList.remove('active');
            overlay.classList.remove('active');
            document.body.style.overflow = '';
        });
        
        overlay.addEventListener('click', function() {
            mobileMenu.classList.remove('active');
            overlay.classList.remove('active');
            document.body.style.overflow = '';
        });

        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function(e) {
                e.preventDefault();
                
                const targetId = this.getAttribute('href');
                const targetElement = document.querySelector(targetId);
                
                if (targetElement) {
                    window.scrollTo({
                        top: targetElement.offsetTop - 80,
                        behavior: 'smooth'
                    });
                    

                    if (mobileMenu.classList.contains('active')) {
                        mobileMenu.classList.remove('active');
                        overlay.classList.remove('active');
                        document.body.style.overflow = '';
                    }
                }
            });
        });

            
        function addNatureEffects() {
            const heroSection = document.querySelector('.hero');
            
            for (let i = 0; i < 8; i++) {
                const leaf = document.createElement('div');
                leaf.className = 'nature-effect leaf';
                leaf.style.top = `${Math.random() * 80 + 10}%`;
                leaf.style.left = `${Math.random() * 90 + 5}%`;
                leaf.style.animationDelay = `${Math.random() * 5}s`;
                leaf.style.transform = `scale(${Math.random() * 0.7 + 0.3}) rotate(${Math.random() * 360}deg)`;
                heroSection.appendChild(leaf);
            }
            
            for (let i = 0; i < 3; i++) {
                const bird = document.createElement('div');
                bird.className = 'nature-effect bird';
                bird.style.top = `${Math.random() * 80 + 10}%`;
                bird.style.left = `${Math.random() * 90 + 5}%`;
                bird.style.animationDelay = `${Math.random() * 5}s`;
                bird.style.transform = `scale(${Math.random() * 0.5 + 0.5})`;
                heroSection.appendChild(bird);
            }
        }

     
        const observerOptions = {
            threshold: 0.1
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate');
                }
            });
        }, observerOptions);

        document.querySelectorAll('.section-card, .product-card').forEach(card => {
            observer.observe(card);
        });