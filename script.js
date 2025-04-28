window.addEventListener('scroll', function() {
    const header = document.getElementById('header');
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

document.addEventListener('DOMContentLoaded', function() {
    const header = document.getElementById('header');
    header.classList.remove('scrolled');
});

document.addEventListener('DOMContentLoaded', function() {
    const loader = document.querySelector('.page-loader');
    
    setTimeout(() => {
        loader.classList.add('hidden');
        
        setTimeout(() => {
            loader.remove();
            document.body.classList.add('loaded');
        }, 1000);
    }, 1500);
    
    window.addEventListener('scroll', function() {
        const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
        const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const scrollProgress = (scrollTop / scrollHeight) * 100;
        document.getElementById('progressBar').style.width = scrollProgress + '%';
    });
    
    const menuToggle = document.getElementById('menuToggle');
    const mobileMenu = document.getElementById('mobileMenu');
    const closeMenu = document.getElementById('closeMenu');
    const overlay = document.getElementById('overlay');
    
    menuToggle.addEventListener('click', function() {
        mobileMenu.classList.add('active');
        overlay.classList.add('active');
        document.body.style.overflow = 'hidden';
    });
    
    closeMenu.addEventListener('click', function() {
        mobileMenu.classList.remove('active');
        overlay.classList.remove('active');
        document.body.style.overflow = 'auto';
    });
    
    overlay.addEventListener('click', function() {
        mobileMenu.classList.remove('active');
        overlay.classList.remove('active');
        document.body.style.overflow = 'auto';
    });
    
    document.querySelectorAll('.mobile-menu a').forEach(link => {
        link.addEventListener('click', () => {
            mobileMenu.classList.remove('active');
            overlay.classList.remove('active');
            document.body.style.overflow = 'auto';
        });
    });
    
    const backToTop = document.getElementById('backToTop');
    
    window.addEventListener('scroll', function() {
        if (window.pageYOffset > 300) {
            backToTop.classList.add('visible');
        } else {
            backToTop.classList.remove('visible');
        }
    });
    
    backToTop.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
    
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 70,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    const header = document.getElementById('header');
    
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            header.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.15)';
            header.style.background = 'rgba(255, 255, 255, 0.98)';
        } else {
            header.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
            header.style.background = 'rgba(255, 255, 255, 0.95)';
        }
    });
    
    window.addEventListener('scroll', function() {
        const sections = document.querySelectorAll('section');
        const navLinks = document.querySelectorAll('nav ul.nav-links li a');
        
        let current = '';
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            
            if (pageYOffset >= (sectionTop - 100)) {
                current = section.getAttribute('id');
            }
        });
        
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    });
    
    const destinationModal = document.getElementById('destinationModal');
    const closeModal = document.getElementById('closeModal');
    const modalTitle = document.getElementById('modalTitle');
    const modalDescription = document.getElementById('modalDescription');
    const modalLocation = document.getElementById('modalLocation');
    const modalImage = document.querySelector('.modal-image img');
    
    const destinations = {
        1: {
            title: "قرية تونس بالفيوم",
            description: "واحة خضراء جميلة تقع على تل عال تحيط بها صحراء واسعة، وتطل على مياه بحيرة قارون الزرقاء، ويتزين قلبها بعشرات معارض الخزف والفخار، وبُنيت منازلها بالحجر على الطراز الإسلامي التي تعلوها القباب.. تلك هي قرية تونس السياحية بمحافظة الفيوم، والتي توصف بأنّها قطعة من الجنة على أرض الفيوم، والتي تظهر كلوحة فنية رائعة من صُنع الخالق، حيث تمتلك مقومات ساحرة أسرت الخزافة السويسرية إيفيلين بوريه لتخطو بتلك القرية النائية البسيطة إلى الشهرة العالمية، وتجعلها مقصداً وقبلةً للسياح من جميع أنحاء العالم.<br><br>تتسم شوارع قرية تونس بالفيوم، بانتشار الأشجار والزهور والمباني المميزة التي انفردت بها القرية دون غيرها، والتي تجمع بين العمارة الريفية النوبية والعمارة الإسلامية في العصرين المملوكي والعثماني، حيث زرع نواتها المهندس المعماري الشهير حسن فتحي، الذي بنى أول منزل في تونس للخزافة السويسرية إيفيلين بوري، ثم بنى المدرسة التي افتتحتها لتعليم صناعة الخزف والفخار، كما بنى منزلاً له ولعدد كبير من سكان القرية، ثم سار على نهجه المهندس المعماري الشهير عمر الفاروق.<br><br>وتميزت قرية تونس دون غيرها من القرى، بصناعة الخزف والفخار، حيث تعلّم أبناؤها صناعته في مدرسة الخزافة السويسرية إيفيلين بوريه، ثم تخرّج الجيل الأول من المدرسة وافتتح كل منهم ورشته الخاصة به، تلاهم الجيل الثاني، حتى تحولت القرية إلى معرض فني لورش صناعة الخزف والفخار التي تمتد منذ بداية القرية حتى نهايتها",
            location: "محافظة الفيوم",
            image: "https://i.postimg.cc/ht0RXF5H/image.jpg"
        },
        2: {
            title: "مزرعة دهشور",
            description: "تُعد مزرعة 'ريف دهشور' مثالًا مميزًا للسياحة الريفية في مصر، حيث تقع بين نهر النيل والصحراء وتتميز ببيئة زراعية غنية ومجتمع محلي محافظ على العادات والتقاليد الريفية. تقدم المزرعة تجربة سياحية فريدة من خلال أنشطة متنوعة تعكس أسلوب الحياة الريفية التقليدية. تقع المزرعة في قرية دهشور التابعة لمركز البدرشين بمحافظة الجيزة، وهي منطقة ذات أهمية تاريخية بسبب وجود أهرامات سنفرو المدرجة ضمن التراث العالمي لليونسكو. اسم المزرعة مستوحى من موقعها المرتبط بتاريخ دهشور، وتعتبر وجهة سياحية جذابة بفضل طبيعتها الخلابة وأنشطتها التفاعلية مع الزوار، وتقدم منتجات ريفية مميزة مثل الفطر البلدي، الجبن القديم، والعسل بأنواعه.<br><br><b>الأنشطة:</b><br>• ورش الخبز البلدي: تعلم كيفية إعداد الخبز التقليدي وخبزه في الأفران الطينية.<br>• صناعة المنتجات اليدوية: المشاركة في ورش الحرف اليدوية التقليدية.<br>• ورش تصنيع المنتجات الغذائية: تعلم تحضير منتجات من مكونات محلية مثل البلح، جوز الهند، والمُسمّى.<br>• جولات بالدراجات في المناطق الريفية: استكشاف الطبيعة الخلابة في دهشور.<br>• تجارب زراعية: المشاركة في حصاد المحاصيل وتعلم تقنيات الزراعة التقليدية.<br>• ورشة إعداد المعمول بالتمر: تحضير المعمول وخبزه بالفرن الطيني.<br>• تذوق الطعام الريفي: الاستمتاع بوجبات تقليدية من مكونات طازجة ومحلية.<br><br><b>الأسعار:</b><br>• الفرد الفطار 550 جنيه<br>• ركوب الخيل الفرد 50 جنيه من 9 صباحًا إلى 12 ظهرًا<br>• سياسة الأطفال من سن 6 إلى 10 سنوات 275 جنيه<br>• الأطفال تحت سن 6 سنوات الدخول مجانًا.",
            location: "الجيزة",
            image: "https://i.postimg.cc/bNTmbzqH/ebc6b7b28a3e56e5962595c1082a90d8.jpg"
        },
        3: {
            title: "مزرعة ديار مريم",
            description: "مزرعة ديار مريم هي مشروع زراعي مستدام في مصر، تأسس عام 2020 على يد مريم مراد، رائدة أعمال شابة تبلغ من العمر 25 عامًا. يهدف المشروع إلى إنتاج أغذية عضوية طازجة وتعزيز الزراعة المستدامة، مع التركيز على دعم النساء الريفيات وتوفير فرص عمل لهن بساعات مرنة.<br><br>تقع المزرعة في عزبة مراد بقرية المشارقة المنصورية، ويمكن الوصول إليها عبر كوبري ديار مريم بمحافظة الجيزة. مهمتها الأساسية هي أن تجعلك تعايش تجربة من الريف المصري في قلب المدينة بتوصيل المنتجات الغذائية بمشتقاتها حتى باب المنزل مباشرة من المزرعة. لتضمن قضاء وقت ممتع وسط الأسرة وضمان جودة ومصدر ما يحصل عليه الأطفال من غذاء.<br><br><b>المنتجات والخدمات:</b><br>• الفواكه والخضروات الطازجة العضوية<br>• منتجات الألبان مثل الجبنة القريش، الجبنة القديمة، والقشطة<br>• المخبوزات التقليدية مثل العيش البيتي والفطير المشلتت<br>• العسل والمربى<br>• البيض العضوي<br><br>بالإضافة إلى ذلك، توفر المزرعة تجربة فريدة للزوار من خلال تنظيم زيارات تتيح لهم التعرف على أساليب الزراعة المستدامة والاستمتاع بوجبات الفطور الفلاحي المصري الأصيل.<br><br><b>التسويق:</b><br>تقوم مزرعة ديار مريم بالترويج لمنتجاتها وخدماتها عبر منصات التواصل الاجتماعي مثل فيسبوك وإنستغرام، حيث تشارك مقاطع فيديو ومحتوى توعوي حول تأثير التلوث والتغيرات المناخية على الزراعة. على سبيل المثال، تم نشر لقاء مع مريم مراد يتناول تأثير المخلفات الإلكترونية والتلوث على التربة والزراعة.<br><br><b>التواصل:</b><br>• البريد الإلكتروني: orders@diar-mariam.com<br>• رقم الهاتف: 01272072030",
            location: "قرية المشارقة المنصورية",
            image: "https://i.postimg.cc/8Pj7d4SK/118818252-3267417773350117-2741293498275962859-n.jpg"
        }
    };

    document.querySelectorAll('.product-card').forEach(card => {
        card.addEventListener('click', function() {
            const destinationId = this.getAttribute('data-destination');
            const destination = destinations[destinationId];
            
            modalTitle.textContent = destination.title;
            modalDescription.innerHTML = destination.description;
            modalLocation.textContent = destination.location;
            modalImage.src = destination.image;
            modalImage.alt = destination.title;
            
            destinationModal.classList.add('show');
            document.body.style.overflow = 'hidden';
        });
    });

    closeModal.addEventListener('click', function() {
        destinationModal.classList.remove('show');
        document.body.style.overflow = 'auto';
    });

    destinationModal.addEventListener('click', function(e) {
        if (e.target === destinationModal) {
            destinationModal.classList.remove('show');
            document.body.style.overflow = 'auto';
        }
    });
    
    const animateOnScroll = function() {
        const elements = document.querySelectorAll('.section-card, .product-card, .section-title');
        
        elements.forEach(element => {
            const elementPosition = element.getBoundingClientRect().top;
            const screenPosition = window.innerHeight / 1.3;
            
            if (elementPosition < screenPosition) {
                element.style.opacity = '1';
                element.style.transform = 'translateY(0)';
            }
        });
    };
    
    document.querySelectorAll('.section-card, .product-card').forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(30px)';
        element.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    });
    
    document.querySelectorAll('.section-title').forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(-30px)';
        element.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    });
    
    window.addEventListener('scroll', animateOnScroll);
    window.addEventListener('load', animateOnScroll);
    
    document.querySelectorAll('.btn').forEach(button => {
        button.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-3px)';
        });
        
        button.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });
});