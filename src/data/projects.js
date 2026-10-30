// Projeler: her biri "Problem → Çözüm" kartı olarak gösterilir.
// status: 'done' | 'prototype' | 'in-progress' | 'planning'
//   Rozet metni ve rengi bu anahtardan üretilir (Adım 8).
// context: projenin türü (staj, ekip, okul...). Gerekmiyorsa yazılmaz.
// progress: devam eden projelerde şimdiye kadar yapılanlar. Gerekmiyorsa yazılmaz.
// next: sıradaki hedef / yol haritası notu. Gerekmiyorsa yazılmaz.
// links.github: repo yoksa null.
// image: kartın üstündeki ekran görüntüsü (public/projects altında, 960x600). Gerekmiyorsa yazılmaz.

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
    image: {
      src: 'projects/mustan-tailoring.jpg',
      alt: {
        tr: 'İki ekran: Mustan Tailoring tanıtım sitesinin ana sayfası ve “teslime hazır” durumundaki bir siparişin müşteri takip sayfası',
        en: 'Two screens: the Mustan Tailoring home page and the customer tracking page of an order that is ready for pickup',
      },
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
    progress: {
      tr: 'Çalışan kısımlar: üye girişi, ders iptali ve telafi seçimi, yönetici paneli (bugünün dersleri, üyeler, gruplar, üyelik ve ödeme takibi, kurallar) ve tanıtım sayfası. Aynı son yere iki kişinin aynı anda yazılması veritabanı düzeyinde engelleniyor.',
      en: 'Working so far: member login, cancelling and booking make-up classes, an admin panel (today’s classes, members, groups, memberships and payments, rules) and a landing page. Two people can never take the same last spot: booking is locked at the database level.',
    },
    image: {
      src: 'projects/studio-booking.jpg',
      alt: { tr: 'İki telefon ekranı: üyenin sıradaki dersi ve yöneticinin bugünkü dersleri', en: "Two phone screens: a member's next class and the admin's classes for today" },
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
    image: {
      src: 'projects/personal-finance-tracker.jpg',
      alt: { tr: 'Aylık gelir, gider ve kalan tutarı ile harcama grafiğini gösteren panel', en: "Dashboard with monthly income, expenses, balance and a spending chart" },
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
    id: 'recampus',
    title: 'RECAMPUS',
    status: 'planning',
    context: { tr: 'Bitirme projesi · 4 kişilik ekip · Proje yönetimi', en: 'Capstone project · Team of 4 · Project management' },
    problem: {
      tr: 'Öğrenciler dönem sonunda ders kitabı, lamba gibi eşyaları kullanmadan bırakıyor; ihtiyacı olan başka öğrenciler aynısını sıfırdan alıyor. Genel ikinci el sitelerinde öğrenciye özel güven, ders bazlı arama ve takas desteği yok.',
      en: 'At the end of each term, students leave behind textbooks, lamps and other items, while other students buy the same things new. General second-hand sites offer no student-only trust, no course-based search and no swapping.',
    },
    solution: {
      tr: 'Üniversite e-postasıyla doğrulanan öğrencilerin satış, takas, ücretsiz verme ve “aranıyor” ilanlarını tek bir yapıda paylaştığı bir kampüs pazar yeri. Yeniden kullanılan, takas edilen ve verilen ürün sayısı, gerçek platform verisinden hesaplanan sürdürülebilirlik sayaçlarıyla gösteriliyor.',
      en: 'A campus marketplace where students verified by their university email post sell, swap, give-away and “wanted” listings in a single structure. Sustainability counters show how many items were reused, swapped or given away, calculated from real platform data.',
    },
    progress: {
      tr: 'Proje raporunu ve yol haritasını hazırladım: kapsam kuralları, Must / Should / Nice öncelikleri ve iki dönemlik özellik planı. Geliştirme bu planla başlayacak.',
      en: 'I prepared the project report and roadmap: scope rules, Must / Should / Nice priorities and a two-term feature plan. Development will start from this plan.',
    },
    tech: [],
    links: { github: null },
  },
  {
    id: '8051-led-matrix',
    title: '8051 Scrolling LED Matrix',
    status: 'done',
    context: { tr: 'Ders projesi · Mikroişlemciler', en: 'Course project · Microprocessors' },
    problem: {
      tr: 'Sadece 3 mikrodenetleyici pini kullanarak 32 sütunluk bir LED ekranda kayan yazı göstermek ve bunu butonlarla kontrol etmek.',
      en: 'Show scrolling text on a 32-column LED display using only 3 microcontroller pins, and control it with buttons.',
    },
    solution: {
      tr: 'AT89C51 (8051) üzerinde, zincirleme bağlı dört 74HC595 kaydırma yazmacıyla dört 8x8 LED matrisi süren bir kayan yazı panosu. Bir buton yazıyı durdurup başlatıyor, diğeri üç hız arasında geçiş yapıyor; her şey kesmelerle (interrupt) çalışıyor.',
      en: 'A scrolling message board on an AT89C51 (8051) driving four 8x8 LED matrices through four daisy-chained 74HC595 shift registers. One button pauses and resumes, the other cycles three speeds; everything runs on interrupts.',
    },
    tech: ['C', '8051', 'Keil uVision', 'Proteus', 'Interrupts'],
    links: { github: 'https://github.com/pinarkarakoyun/8051-scrolling-led-matrix' },
  },
  {
    id: 'java-oop-projects',
    title: 'Java OOP Projects',
    status: 'done',
    context: { tr: 'Ders projeleri · Nesne yönelimli programlama', en: 'Coursework · Object-oriented programming' },
    problem: {
      tr: 'Nesne yönelimli programlamanın temel fikirlerini (kalıtım, çok biçimlilik, olay yönetimi) küçük ama çalışan programlarla pekiştirmek.',
      en: 'Practise the core ideas of object-oriented programming (inheritance, polymorphism, event handling) with small but working programs.',
    },
    solution: {
      tr: 'Üç bağımsız program: ondalık, ikilik ve onaltılık modlu, bit işlemleri yapabilen Swing arayüzlü bir programcı hesap makinesi; bilgisayara karşı konsol Tic-Tac-Toe; ve kitap, roman, dergi gibi okuma materyallerinden oluşan bir sınıf hiyerarşisi.',
      en: 'Three standalone programs: a Swing programmer calculator with decimal, binary and hexadecimal modes and bitwise operations; console Tic-Tac-Toe against the computer; and a class hierarchy of reading materials such as books, novels and magazines.',
    },
    tech: ['Java', 'Swing', 'OOP'],
    links: { github: 'https://github.com/pinarkarakoyun/java-oop-projects' },
  },
  {
    id: 'high-low-card-game',
    title: 'High-Low Card Game',
    status: 'in-progress',
    context: { tr: 'Okul projesi', en: 'School project' },
    problem: {
      tr: 'Nesne yönelimli programlamayı gerçekten anlamak için kuralları ve durumu olan küçük ama eksiksiz bir uygulama yazmak istedim.',
      en: 'I wanted to truly understand object-oriented programming by building a small but complete application with rules and state.',
    },
    solution: {
      tr: 'Kart, deste ve el sınıflarıyla modellenmiş, Swing arayüzlü bir "büyük mü küçük mü" kart oyunu.',
      en: 'A "higher or lower" card game with a Swing interface, modeled with Card, Deck and Hand classes.',
    },
    next: {
      tr: 'Oyunu tamamlayıp kendi reposunda GitHub’a yüklemek.',
      en: 'Finish the game and publish it in its own GitHub repository.',
    },
    tech: ['Java', 'Swing', 'OOP'],
    links: { github: null },
  },
]
