// Projeler: her biri "Problem → Çözüm" kartı olarak gösterilir.
// status: 'done' | 'prototype' | 'in-progress' | 'planning'
//   Rozet metni ve rengi bu anahtardan üretilir (Adım 8).
// context: projenin türü (staj, ekip, okul...). Gerekmiyorsa yazılmaz.
// next: sıradaki hedef / yol haritası notu. Gerekmiyorsa yazılmaz.
// links.github: repo yoksa null.

export const projects = [
  {
    id: 'mustan-tailoring',
    title: 'Mustan Tailoring',
    status: 'prototype',
    context: { tr: 'Aile işletmesi · Hollanda', en: 'Family business · Netherlands' },
    problem: {
      tr: 'Dayımın terzi dükkânında siparişler iki parçalı makbuz kâğıtlarıyla takip ediliyordu. Müşteri kendi kâğıdını kaybedebiliyor, kâğıtlar karışıyor ve siparişlerde sorun çıkıyordu.',
      en: "At my uncle's tailoring shop, orders were tracked on two-part paper receipts. Customers lost their slips, receipts got mixed up and orders went wrong.",
    },
    solution: {
      tr: 'Dayım sadece müşterinin adını ve telefonunu girerek saniyeler içinde sipariş açıyor, müşteri ekrandaki QR kodu okutup siparişini takip ediyor. Detaylar sonradan doldurulabiliyor, sipariş hazır olunca da müşteriye tek tıkla WhatsApp mesajı gidiyor.',
      en: "My uncle opens an order in seconds with just the customer's name and phone number, and the customer scans a QR code to track it. Details can be filled in later, and when the order is ready, a WhatsApp message goes out with one click.",
    },
    // Sıradaki hedef: kartta "yol haritası" notu olarak gösterilir (isteğe bağlı alan)
    next: {
      tr: 'Tanıtım sitesiyle birlikte yakında yayında. Sonraki hedef: günlük, haftalık ve aylık sipariş istatistikleri.',
      en: 'Going live soon together with the shop website. Next goal: daily, weekly and monthly order statistics.',
    },
    tech: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'next-intl', 'QR'],
    links: { github: 'https://github.com/pinarkarakoyun/mustan-tailoring' },
  },
  {
    id: 'studio-booking',
    title: 'Studio Booking',
    status: 'in-progress',
    problem: {
      tr: 'Mahalle pilates stüdyolarında dersler WhatsApp ve tablolarla ayarlanıyor. Müşteri hangi derste yer olduğunu soruyor, hoca kontenjanı, iptalleri ve telafi derslerini elle takip ediyor.',
      en: 'Neighborhood Pilates studios run their classes through WhatsApp and spreadsheets. Members have to ask which class has room, and the owner tracks capacity, cancellations and make-up classes by hand.',
    },
    solution: {
      tr: 'Mobil öncelikli bir rezervasyon sistemi: her üyenin sabit bir grubu var, gelemediği dersi iptal edip telafi hakkı kazanıyor ve bu hakkı boş yeri olan başka bir derste kullanıyor. Stüdyo sahibi grupları, kontenjanı ve kuralları tek bir panelden yönetiyor.',
      en: 'A mobile-first booking system: every member has a fixed group, cancels a class they can’t attend to earn a make-up credit, and uses it in any other class with a free spot. The owner manages groups, capacity and rules from one admin panel.',
    },
    tech: ['React', 'Vite', 'Node.js', 'Express', 'PostgreSQL', 'Docker'],
    links: { github: 'https://github.com/pinarkarakoyun/studio-booking' },
  },
  {
    id: 'personal-finance-tracker',
    title: 'Personal Finance Tracker',
    status: 'done',
    problem: {
      tr: 'Gelir ve giderleri not defterinde ya da kafada tutmak ay sonunda paranın nereye gittiğini görmeyi zorlaştırıyor.',
      en: 'Keeping income and expenses in a notebook, or just in your head, makes it hard to see where the money went by the end of the month.',
    },
    solution: {
      tr: 'Kullanıcı girişi olan bir web uygulaması: işlemler kategorilere ayrılıyor, filtrelenip aranabiliyor, aylık özet ve harcama grafiği gösteriliyor. Tarayıcıdan REST API’ye ve veritabanına kadar bütün zinciri kendim kurdum.',
      en: 'A web app with user accounts: transactions are grouped into categories, can be filtered and searched, and a monthly summary with a spending chart is shown. I built the whole chain myself, from the browser to the REST API and the database.',
    },
    tech: ['JavaScript', 'Node.js', 'Express', 'SQL Server', 'JWT', 'Chart.js', 'Docker'],
    links: { github: 'https://github.com/pinarkarakoyun/personal-finance-tracker' },
  },
  {
    id: 'ebassist',
    title: 'eBAssist Chatbot',
    status: 'done',
    context: { tr: 'Staj projesi · AGT', en: 'Internship project · AGT' },
    problem: {
      tr: 'Şirket çalışanları eBA iş akışı platformu ve kurumsal süreçler hakkındaki bilgilere hızlıca ulaşmakta zorlanıyordu.',
      en: 'Employees found it hard to quickly reach information about the eBA workflow platform and internal processes.',
    },
    solution: {
      tr: 'Kurumsal kullanıcıların sorularını yanıtlayan bir chatbot geliştirdim; arayüzünü ve kullanıcı etkileşimlerini tasarladım.',
      en: 'I developed a chatbot that answers employees’ questions, and designed its interface and user interactions.',
    },
    tech: ['HTML', 'CSS', 'JavaScript'],
    links: { github: null },
  },
  {
    id: 'campusmatch',
    title: 'CampusMatch',
    status: 'planning',
    context: { tr: 'Bitirme projesi · Ekip çalışması', en: 'Capstone project · Team project' },
    problem: {
      tr: 'Öğrencinin akademik ve sosyal hayatı dağınık: sınav ve ödevler bir yerde, çalışma grubu bulmak WhatsApp gruplarında, arkadaş edinmek ise şansa kalmış.',
      en: 'A student’s academic and social life is scattered: exams and assignments in one place, study groups in WhatsApp chats, and making friends is left to chance.',
    },
    solution: {
      tr: 'Ajandayı ve ilgi profilini bir araya getiren bir kampüs platformu. Ajandaya bir sınav eklendiğinde aynı sınava giren ve müsait saatleri uyan öğrencilerle çalışma grubu öneriyor.',
      en: 'A campus platform that combines a student’s planner with their interests. When an exam is added to the planner, it suggests a study group of classmates taking the same exam with matching free time.',
    },
    tech: [],
    links: { github: null },
  },
  {
    id: 'high-low-card-game',
    title: 'High-Low Card Game',
    status: 'done',
    context: { tr: 'Okul projesi', en: 'School project' },
    problem: {
      tr: 'Nesne yönelimli programlamayı gerçekten anlamak için kuralları ve durumu olan küçük ama eksiksiz bir uygulama yazmak istedim.',
      en: 'I wanted to truly understand object-oriented programming by building a small but complete application with rules and state.',
    },
    solution: {
      tr: 'Kart, deste ve el sınıflarıyla modellenmiş, Swing arayüzlü bir "büyük mü küçük mü" kart oyunu.',
      en: 'A "higher or lower" card game with a Swing interface, modeled with Card, Deck and Hand classes.',
    },
    tech: ['Java', 'Swing', 'OOP'],
    links: { github: null },
  },
]
