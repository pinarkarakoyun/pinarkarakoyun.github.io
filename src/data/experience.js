// Deneyim, eğitim ve sertifikalar. En yeni en üstte.

export const experience = [
  {
    company: 'Talya Bilişim · Elektraweb',
    role: {
      tr: 'Stajyer · Kalite Yönetimi ve Yazılım',
      en: 'Intern · Quality Management and Software',
    },
    period: { tr: 'Ekim 2026 – Devam ediyor', en: 'October 2026 – Present' },
    current: true,
    location: 'Antalya',
    highlights: {
      tr: [
        'TÜBİTAK 1501 Sanayi Ar-Ge programından destek alan Talya QMS-AI projesinin ekibinde stajyer olarak yer alıyorum. Proje, otellerdeki kalite sorunlarının kök nedenlerini yapay zekâ ile bulup risklere karşı erken uyarı vermeyi hedefliyor.',
        'Elektra QM (kalite yönetimi) sistemi için modül modül kullanıcı kılavuzu hazırladım; insan kaynakları, doküman yönetimi gibi ekranların nasıl kullanılacağını adım adım anlattım.',
        'Elektraweb için rakip ve pazar analizi raporu hazırladım.',
        'QM sistemi üzerindeki çalışmalarıma devam ediyorum.',
      ],
      en: [
        'Part of the team, as an intern, on Talya QMS-AI, a project funded by TÜBİTAK’s 1501 Industrial R&D program. It uses AI to find root causes of quality issues in hotels and give early warnings about risks.',
        'Wrote a module-by-module user guide for the Elektra QM (quality management) system, explaining step by step how to use screens such as human resources and document management.',
        'Prepared a competitor and market analysis report for Elektraweb.',
        'Continuing my work on the QM system.',
      ],
    },
  },
  {
    company: 'ANKUTSAN A.Ş.',
    role: {
      tr: 'Stajyer · Süreç Geliştirme / Bilgi Teknolojileri',
      en: 'Intern · Process Development / Information Technology',
    },
    period: { tr: 'Temmuz 2026 – Eylül 2026', en: 'July 2026 – September 2026' },
    location: 'Antalya',
    highlights: {
      tr: [
        'SAP Ürün Kartı parametrelerini JavaScript ile kullanıcı dostu, modüler ve dinamik bir forma dönüştürdüm.',
        'Paperwork BPM platformunda çok kademeli müşteri onay akışları modelledim; süreçleri Draw.io ile şemalandırdım.',
        'Üretim verilerini SAP ERP tüketim kayıtlarıyla eşleştirip hammadde sapma analizleri hazırladım.',
        'n8n üzerindeki filo takip entegrasyonunu canlı araç verileriyle uçtan uca test ettim.',
        'BT ekibinde Active Directory yapısını inceledim, şirketin yerel yapay zekâsı için kıyaslama analizleri yaptım ve ekibe IoT üzerine bir seminer sundum.',
      ],
      en: [
        'Turned SAP product card parameters into a user-friendly, modular and dynamic form using JavaScript.',
        'Modeled multi-level customer approval workflows on the Paperwork BPM platform and mapped processes with Draw.io.',
        'Matched production data with SAP ERP consumption records and prepared raw material deviation analyses.',
        'Tested the fleet tracking integration on n8n end to end with live vehicle data.',
        "On the IT team, studied the Active Directory setup, ran benchmark analyses for the company's in-house AI and gave the team a seminar on IoT.",
      ],
    },
  },
  {
    company: 'AGT Ağaç Sanayi ve Ticaret A.Ş.',
    role: {
      tr: 'Stajyer · Kurumsal Uygulamalar',
      en: 'Intern · Enterprise Applications',
    },
    period: { tr: 'Temmuz 2025 – Ağustos 2025', en: 'July 2025 – August 2025' },
    location: 'Antalya',
    highlights: {
      tr: [
        'Şirketin doküman yönetim platformu eBA için bir chatbot arayüzünü (eBAssist) HTML, CSS ve JavaScript ile sıfırdan tasarlayıp geliştirdim.',
        'Projeyi ekibe sunup geri bildirim aldım ve işlevsellik için öneriler geliştirdim.',
        'Yazılım geliştirme süreçlerini ve kullanıcı deneyimi odaklı düşünmeyi kurum içinde yakından gözlemledim.',
      ],
      en: [
        "Designed and built a chatbot interface (eBAssist) from scratch for the company's eBA document management platform, using HTML, CSS and JavaScript.",
        'Presented the project to the team, gathered feedback and proposed functional improvements.',
        'Observed software development processes and UX-oriented thinking up close in a corporate setting.',
      ],
    },
  },
]

export const education = [
  {
    school: { tr: 'Antalya Bilim Üniversitesi', en: 'Antalya Bilim University' },
    degree: { tr: 'Bilgisayar Mühendisliği', en: 'Computer Engineering' },
    period: { tr: '2022 – Devam ediyor', en: '2022 – Present' },
  },
]

// Sertifikalar, veren kuruma göre gruplu. Kaynak: CV + LinkedIn "Lisanslar ve sertifikalar".
// En çok sertifika olan kurum en üstte.
export const certificates = [
  {
    issuer: 'IBM SkillsBuild',
    items: [
      'IBM AI Agents Bootcamp',
      'Unleashing the Power of AI Agents',
      'Foundations in Generative AI',
      'Creating an Elevator Pitch Using Generative AI',
      'Exploring Artificial Intelligence',
      'Interacting with AI',
      'AI Literacy',
      'Exploring Cybersecurity',
    ],
    year: 2026,
  },
  {
    issuer: 'BTK Akademi',
    items: [
      'Versiyon Kontrolleri: Git ve GitHub',
      'Çevik Proje Yönetimi',
      'API ve API Testi',
      'Turkcell Robotik Süreç Otomasyonu (RPA)',
      'Anthropic Claude',
      'ChatGPT',
    ],
    year: 2026,
  },
  {
    issuer: 'İş Bankası ProSchool · Toptalent.co',
    items: ['Digital Banking', 'Data & AI Class', 'IT Class'],
    year: 2026,
  },
  {
    issuer: 'Anthropic Academy',
    items: ['Claude 101'],
    year: 2026,
  },
  {
    issuer: 'Kodluyoruz',
    items: ['IBM AI Agents Bootcamp'],
    year: 2026,
  },
  {
    issuer: 'Kariyer.net',
    items: [
      'Yapay Zeka Araçları ile Eğitim Tasarımı',
      'Yapay Zekâ ile İç Eğitmenlik Süreçlerini Verimli Hale Getirmek',
    ],
    year: 2026,
  },
]
