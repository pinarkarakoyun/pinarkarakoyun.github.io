// Masada yürüyen gri kedinin kareleri. Hepsi sağa bakıyor; sola yürürken CSS ile aynalanıyor.
// 17x12 piksel: yürüme (2 kare, patiler sırayla), oturma (2 kare, kuyruk kıpırdıyor).

export const catPalette = {
  '.': null,
  k: '#2b193d', // dış çizgi
  c: '#9a9aab', // gri tüy
  l: '#c4c4d2', // açık gri (göğüs, çene)
  p: '#f4a6b8', // kulak içi, burun
  e: '#2b193d', // göz
}

// Kalp: tıklayınca kedinin başından yükselir
export const heartPixels = ['.kk.kk.', 'kPPkPPk', 'kPPPPPk', '.kPPPk.', '..kPk..', '...k...']
export const heartPalette = { '.': null, k: '#2b193d', P: '#ff8fb8' }

export const catFrames = {
  walkA: [
    '.k........k...k..',
    'kck......kckkkck.',
    'kck......kpcccpk.',
    '.kck.....kccccck.',
    '.kckkkkkkkccceck.',
    '..kccccccccccccpk',
    '..kcccccccccllck.',
    '..kccccccccckkk..',
    '..kccllllllck....',
    '..kckkckkckck....',
    '..kckkckkckck....',
    '...k..k..k.k.....',
  ],
  walkB: [
    '..k.......k...k..',
    '.kck.....kckkkck.',
    'kck......kpcccpk.',
    '.kck.....kccccck.',
    '.kckkkkkkkccceck.',
    '..kccccccccccccpk',
    '..kcccccccccllck.',
    '..kccccccccckkk..',
    '..kccllllllck....',
    '...kcckkkkcck....',
    '...kcck..kcck....',
    '....kk....kk.....',
  ],
  sitA: [
    '..........k...k..',
    '.........kckkkck.',
    '.........kpcccpk.',
    '.........kccccck.',
    '......kkkkccceck.',
    '.....kcccccccccpk',
    '.....kccccccllck.',
    '....kccclllckkk..',
    '.k..kccclllck....',
    'kckkkccclllck....',
    '.kcccccclllck....',
    '..kkkkkkkkkk.....',
  ],
  sitB: [
    '..........k...k..',
    '.........kckkkck.',
    '.........kpcccpk.',
    '.........kccccck.',
    '......kkkkccceck.',
    '.....kcccccccccpk',
    '.....kccccccllck.',
    '.k..kccclllckkk..',
    'kck.kccclllck....',
    '.kckkccclllck....',
    '..kccccclllck....',
    '...kkkkkkkkk.....',
  ],
}
