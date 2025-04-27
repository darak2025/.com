      
      window.addEventListener('load', function() {
        const loader = document.querySelector('.page-loader');
        
        setTimeout(() => {
            loader.classList.add('hidden');
            
            document.body.style.opacity = '0';
            document.body.style.animation = 'fadeIn 1s ease-in-out forwards';
            
            setTimeout(() => {
                loader.remove();
            }, 1000);
        }, 3000);
    });

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
    });
    
    closeMenu.addEventListener('click', function() {
        mobileMenu.classList.remove('active');
        overlay.classList.remove('active');
    });
    
    overlay.addEventListener('click', function() {
        mobileMenu.classList.remove('active');
        overlay.classList.remove('active');
    });

    document.querySelectorAll('.mobile-menu a').forEach(link => {
        link.addEventListener('click', () => {
            mobileMenu.classList.remove('active');
            overlay.classList.remove('active');
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

    window.addEventListener('scroll', function() {
        const header = document.getElementById('header');
        if (window.scrollY > 50) {
            header.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.2)';
        } else {
            header.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
        }
    });

    const destinationModal = document.getElementById('destinationModal');
    const closeModal = document.getElementById('closeModal');
    const modalTitle = document.getElementById('modalTitle');
    const modalRating = document.getElementById('modalRating');
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
description: "تعتمد المزرعة على حملات تسويقية نشطة عبر وسائل التواصل الاجتماعي لجذب الزوار وتعريفهم بالأنشطة والتجارب المتاحة. تستخدم المزرعة منصات مثل تيك توك وفيسبوك لنشر مقاطع فيديو وصور تستعرض جمال الطبيعة والأنشطة الريفية التقليدية التي يمكن للزوار المشاركة فيها. على سبيل المثال: ينشر حساب 'Dahshur Today جولات ريفية' على تيك توك مقاطع فيديو تبرز الجولات الريفية والورش المتاحة في المزرعة، مما يساهم في زيادة الوعي وجذب الزوار. <br><br>المشاركة في المبادرات البيئية: شاركت المزرعة في حملات لزراعة الأشجار بهدف التكيف مع التغيرات المناخية، مثل زراعة 2000 شجرة على جوانب الترع في منطقة دهشور.<br><br>التغطية الإعلامية: حظيت المزرعة بتغطية إعلامية من قبل وسائل الإعلام المحلية، مما ساهم في زيادة الوعي بأنشطتها. على سبيل المثال: قدم برنامج 'دنيا السياحة' تقريرًا عن موسم حصاد التمور والسياحة الريفية في دهشور، مسلطًا الضوء على الأنشطة والتجارب التي تقدمها المزرعة للزوار. كما قام المصور الشاب سمير بتوثيق موسم حصاد البلح في قرية دهشور، ونشر الصور على منصات التواصل الاجتماعي، مما لفت انتباه الجمهور إلى جمال الحياة الريفية في المنطقة. نشرت صحيفة 'اليوم السابع' تقريرًا يبرز الأنشطة المختلفة التي يمكن ممارستها في دهشور، مسلطةً الضوء على التجارب الريفية الفريدة التي تقدمها المنطقة للزوار. أشار موقع 'الميادين' إلى تحول الريف المصري، بما في ذلك دهشور، إلى مقصد سياحي جذاب، مؤكدًا على بساطة الحياة الريفية وجمال الطبيعة في المنطقة.<br><br>بالإضافة إلى ذلك، تم تسليط الضوء على دهشور كوجهة سياحية ريفية مميزة من خلال تقارير إعلامية متعددة، مما ساهم في زيادة الوعي بالمنطقة وجذب المزيد من الزوار.<br><br><b>الأسعار:</b><br>• الفرد الفطار 550 جنيه<br>• ركوب الخيل الفرد 50 جنيه من 9 صباحًا إلى 12 ظهرًا<br>• سياسة الأطفال من سن 6 إلى 10 سنوات 275 جنيه<br>• الأطفال تحت سن 6 سنوات الدخول مجانًا.",
location: "الاسماعيلية",
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
            modalRating.textContent = destination.rating;
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
    
    