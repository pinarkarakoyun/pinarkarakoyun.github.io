// CV PDF'lerini üretir: npm run cv
//
// 1. Siteyi derler (vite build) ve geçici bir sunucuda açar (vite preview).
// 2. cv.html sayfasını bilgisayardaki Chrome ile, ek paket kurmadan PDF'e yazdırır.
// 3. Her PDF'in tek sayfa olduğunu kontrol eder.
//
// Çıktılar:
//   public/cv/pinar-karakoyun-cv-{tr,en}.pdf          → telefonsuz, sitede indirilebilir (commit'lenir)
//   cv-private/pinar-karakoyun-cv-{tr,en}-basvuru.pdf  → telefon + referanslı, sadece senin bilgisayarında
//
// Başvuru sürümü için kişisel bilgiler cv.private.json'dan okunur (Git'e girmez;
// örnek biçim cv.private.example.json'da). Dosya yoksa sadece public sürümler üretilir.
// Chrome başka bir yerdeyse: CHROME_PATH=/yol/chrome npm run cv

import { execFileSync, spawn } from 'node:child_process'
import { existsSync, mkdirSync, mkdtempSync, readFileSync } from 'node:fs'
import { tmpdir } from 'node:os'
import { join } from 'node:path'

const PORT = 4174
const BASE = `http://localhost:${PORT}/cv.html`
const CHROME = process.env.CHROME_PATH ?? '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome'
const LANGS = ['tr', 'en']

if (!existsSync(CHROME)) {
  console.error(`Chrome bulunamadı: ${CHROME}\nCHROME_PATH ile yolunu verebilirsin.`)
  process.exit(1)
}

const privateInfo = existsSync('cv.private.json') ? JSON.parse(readFileSync('cv.private.json', 'utf8')) : null

// Başvuru sürümünün adres parametreleri (sadece bu bilgisayarda, geçici sunucuya gider)
function privateParams(lang) {
  const { phone, reference } = privateInfo
  return new URLSearchParams({
    phone,
    refName: reference.name,
    refTitle: reference.title[lang],
    refContact: reference.contact,
  })
}

// PDF içindeki sayfa nesnelerini sayar ("/Type /Pages" hariç)
function countPages(file) {
  return (readFileSync(file, 'latin1').match(/\/Type\s*\/Page(?!s)/g) ?? []).length
}

async function waitForServer(url, tries = 50) {
  for (let i = 0; i < tries; i++) {
    try {
      if ((await fetch(url)).ok) return
    } catch {
      // Sunucu henüz hazır değil
    }
    await new Promise((resolve) => setTimeout(resolve, 200))
  }
  throw new Error(`Sunucu açılmadı: ${url}`)
}

function printPdf(url, out, profileDir) {
  execFileSync(CHROME, [
    '--headless=new',
    '--disable-gpu',
    '--no-pdf-header-footer',
    '--virtual-time-budget=5000', // React'in sayfayı çizmesini bekle
    `--user-data-dir=${profileDir}`, // açık olan Chrome'unla çakışmasın
    `--print-to-pdf=${out}`,
    url,
  ], { stdio: 'ignore' })
}

execFileSync('npx', ['vite', 'build'], { stdio: 'inherit' })

const server = spawn('npx', ['vite', 'preview', '--port', String(PORT), '--strictPort'], { stdio: 'ignore' })
const profileDir = mkdtempSync(join(tmpdir(), 'cv-chrome-'))
let failed = false

try {
  await waitForServer(BASE)
  mkdirSync('public/cv', { recursive: true })

  const jobs = LANGS.map((lang) => ({ url: `${BASE}?lang=${lang}`, out: `public/cv/pinar-karakoyun-cv-${lang}.pdf` }))
  if (privateInfo) {
    mkdirSync('cv-private', { recursive: true })
    for (const lang of LANGS) {
      jobs.push({
        url: `${BASE}?lang=${lang}&${privateParams(lang)}`,
        out: `cv-private/pinar-karakoyun-cv-${lang}-basvuru.pdf`,
      })
    }
  } else {
    console.log('cv.private.json yok: başvuru sürümü atlandı.')
  }

  for (const { url, out } of jobs) {
    printPdf(url, out, profileDir)
    const pages = countPages(out)
    const ok = pages === 1
    if (!ok) failed = true
    console.log(`${ok ? '✓' : '✗'} ${out} (${pages} sayfa)`)
  }
} finally {
  server.kill()
}

if (failed) {
  console.error('\nBir CV birden fazla sayfa oldu: src/data/cv.js içindeki metinleri kısaltmayı dene.')
  process.exit(1)
}
