// Arayüz metinleri: menü, bölüm başlıkları, butonlar, rozetler.
// İçerik (projeler, deneyim) src/data altında; burada sadece sabit arayüz yazıları var.

export const ui = {
  nav: {
    about: { tr: 'Hakkımda', en: 'About' },
    projects: { tr: 'Projeler', en: 'Projects' },
    experience: { tr: 'Deneyim', en: 'Experience' },
    skills: { tr: 'Yetenekler', en: 'Skills' },
    contact: { tr: 'İletişim', en: 'Contact' },
  },
  menu: {
    open: { tr: 'Menüyü aç', en: 'Open menu' },
    close: { tr: 'Menüyü kapat', en: 'Close menu' },
    title: { tr: 'menu.exe', en: 'menu.exe' },
    main: { tr: 'Ana menü', en: 'Main menu' },
  },
  theme: {
    toDay: { tr: 'Gündüz temasına geç', en: 'Switch to day theme' },
    toNight: { tr: 'Gece temasına geç', en: 'Switch to night theme' },
  },
  hero: {
    player: { tr: 'PLAYER 01', en: 'PLAYER 01' },
    greeting: { tr: 'Merhaba, ben', en: "Hi, I'm" },
    cta: { tr: 'Projelerime göz at', en: 'See my projects' },
    avatarAlt: {
      tr: 'Pınar’ın piksel art avatarı: kıvırcık bakır saçlı, çilli, gülümsüyor; masada çıkartmalı bir laptop ve bir fincan kahve var',
      en: 'Pixel art avatar of Pınar: curly copper hair, freckles and a smile, with a sticker-covered laptop and a cup of coffee on the desk',
    },
  },
  project: {
    problem: { tr: 'Problem', en: 'Problem' },
    solution: { tr: 'Çözüm', en: 'Solution' },
    next: { tr: 'Sırada', en: 'Next' },
    github: { tr: 'GitHub', en: 'GitHub' },
    noRepo: { tr: 'Kod paylaşılmıyor', en: 'Code not public' },
  },
  status: {
    done: { tr: 'Tamamlandı', en: 'Completed' },
    prototype: { tr: 'Prototip', en: 'Prototype' },
    'in-progress': { tr: 'Devam ediyor', en: 'In progress' },
    planning: { tr: 'Planlama', en: 'Planning' },
  },
  experience: {
    current: { tr: 'Şu an burada', en: 'Current' },
    education: { tr: 'Eğitim', en: 'Education' },
    certificates: { tr: 'Sertifikalar', en: 'Certificates' },
  },
  skills: {
    languages: { tr: 'Diller', en: 'Languages' },
  },
  cat: {
    pet: { tr: 'Kediyi sev', en: 'Pet the cat' },
  },
  languageToggle: {
    label: { tr: 'Dil seçimi', en: 'Language' },
  },
}
