// Yetenekler gruplar hâlinde. Grup adları iki dilde, yetenek adları evrensel.
// id: envanter penceresinin başlığında görünür (inventory/<id>)

export const skillGroups = [
  {
    id: 'programming',
    title: { tr: 'Programlama', en: 'Programming' },
    items: ['Java', 'Python', 'C', 'JavaScript', 'SQL'],
  },
  {
    id: 'web',
    title: { tr: 'Web', en: 'Web' },
    items: ['HTML', 'CSS', 'React', 'Node.js', 'Express'],
  },
  {
    id: 'database',
    title: { tr: 'Veritabanı', en: 'Databases' },
    items: ['SQL Server', 'T-SQL', 'PostgreSQL', 'Azure Data Studio'],
  },
  {
    id: 'automation',
    title: { tr: 'Süreç & Otomasyon', en: 'Process & Automation' },
    items: ['RPA', 'n8n', 'Paperwork BPM', 'SAP', 'eBA', 'Draw.io', 'Agile / Scrum'],
  },
  {
    id: 'tools',
    title: { tr: 'Araçlar', en: 'Tools' },
    items: ['Git', 'Docker', 'MS Excel', 'Canva'],
  },
  {
    id: 'ai',
    title: { tr: 'Yapay Zekâ', en: 'AI' },
    items: ['Claude', 'ChatGPT', 'Google Gemini', 'AI Agents', 'Prompt Engineering'],
  },
  {
    id: 'core',
    title: { tr: 'Temel Mühendislik', en: 'Core Engineering' },
    items: ['OOP', { tr: 'Veri Yapıları ve Algoritmalar', en: 'Data Structures & Algorithms' }],
  },
]

// bars: 5 üzerinden dolu kutu sayısı (CEFR: A1=1 … C1/C2=5, ana dil=5)
export const languages = [
  { name: { tr: 'Türkçe', en: 'Turkish' }, level: { tr: 'Ana dil', en: 'Native' }, bars: 5 },
  { name: { tr: 'İngilizce', en: 'English' }, level: { tr: 'B2', en: 'B2' }, bars: 4 },
  { name: { tr: 'Almanca', en: 'German' }, level: { tr: 'A1', en: 'A1' }, bars: 1 },
]
