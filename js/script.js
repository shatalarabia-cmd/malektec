document.addEventListener('DOMContentLoaded', () => {
  const translations = {
    ar: {
      siteTitle: "مالك للتقنية | برمجة تطبيقات ومواقع وخدمات إلكترونية وتعليمية",
      navHome: "الرئيسية",
      navServices: "خدماتنا",
      navTech: "التقنية",
      navEdu: "التعليم",
      navElec: "الخدمات الإلكترونية",
      navAbout: "من نحن",
      navFaq: "الأسئلة الشائعة",
      navContact: "تواصل معنا",
      orderNow: "اطلب خدمتك",
      whatsappBtn: "واتساب",
      heroBadge: "🚀 شريكك التقني والتعليمي الموثوق",
      heroTitle: "حلول تقنية وتعليمية وخدمات إلكترونية <span>في مكان واحد</span>",
      heroSub: "مالك للتقنية نقدم خدمات البرمجة وتطوير تطبيقات الجوال والمواقع الإلكترونية، بالإضافة إلى مشاريع التخرج والبحوث والخدمات التعليمية والإلكترونية باحترافية وسرعة.",
      heroBtnOrder: "اطلب خدمتك الآن",
      heroBtnWa: "تواصل عبر واتساب",
      secServicesTitle: "خدماتنا المتميزة",
      secServicesSub: "نقدم باقة شاملة من الحلول التقنية المبتكرة والخدمات التعليمية والإلكترونية بأعلى معايير الجودة.",
      tabAll: "جميع الخدمات",
      tabTech: "الخدمات التقنية",
      tabEdu: "الخدمات التعليمية",
      tabElec: "الخدمات الإلكترونية",
      btnOrderCard: "اطلب الخدمة",
      disclaimerText: "<strong>ملاحظة مهمة:</strong> مالك للتقنية جهة مستقلة ولا تمثل أي جهة حكومية أو منصة رسمية، وتقدم المساعدة في الإجراءات والخدمات الإلكترونية.",
      secWhyTitle: "لماذا تختار مالك للتقنية؟",
      secWhySub: "نلتزم بتقديم أفضل جودة مع السرعة والدقة في التنفيذ.",
      f1: "خبرة في الخدمات التقنية",
      f2: "حلول تقنية مخصصة",
      f3: "دعم ومتابعة مستمرة",
      f4: "سرعة في تنفيذ الطلبات",
      f5: "خدمات إلكترونية متعددة",
      f6: "خدمات تعليمية وتقنية",
      f7: "دعم باللغة العربية والإنجليزية",
      f8: "تصميمات حديثة ومتوافقة مع الجوال",
      secAboutTitle: "من نحن",
      secAboutSub: "تعرف على منصتنا ورسالتنا",
      aboutText: "مالك للتقنية منصة خدمات تقنية وتعليمية وإلكترونية تهدف إلى تقديم حلول عملية للأفراد والطلاب وأصحاب المشاريع، من خلال خدمات البرمجة وتطوير المواقع والتطبيقات، والخدمات التعليمية، والمساعدة في الإجراءات الإلكترونية.",
      secStepsTitle: "كيف نعمل؟",
      secStepsSub: "خطوات بسيطة وسريعة للحصول على خدمتك",
      step1Title: "تواصل معنا",
      step2Title: "حدد الخدمة المطلوبة",
      step3Title: "نراجع الطلب والتفاصيل",
      step4Title: "نبدأ تنفيذ الخدمة ومتابعتها",
      secFaqTitle: "الأسئلة الشائعة",
      secFaqSub: "إجابات على أكثر الاستفسارات شيوعًا",
      secContactTitle: "تواصل معنا",
      secContactSub: "للاستفسار أو طلب أي خدمة، تواصل معنا مباشرة عبر واتساب.",
      contactCardTitle: "معلومات التواصل المباشر",
      contactCardText: "نحن هنا لمساعدتك دائماً. تواصل معنا عبر الواتساب للرد السريع على استفساراتك.",
      btnContactWa: "تواصل معنا عبر واتساب",
      formTitle: "نموذج طلب خدمة",
      formName: "الاسم الكامل",
      formPhone: "رقم الجوال",
      formService: "نوع الخدمة",
      formDetails: "تفاصيل الطلب",
      formSubmit: "إرسال الطلب عبر واتساب",
      selectDefault: "اختر الخدمة المطلوبة...",
      footerDesc: "حلول تقنية وتعليمية وخدمات إلكترونية باحترافية وسرعة.",
      footerQuickLinks: "روابط سريعة",
      footerServices: "الخدمات الرئيسية",
      footerContact: "معلومات التواصل",
      copyright: "© 2026 مالك للتقنية - جميع الحقوق محفوظة"
    },
    en: {
      siteTitle: "Malek Technology | Apps, Websites, E-Services & Educational Solutions",
      navHome: "Home",
      navServices: "Services",
      navTech: "Tech",
      navEdu: "Education",
      navElec: "E-Services",
      navAbout: "About Us",
      navFaq: "FAQ",
      navContact: "Contact Us",
      orderNow: "Request Service",
      whatsappBtn: "WhatsApp",
      heroBadge: "🚀 Your Trusted Tech & Educational Partner",
      heroTitle: "Technical, Educational & E-Services <span>In One Place</span>",
      heroSub: "Malek Technology offers software development, mobile apps, websites, as well as graduation projects, research, and e-services support professionally and quickly.",
      heroBtnOrder: "Request Service Now",
      heroBtnWa: "Chat via WhatsApp",
      secServicesTitle: "Our Premium Services",
      secServicesSub: "We offer a comprehensive range of innovative technical solutions and educational & electronic services.",
      tabAll: "All Services",
      tabTech: "Technical Services",
      tabEdu: "Educational Services",
      tabElec: "Electronic Services",
      btnOrderCard: "Order Service",
      disclaimerText: "<strong>Important Note:</strong> Malek Technology is an independent entity and does not represent any government agency or official platform. We provide assistance with electronic procedures.",
      secWhyTitle: "Why Choose Malek Technology?",
      secWhySub: "We are committed to delivering the best quality with speed and precision.",
      f1: "Expertise in Tech Services",
      f2: "Customized Tech Solutions",
      f3: "Continuous Support & Follow-up",
      f4: "Fast Order Execution",
      f5: "Comprehensive E-Services",
      f6: "Educational & Tech Assistance",
      f7: "Arabic & English Support",
      f8: "Modern & Mobile-Responsive Design",
      secAboutTitle: "About Us",
      secAboutSub: "Learn more about our platform and mission",
      aboutText: "Malek Technology is a technical, educational, and electronic services platform that aims to provide practical solutions for individuals, students, and project owners through programming, app development, educational support, and electronic procedures assistance.",
      secStepsTitle: "How We Work",
      secStepsSub: "Simple and fast steps to get your service",
      step1Title: "Contact Us",
      step2Title: "Select Service",
      step3Title: "Review Details",
      step4Title: "Execution & Follow-up",
      secFaqTitle: "Frequently Asked Questions",
      secFaqSub: "Answers to common inquiries",
      secContactTitle: "Contact Us",
      secContactSub: "For inquiries or requesting any service, contact us directly via WhatsApp.",
      contactCardTitle: "Direct Contact Information",
      contactCardText: "We are always here to help you. Reach out via WhatsApp for quick responses.",
      btnContactWa: "Connect via WhatsApp",
      formTitle: "Service Request Form",
      formName: "Full Name",
      formPhone: "Phone Number",
      formService: "Service Type",
      formDetails: "Order Details",
      formSubmit: "Send Request via WhatsApp",
      selectDefault: "Select required service...",
      footerDesc: "Technical, educational, and electronic service solutions provided with speed and professionalism.",
      footerQuickLinks: "Quick Links",
      footerServices: "Main Services",
      footerContact: "Contact Info",
      copyright: "© 2026 Malek Technology - All rights reserved"
    }
  };

  const WA_NUMBER = "966542553175";

  const themeToggleBtn = document.getElementById('theme-toggle');
  const langToggleBtn = document.getElementById('lang-toggle');
  const mobileMenuBtn = document.getElementById('mobile-menu-btn');
  const navMenu = document.getElementById('nav-menu');
  const header = document.querySelector('.header');
  const contactForm = document.getElementById('whatsapp-form');

  const currentTheme = localStorage.getItem('theme') || 'light';
  document.documentElement.setAttribute('data-theme', currentTheme);
  updateThemeIcon(currentTheme);

  themeToggleBtn.addEventListener('click', () => {
    const theme = document.documentElement.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
    updateThemeIcon(theme);
  });

  function updateThemeIcon(theme) {
    themeToggleBtn.innerHTML = theme === 'dark' ? '<i class="fas fa-sun"></i>' : '<i class="fas fa-moon"></i>';
  }

  let currentLang = localStorage.getItem('lang') || 'ar';
  setLanguage(currentLang);

  langToggleBtn.addEventListener('click', () => {
    currentLang = currentLang === 'ar' ? 'en' : 'ar';
    localStorage.setItem('lang', currentLang);
    setLanguage(currentLang);
  });

  function setLanguage(lang) {
    document.documentElement.setAttribute('lang', lang);
    document.documentElement.setAttribute('dir', lang === 'ar' ? 'rtl' : 'ltr');
    langToggleBtn.textContent = lang === 'ar' ? 'English' : 'العربية';

    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      if (translations[lang] && translations[lang][key]) {
        el.innerHTML = translations[lang][key];
      }
    });

    document.title = translations[lang].siteTitle;
  }

  mobileMenuBtn.addEventListener('click', () => {
    navMenu.classList.toggle('open');
    const isOpen = navMenu.classList.contains('open');
    mobileMenuBtn.innerHTML = isOpen ? '<i class="fas fa-times"></i>' : '<i class="fas fa-bars"></i>';
  });

  document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
      navMenu.classList.remove('open');
      mobileMenuBtn.innerHTML = '<i class="fas fa-bars"></i>';
    });
  });

  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });

  const tabBtns = document.querySelectorAll('.tab-btn');
  const serviceCards = document.querySelectorAll('.service-card');

  tabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      tabBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filter = btn.getAttribute('data-filter');

      serviceCards.forEach(card => {
        if (filter === 'all' || card.getAttribute('data-category') === filter) {
          card.style.display = 'flex';
        } else {
          card.style.display = 'none';
        }
      });
    });
  });

  const faqItems = document.querySelectorAll('.faq-item');

  faqItems.forEach(item => {
    const question = item.querySelector('.faq-question');
    question.addEventListener('click', () => {
      const isActive = item.classList.contains('active');
      faqItems.forEach(i => i.classList.remove('active'));
      if (!isActive) {
        item.classList.add('active');
      }
    });
  });

  window.orderServiceWA = function(serviceName) {
    const msg = `السلام عليكم، أرغب في طلب خدمة: ${serviceName}`;
    const url = `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(msg)}`;
    window.open(url, '_blank');
  };

  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      
      const name = document.getElementById('form-name').value.trim();
      const phone = document.getElementById('form-phone').value.trim();
      const service = document.getElementById('form-service').value;
      const details = document.getElementById('form-details').value.trim();

      const message = `السلام عليكم ورحمة الله وبركاته\n\n*طلب خدمة جديد من الموقع:*\n- *الاسم:* ${name}\n- *رقم الجوال:* ${phone}\n- *الخدمة المطلوبة:* ${service}\n- *التفاصيل:* ${details}`;

      const whatsappUrl = `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(message)}`;
      window.open(whatsappUrl, '_blank');
    });
  }
});
