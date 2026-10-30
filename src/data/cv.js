// CV'ye özel kısa metinler. Ad, iletişim, tarihler, yetenekler ve sertifikalar sitenin diğer
// veri dosyalarından gelir; burada sadece 1 sayfaya sığması için kısaltılmış anlatımlar var.

export const cv = {
  summary: {
    tr: 'Antalya Bilim Üniversitesi Bilgisayar Mühendisliği 4. sınıf öğrencisiyim. Çevremde gördüğüm gerçek problemlere yazılımla çözüm üretiyorum: bir terzi dükkânı için QR kodlu sipariş takibi, bir pilates stüdyosu için rezervasyon sistemi. Stajlarımda kurumsal uygulamalar, süreç otomasyonu (RPA, SAP) ve yapay zekâ destekli kalite yönetimi üzerine çalıştım.',
    en: 'Senior Computer Engineering student at Antalya Bilim University. I build software for real-life problems I see around me: QR-based order tracking for a tailoring shop and a booking system for a Pilates studio. During my internships I worked on enterprise applications, process automation (RPA, SAP) and AI-supported quality management.',
  },

  // Staj maddeleri, experience.js'teki şirket adıyla eşleşir
  experience: {
    'Talya Bilişim · Elektraweb': {
      tr: [
        'TÜBİTAK 1501 destekli Talya QMS-AI projesinin (otellerde yapay zekâ ile kalite riski tahmini) ekibinde yer alıyorum.',
        'Elektra QM kalite yönetim sistemi için modül modül kullanıcı kılavuzu hazırladım.',
        'Elektraweb için rakip ve pazar analizi raporu hazırladım.',
      ],
      en: [
        'Team member on Talya QMS-AI, a TÜBİTAK 1501-funded project that uses AI to predict quality risks in hotels.',
        'Wrote a module-by-module user guide for the Elektra QM quality management system.',
        'Prepared a competitor and market analysis report for Elektraweb.',
      ],
    },
    'ANKUTSAN A.Ş.': {
      tr: [
        'SAP Ürün Kartı parametrelerini JavaScript ile modüler ve dinamik bir forma dönüştürdüm.',
        'Paperwork BPM’de çok kademeli müşteri onay akışları modelledim.',
        'Üretim verilerini SAP ERP tüketim kayıtlarıyla eşleştirip hammadde sapma analizleri hazırladım.',
        'n8n filo takip entegrasyonunu canlı araç verileriyle uçtan uca test ettim.',
      ],
      en: [
        'Turned SAP product card parameters into a modular, dynamic form using JavaScript.',
        'Modeled multi-level customer approval workflows in Paperwork BPM.',
        'Matched production data with SAP ERP consumption records and prepared raw material deviation analyses.',
        'Tested an n8n fleet tracking integration end to end with live vehicle data.',
      ],
    },
    'AGT Ağaç Sanayi ve Ticaret A.Ş.': {
      tr: [
        'eBA doküman yönetim platformu için chatbot arayüzünü (eBAssist) HTML, CSS ve JavaScript ile sıfırdan geliştirdim; projeyi ekibe sunup geri bildirim aldım.',
      ],
      en: [
        'Built a chatbot interface (eBAssist) for the eBA document management platform from scratch with HTML, CSS and JavaScript, and presented it to the team.',
      ],
    },
  },

  // CV'de gösterilecek projeler (sırasıyla) ve tek satırlık anlatımları; id'ler projects.js ile eşleşir
  projects: [
    {
      id: 'mustan-tailoring',
      line: {
        tr: 'Hollanda’daki bir terzi dükkânı için üç dilli site ve sipariş takibi: makbuz kâğıdı yerine QR kodla takip ve tek tıkla WhatsApp bildirimi.',
        en: 'Three-language website and order tracking for a tailoring shop in the Netherlands: QR-code tracking instead of paper receipts and one-click WhatsApp notifications.',
      },
    },
    {
      id: 'studio-booking',
      line: {
        tr: 'Pilates stüdyoları için mobil öncelikli rezervasyon ve telafi dersi sistemi; yönetici paneli, üyelik ve ödeme takibi, veritabanı düzeyinde çifte rezervasyon koruması, ~130 test.',
        en: 'Mobile-first booking and make-up class system for Pilates studios; admin panel, membership and payment tracking, database-level protection against double booking, ~130 tests.',
      },
    },
    {
      id: 'personal-finance-tracker',
      line: {
        tr: 'JWT kimlik doğrulamalı gelir-gider takibi; REST API, kategori ve aylık özet, harcama grafiği.',
        en: 'Income and expense tracker with JWT authentication; REST API, categories, monthly summary and spending chart.',
      },
    },
    {
      id: 'recampus',
      line: {
        tr: 'Bitirme projesi, 4 kişilik ekipte proje yöneticisi: üniversite e-postasıyla doğrulanan öğrenciler için ikinci el, takas ve ücretsiz verme pazar yeri. Rapor ve yol haritasını hazırladım.',
        en: 'Capstone project, project manager in a team of four: a second-hand, swap and give-away marketplace for students verified by university email. I prepared the report and roadmap.',
      },
    },
    {
      id: '8051-led-matrix',
      line: {
        tr: '8051 mikrodenetleyici ile 74HC595 kaydırma yazmaçları üzerinden dört 8x8 LED matriste kesme tabanlı kayan yazı panosu.',
        en: 'Interrupt-driven scrolling message board on an 8051 microcontroller, driving four 8x8 LED matrices through 74HC595 shift registers.',
      },
    },
  ],
}
