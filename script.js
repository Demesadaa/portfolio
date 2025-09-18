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
      'hero.subtitle': 'მათემატიკის რეპეტიტორი — მკაფიო ახსნა, სტრუქტურული ვარჯიში და გაზომვადი პროგრესი.',
      'actions.call': 'დარეკვა',
      'actions.whatsapp': 'WhatsApp',
      'actions.instagram': 'Instagram',
      'actions.facebook': 'Facebook',
      'about.title': 'ჩემს შესახებ',
      'about.list.1': 'პირადი და მცირე ჯგუფური გაკვეთილები',
      'about.list.2': 'კონცეფციებზე ორიენტირებული ახსნა',
      'about.list.3': 'ყოველკვირეული პროგრესის მონიტორინგი',
      'education.title': 'განათლება',
      'education.item1.title': 'ბაკალავრიატი — მათემატიკა',
      'education.item1.desc': 'ძირითადი თემები: ალგებრა, ანალიზი, კომბინატორიკა, ალბათობა.',
      'education.item2.title': 'დამატებითი კურსები / სერტიფიკატები',
      'education.item2.desc': 'დაამატეთ ნებისმიერი შესაბამისი კურსი ან ტრენინგი.',
      'experience.title': 'გამოცდილება',
      'experience.item1.title': 'მათემატიკის რეპეტიტორი',
      'experience.item1.sub': 'ფრილანსი · YYYY–დღემდე',
      'experience.item1.desc': 'ინდივიდუალური და ჯგუფური სწავლება; გამოცდებისთვის მომზადება; ოლიმპიადის მენტორინგი.',
      'experience.item2.title': 'ასისტენტი',
      'experience.item2.sub': 'ინსტიტუტი · YYYY–YYYY',
      'experience.item2.desc': 'კურსების მხარდაჭერა, დავალებების შეფასება, სემინარების ჩატარება.',
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
      'hero.subtitle': 'Math tutor — clear explanations, structured practice, measurable progress.',
      'actions.call': 'Call',
      'actions.whatsapp': 'WhatsApp',
      'actions.instagram': 'Instagram',
      'actions.facebook': 'Facebook',
      'about.title': 'About',
      'about.list.1': '1:1 and small group lessons',
      'about.list.2': 'Concept-first explanations',
      'about.list.3': 'Weekly progress tracking',
      'education.title': 'Education',
      'education.item1.title': 'Bachelor — Mathematics',
      'education.item1.desc': 'Core topics: Algebra, Analysis, Combinatorics, Probability.',
      'education.item2.title': 'Extra courses / Certificates',
      'education.item2.desc': 'Add any relevant courses or trainings.',
      'experience.title': 'Experience',
      'experience.item1.title': 'Math Tutor',
      'experience.item1.sub': 'Freelance · 2020–present',
      'experience.item1.desc': '1:1 and group teaching; exam prep; olympiad mentoring.',
      'experience.item2.title': 'Teaching Assistant',
      'experience.item2.sub': 'Institute · YYYY–YYYY',
      'experience.item2.desc': 'Course support, grading, running seminars.',
      'achievements.title': 'Other',
      'achievements.item1': 'Competition achievement 1',
      'achievements.item2': 'Competition achievement 2',
      'achievements.item3': 'Competition achievement 3',
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
        el.textContent = text;
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

  const slider = document.querySelector('.slider');
  if (!slider) return;
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
  slider.addEventListener('keyup', (e) => {
    if (e.key === 'ArrowLeft') prev();
    if (e.key === 'ArrowRight') next();
  });

  // Auto-play (gentle)
  let timer = setInterval(next, 5000);
  slider.addEventListener('mouseenter', () => clearInterval(timer));
  slider.addEventListener('mouseleave', () => { timer = setInterval(next, 5000); });
})();


