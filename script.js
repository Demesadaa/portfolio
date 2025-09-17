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

  applyTranslations('ka');

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


