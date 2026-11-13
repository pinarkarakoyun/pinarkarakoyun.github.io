// Avatarın hareketli katmanları. Her katman avatar ızgarasının (64x80) üstüne, verilen
// konuma oturan küçük bir piksel ızgarası. Konum ve boyut avatar pikseli cinsinden.

// ---------- Kahve buharı: kupanın üstünde kıvrılarak yükselen iki tutam ----------
// 3 kare; her karede tutamlar bir sıra yukarı kaymış gibi görünür. 'v' = soluk uç.
export const steam = {
  x: 51,
  y: 51,
  palette: { '.': null, V: '#e4def0', v: '#bdb4cf' },
  frames: [
    ['..v...v', '.v...v.', '.V...V.', '..V...V', '..V...V', '.V...V.', '.V...V.', '..V...V'],
    ['.v...v.', '..v...v', '..V...V', '.V...V.', '.V...V.', '..V...V', '..V...V', '.V...V.'],
    ['..v...v', '..v...v', '.V...V.', '.V...V.', '..V...V', '..V...V', '.V...V.', '.V...V.'],
  ],
}

// ---------- Göz kırpma: gözlerin üstüne kısa süre "kapalı göz" ----------
// Ten rengi açık gözleri örter; koyu çizgi kapanmış göz kapağı ve kirpik.
// Izgara x=22..41, y=30..35 bölgesini kaplar (kaşlar dokunulmadan kalır).
const S = 'S'
const row = (pattern) => pattern.replaceAll(' ', S)
export const blink = {
  x: 22,
  y: 30,
  palette: { '.': null, S: '#f6d2b8', K: '#2b193d' },
  pixels: [
    row('                    '),
    row('                    '),
    row('  K               K '),
    row('   KKKK       KKKK  '),
    row('                    '),
    row('                    '),
  ],
}
