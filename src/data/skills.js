// Yetenekler gruplar hâlinde. Grup adları iki dilde, yetenek adları evrensel.

export const skillGroups = [
  {
    title: { tr: 'Programlama', en: 'Programming' },
    items: ['Java', 'Python', 'C', 'JavaScript', 'SQL'],
  },
  {
    title: { tr: 'Web', en: 'Web' },
    items: ['HTML', 'CSS', 'React', 'Node.js', 'Express'],
  },
  {
    title: { tr: 'Veritabanı', en: 'Databases' },
    items: ['SQL Server', 'T-SQL', 'PostgreSQL', 'Azure Data Studio'],
  },
  {
    title: { tr: 'Süreç & Otomasyon', en: 'Process & Automation' },
    items: ['RPA', 'n8n', 'Paperwork BPM', 'SAP', 'eBA', 'Draw.io', 'Agile / Scrum'],
  },
  {
    title: { tr: 'Araçlar', en: 'Tools' },
    items: ['Git', 'Docker', 'MS Excel', 'Canva'],
  },
  {
    title: { tr: 'Yapay Zekâ Araçları', en: 'AI Tools' },
    items: ['Claude', 'ChatGPT', 'Google Gemini', 'AI Agents'],
  },
  {
    title: { tr: 'Temel Mühendislik', en: 'Core Engineering' },
    items: ['OOP', { tr: 'Veri Yapıları ve Algoritmalar', en: 'Data Structures & Algorithms' }],
  },
]

export const languages = [
  { name: { tr: 'Türkçe', en: 'Turkish' }, level: { tr: 'Ana dil', en: 'Native' } },
  { name: { tr: 'İngilizce', en: 'English' }, level: { tr: 'B2', en: 'B2' } },
  { name: { tr: 'Almanca', en: 'German' }, level: { tr: 'A1', en: 'A1' } },
]
