(() => {
  const year = document.getElementById('year');
  if (year) year.textContent = new Date().getFullYear();

  // Lightweight i18n
  const translations = {
    ka: {
      'nav.about': 'ჩემს შესახებ',
      'nav.education': 'განათლება',
      'nav.experience': 'გამოცდილება',
      'nav.other': 'სხვა',
      'nav.gallery': 'გალერეა',
      'nav.contact': 'კონტაქტი',
      'hero.subtitle': 'მათემატიკის რეპეტიტოტი- ვეხმარები მოსწავლეებს აუღონ ალღო მათემატიკის ნებისმიერ სირთულეს',
      'actions.call': 'დარეკვა',
      'actions.whatsapp': 'WhatsApp',
      'actions.instagram': 'Instagram',
      'actions.facebook': 'Facebook',
      'about.title': 'ჩემს შესახებ',
      'about.body': '🏫 ვარ ვლადიმირ კომაროვის თბილისის ფიზიკა-მათემატიკის 199ე საჯარო სკოლის კურსდამთავრებული 2016-2022.<br><br>🎓საერთაშორისო უნივერსიტეტის სტუდენტი 100%იანი დაფინანსებით.<br><br>👨‍🏫სწავლების 5 წლიანი გამოცდილება, უმაღლესი მათემატიკის ჩათვლით. მომიმზადებია მოსწავლეები პრე-კალკულუსში, კალკულუსში, დისკრეტულ მათემატიკაში და ა.შ.<br><br>⚛️მათემატიკის გარდა კარგად ვფლობ სკოლის დონე ფიზიკას, რომელიც მოიცავს: მექანიკა , ელექტროობა, სითბოები, ინდუქცია და ა.შ.<br><br>🎁პირველი სატესტო გაკვეთილი ყოველთვის უფასოა!!!<br><br>🏆შემიძლია მოვამზადო მოსწავლე ეროვნული და კერძო ოლიმპიადებისთვის.<br><br>გრაფიკს და დავალებებს პერსონალურად მოვარგებ მოსწავლეს.',
      'about.list.1': 'მხოლოდ ინდივიდუალური გაკვეთლები მხოლოდ ონლაინ.',
      'about.list.2': 'სწავლება ქართულად და ინგლისურად(b2+)',
      'about.list.3': 'პროგრესის მონიტორინგი',
      'education.title': 'განათლება',
      'education.item1.title': 'ვლადიმირ კომაროვის თბილისის ფიზიკა-მათემატიკის 199 საჯარო სკოლა',
      'education.item1.sub': 'Komarovi Campus School · 2016–2022',
      'education.item1.desc': 'Physics–Mathematics high school curriculum.',
      'education.item2.title': 'ქუთაისის საერთაშორისო უნივერსიტეტი — კომპიუტერული მეცნიერებები',
      'education.item2.sub': 'Kutaisi International University · Computer Science · 2022–',
      'education.item2.desc': 'Undergraduate studies in Computer Science; კოჰორტის ტოპ 200 სტუდენტს შორის; 100% სტიპენდია.',
      'experience.title': 'გამოცდილება',
      'experience.item1.title': 'მათემატიკის რეპეტიტორი',
      'experience.item1.sub': 'ფრილანსი · 2020–დღემდე',
      'experience.item1.desc': 'ინდივიდუალური და ჯგუფური სწავლება; გამოცდებისთვის მომზადება; ოლიმპიადების მენტორინგი.',
      'experience.item2.title': 'ფიზიკის რეპეტიტორი',
      'experience.item2.sub': '2022–დღემდე',
      'experience.item2.desc': 'მოსწავლეების მხარდაჭერა მასალის გაღრმავებაში და ამოცანებზე მუშაობა.',
      'achievements.title': 'სხვა',
      'achievements.item1': 'ტურნირის მიღწევა 1',
      'achievements.item2': 'ტურნირის მიღწევა 2',
      'achievements.item3': 'ტურნირის მიღწევა 3',
      'gallery.title': 'გალერეა',
      'contact.title': 'კონტაქტი',
      'contact.email_label': 'ელფოსტა:'
    },
    en: {
      'nav.about': 'About',
      'nav.education': 'Education',
      'nav.experience': 'Experience',
      'nav.other': 'Other',
      'nav.gallery': 'Gallery',
      'nav.contact': 'Contact',
      'hero.subtitle': 'Math tutor — I help students grasp any level of math.',
      'actions.call': 'Call',
      'actions.whatsapp': 'WhatsApp',
      'actions.instagram': 'Instagram',
      'actions.facebook': 'Facebook',
      'about.title': 'About',
      'about.body': '🏫 Graduate of Tbilisi Physics-Mathematics Public School No.199 (Komarovi), 2016–2022.<br><br>🎓 University student with a 100% scholarship.<br><br>👨‍🏫 5 years of teaching experience up to higher mathematics. I have prepared students in Pre-Calculus, Calculus, Discrete Math, and more.<br><br>⚛️ In addition to math, I teach school-level Physics: Mechanics, Electricity, Thermodynamics, Induction, etc.<br><br>🎁 The first trial lesson is always free!<br><br>🏆 I can prepare students for national and private olympiads.<br><br>I tailor the schedule and assignments to each student individually.',
      'about.list.1': 'Individual lessons only, online only.',
      'about.list.2': 'Teaching in Georgian and English (B2+)',
      'about.list.3': 'Progress monitoring',
      'education.title': 'Education',
      'education.item1.title': 'Vladimir Komarov Tbilisi Physics-Mathematics Public School No.199',
      'education.item1.sub': 'Komarovi Campus School · 2016–2022',
      'education.item1.desc': 'Physics–Mathematics high school curriculum.',
      'education.item2.title': 'Kutaisi International University — Computer Science',
      'education.item2.sub': 'Kutaisi International University · Computer Science · 2022–',
      'education.item2.desc': 'Undergraduate studies in Computer Science; among the top 200 in the cohort; 100% scholarship.',
      'experience.title': 'Experience',
      'experience.item1.title': 'Math Tutor',
      'experience.item1.sub': 'Freelance · 2020–present',
      'experience.item1.desc': 'Individual and group teaching; exam preparation; olympiad mentoring.',
      'experience.item2.title': 'Physics Tutor',
      'experience.item2.sub': '2022–present',
      'experience.item2.desc': 'Helping students deepen understanding and solve problems.',
      'achievements.title': 'Other',
      'achievements.item1': '3x Kings winner and national team member.',
      'achievements.item2': '“Hope of Tomorrow” Olympiad — 2x finalist.',
      'achievements.item3': 'Mvector finalist.',
      'gallery.title': 'Gallery',
      'contact.title': 'Contact',
      'contact.email_label': 'Email:'
    }
  };

  function applyTranslations(locale = 'ka') {
    const dict = translations[locale];
    if (!dict) return;
    document.querySelectorAll('[data-i18n]').forEach((el) => {
      const key = el.getAttribute('data-i18n');
      const text = dict[key];
      if (typeof text === 'string') {
        // If element contains HTML (like <br> in paragraphs), use innerHTML
        if (text.includes('<') || el.tagName === 'P' || el.tagName === 'LI') {
          el.innerHTML = text;
        } else {
          el.textContent = text;
        }
      }
    });
    document.documentElement.lang = locale;
  }

  // initialize locale from localStorage or default
  const savedLocale = localStorage.getItem('locale') || 'ka';
  const langSelect = document.getElementById('lang');
  if (langSelect) {
    langSelect.value = savedLocale;
    langSelect.addEventListener('change', () => {
      const next = langSelect.value;
      localStorage.setItem('locale', next);
      applyTranslations(next);
    });
  }
  applyTranslations(savedLocale);

  // Support multiple sliders (featured + gallery)
  document.querySelectorAll('.slider').forEach((slider) => {
    const slidesContainer = slider.querySelector('.slides');
    const prevBtn = slider.querySelector('.prev');
    const nextBtn = slider.querySelector('.next');
    const slides = Array.from(slider.querySelectorAll('.slide'));

    let index = 0;

    function update() {
      slidesContainer.style.transform = `translateX(-${index * 100}%)`;
    }

    function prev() {
      index = (index - 1 + slides.length) % slides.length;
      update();
    }

    function next() {
      index = (index + 1) % slides.length;
      update();
    }

    prevBtn?.addEventListener('click', prev);
    nextBtn?.addEventListener('click', next);

    // Keyboard accessibility
    slider.tabIndex = 0;
    slider.addEventListener('keyup', (e) => {
      if (e.key === 'ArrowLeft') prev();
      if (e.key === 'ArrowRight') next();
    });

    // Drag/swipe support
    let startX = 0;
    let isDown = false;
    const onDown = (x) => { isDown = true; startX = x; };
    const onMove = (x) => {
      if (!isDown) return;
      const delta = x - startX;
      if (Math.abs(delta) > 40) {
        if (delta > 0) prev(); else next();
        isDown = false;
      }
    };
    const onUp = () => { isDown = false; };
    slider.addEventListener('mousedown', (e) => onDown(e.clientX));
    slider.addEventListener('mousemove', (e) => onMove(e.clientX));
    slider.addEventListener('mouseup', onUp);
    slider.addEventListener('mouseleave', onUp);
    slider.addEventListener('touchstart', (e) => onDown(e.touches[0].clientX), { passive: true });
    slider.addEventListener('touchmove', (e) => onMove(e.touches[0].clientX), { passive: true });
    slider.addEventListener('touchend', onUp);

    // Auto-play (gentle)
    let timer = setInterval(next, 5000);
    slider.addEventListener('mouseenter', () => clearInterval(timer));
    slider.addEventListener('mouseleave', () => { timer = setInterval(next, 5000); });
  });
})();


