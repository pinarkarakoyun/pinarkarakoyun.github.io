// Pınar'ın piksel art avatarı: 64x80 ızgara, chibi oranlar (GitHub profil resmindeki gibi),
// masada laptop ve kahve.
// Her satır bir dize, her karakter bir piksel. Karakterin rengi aşağıdaki palette'te.
// Bir pikseli değiştirmek için sadece o karakteri değiştir, başka bir şeye dokunmana gerek yok.

export const palette = {
  '.': null, // şeffaf
  K: '#2b193d', // dış çizgi (Midnight Violet)
  H: '#c45a28', // saç (bakır)
  h: '#8a3a1a', // saç gölgesi
  L: '#ec9256', // saç parlaması (bukleler)
  S: '#f6d2b8', // ten
  s: '#e3ad8f', // ten gölgesi
  F: '#c9845f', // çil
  B: '#f4b0a6', // yanak pembeliği
  e: '#2a2547', // göz (koyu lacivert, GitHub fotoğrafındaki gibi)
  W: '#ffffff', // göz parlaması
  M: '#a8444f', // dudak çizgisi
  n: '#d9967a', // burun
  R: '#6ee7b7', // kazak (neon nane)
  r: '#3fb98c', // kazak gölgesi / yaka
  T: '#b07a52', // masa üstü
  U: '#8a5a3b', // masa önü
  u: '#6b4430', // masa gölgesi
  G: '#2e4384', // laptop kapağı (gece yarısı mavisi)
  g: '#1f2d5e', // laptop gölgesi
  Y: '#f2c14e', // ayçiçeği çıkartması
  C: '#6b3a1c', // ayçiçeği göbeği
  O: '#f29e4c', // güneş çıkartması
  N: '#2fa77a', // </> çıkartması
  P: '#ff8fb8', // kalp çıkartması / kedinin burnu
  w: '#a3a3b5', // kedi çıkartması (gri)
  A: '#4b8f8c', // kupa (Dark Cyan)
  a: '#356a68', // kupa gölgesi
  D: '#5a3420', // kahve
  V: '#e4def0', // buhar
}

export const pixels = [
  '................................................................',
  '................................................................',
  '................................................................',
  '................................................................',
  '................................................................',
  '................................................................',
  '................................................................',
  '................................K...............................',
  '..........................KKKKKKHKKKKKK.........................',
  '........................KKHHHHHHHHHhHHHKK.......................',
  '......................KKHLLHHHHLLHHhHLLHHKK.....................',
  '.....................KHHLHHhHHLHHhHhLHHhHHLK....................',
  '....................KHHHLHHHHHLHHHHhLHHHHHLHK...................',
  '...................KhHHHHhhHHHHhhHHhHhhHHHHhhK..................',
  '..................KHHHHHHHHHHHHHHHHhHHHHHHHHHHK.................',
  '.................KHHHHLLHHHHLLHHHHLhHHHHLLHHHHLK................',
  '................KHhHHLHHhHHLHHhHHLHHhHHLHHhHHLHHK...............',
  '...............KHHHHHLHHHHHLHHHHHLHHHHHLHHHHHLHHHK..............',
  '..............KHhhHHHHhhHHHHhhHHHHhhHHHHhhHHHHhhHHK.............',
  '..............KHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHK.............',
  '.............KLHHHHLLHHHHLLHHHHLLHHHHLLHHHHLLHHHHLLK............',
  '.............KHhHHLHHhHHLHHhHHLHHhHHLHHhHHLHHhHHLHHK............',
  '.............KHHHHLHHHHHLHHHHHLHHHHHLHHHHHLHHHHHLHHK............',
  '............KhhHHHHhhHHHHhhHHhHhhHHHHhhHHHHhhHHHHhhHK...........',
  '............KHHHHHHHHHHHHHhhhShhHHHHHHHHhhHHHHHHHHHHK...........',
  '............KHHHLLHHHHLLHhSSSSSShhLLHHHhSShHHHLLHHHHK...........',
  '............KHHLHHhHHLHhhSSSSSSSSShhhhhSSSShHLHHhHHLK...........',
  '............KHHLHHHHHhhSSSSSSSSSSSSSSSSSSSSShLHHHHHLK...........',
  '.........KKKKHHHhhHHhSSSShhhhSSSSSSShhhhSSSShHhhHHHHK...........',
  '........KHHHHHHHHHHhSSSShSSSSSSSSSSSSSSShSSSShHHHHHHHK..........',
  '.......KLHHHHLLHHHHhSSSKSSSSSSSSSSSSSSSSSKSSShHHHLLHHK..........',
  '.......KHhHHLHHhHHLhSSSSKKKKKSSSSSSSKKKKKSSSShHHLHHhHKKK........',
  '......KHHHHHLHHHHHLhSSSSSeWWeSSSSSSSeWWeSSSSShHHLHHHHHLHK.......',
  '.......KhHHHHhhHHHhSSSSSSeWeeSSSSSSSeWeeSSSSSShHHhhHHHHhhK......',
  '.......KHHHHHHHHHHHhSSSSSeeWeSSSSSSSeeWeSSSSShHHHHHHHHHHHK......',
  '........KHLLHHHHLLHhSSSSSSeeSSSSSSSSSeeSSSSSShLLHHHHLLHHHHK.....',
  '.......KHLHHhHHLHHhhSSSSSSSSSSSSSSSSSSSSSSSSShHHhHHLHHhHHK......',
  '.......KHLHHHHHLHHHhSSSFSSSFSSSSnSSSSFSSSFSSShHHHHHLHHHHHK......',
  '......KHHHhhHHHHhhHHhSSBBFBSSSSnSSSSSSBFBBSShHhhHHHHhhHHK.......',
  '.......KHHHHHHHHHHHHhSSBFBBSSSSSSSSSSSBBFBSShHHHHHHHHHHHHK......',
  '.......KLHHHHLLHHHHLLhSSSSSSSMSSSSSMSSSSSSShLHHHHLLHHHHLLK......',
  '........KhHHLHHhHHLHHhhSSSSSSSMMMMMSSSSSSShHHhHHLHHhHHLHHhK.....',
  '.......KHHHHLHHHHHLHHHHhSSSSSSSSSSSSSSSSShLHHHHHLHHHHHLHHK......',
  '.......KhHHHHhhHHHHhhHHHhhSSSSSSSSSSSSShhHHhhHHHHhhHHHHhhK......',
  '......KHHHHHHHHHHHHHHHHHHHhhhssssssshhhHHHHHHHHHHHHHHHHHK.......',
  '.......KHHLLHHHHLLHHHHLLHHHHhssssssshHHHLLHHHHLLHHHHLLHHHK......',
  '.......KHLHHhHHLHHhHHLHHhHHLhSSSSSSShHHLHHhHHLHHhHHLHHhHHK......',
  '........KLHHHHHLHHHHHLHHHHHLhSSSSSSShHHLHHHHHLHHHHHLHHHHHLK.....',
  '.......KHHhhHHHHhhHHHHhhHRRrRSSSSSSSRrRRhhHHHHhhHHHHhhHHHK......',
  '.......KHHHHHHHHHHHHHHHRRRRRrrrrrrrrrRRRRRHHHHHHHHHHHHHHHK......',
  '......KLLHHHHLLHKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKLLHHHHLK.......',
  '.......KHhHHLHHhKGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGgKHHhHHLHHK......',
  '.......KHHHHLHHHKGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGgKHHHHHLHHK......',
  '........KHHHHhhHKGGGGYGYGGGGGGGGGGGGGGOGOGOGGGGgKhhHHHHhVHK.....',
  '.......KHHHHHHHHKGGGYYYYYGGGGGNGGGNGGGGOOOGGGGGgKHHHVHHVHK......',
  '.......KHHLLHHHHKGGGGYCYGGGGGNGGNGGNGGOOOOOGGGGgKHHHLVHHV.......',
  '......KHHLHHhHHLKGGGYYYYYGGGNGGGNGGGNGGOOOGGGGGgKHHLVHhV........',
  '.......KHLHHHHHLKGGGGYGYGGGGGNGNGGGNGGOGOGOGGGGgKHHLHVHHV.......',
  '.......KHHhhHHHHKGGGGGGGGGGGGGNNGGNGGGGGGGGGGGGgKHHHVhHVHK......',
  '........KHHHHHHHKGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGgKHKKKKKKKKK.....',
  '.........KKKHLLHKGGGGPPGPPGGGGGGGGGGwGGGwGGGGGGgKLKDDDDDDDK.....',
  '...........KLHHhKGGGGPPPPPGGGGGGGGGGwwGwwGGGGGGgKKKaAAAAAAKK....',
  '............KHHHKGGGGPPPPPGGGGGGGGGGwwwwwGGGGGGgKKKaAAAAAAAAK...',
  '.............KhHKGGGGGPPPGGGGGGGGGGGwKwKwGGGGGGgKKKaAAAAAAKAK...',
  '..............KKKGGGGGGPGGGGGGGGGGGGwwPwwGGGGGGgKKKaAAAAAAKAK...',
  '...............KKGGGGGGGGGGGGGGGGGGGGwwwGGGGGGGgKKKaAAAAAAAAK...',
  '...............KKGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGgKKKaAAAAAAKK....',
  'KKKKKKKKKKKKKKKKKgggggggggggggggggggggggggggggggKKKaAAAAAAKKKKKK',
  'TTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTT',
  'TTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTT',
  'TTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTT',
  'uuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuu',
  'UUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUU',
  'UUUUuUUUUUUUUuUUUUUUUUuUUUUUUUUuUUUUUUUUuUUUUUUUUuUUUUUUUUuUUUUU',
  'UUUUuUUUUUUUUuUUUUUUUUuUUUUUUUUuUUUUUUUUuUUUUUUUUuUUUUUUUUuUUUUU',
  'UUUUuUUUUUUUUuUUUUUUUUuUUUUUUUUuUUUUUUUUuUUUUUUUUuUUUUUUUUuUUUUU',
  'UUUUuUUUUUUUUuUUUUUUUUuUUUUUUUUuUUUUUUUUuUUUUUUUUuUUUUUUUUuUUUUU',
  'UUUUuUUUUUUUUuUUUUUUUUuUUUUUUUUuUUUUUUUUuUUUUUUUUuUUUUUUUUuUUUUU',
  'UUUUuUUUUUUUUuUUUUUUUUuUUUUUUUUuUUUUUUUUuUUUUUUUUuUUUUUUUUuUUUUU',
  'UUUUuUUUUUUUUuUUUUUUUUuUUUUUUUUuUUUUUUUUuUUUUUUUUuUUUUUUUUuUUUUU',
]
