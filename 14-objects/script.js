
let kullaniciA = {
    "ad": "durmus",
    "soyad": "ali",
    "yas": 35,
    "adres": {
        "sehir": "istanbul",
        "ilce": "umraniye"
    },
    "hobiler": ["sinema","spor"]
}
let kullaniciB = {
    "ad": "emin",
    "soyad": "samet",
    "yas": 34,
    "adres": {
        "sehir": "kocaeli",
        "ilce": "izmit"
    },
    "hobiler": ["yemek","mangal"]
}

let sonuc;

sonuc = kullaniciA.ad;
sonuc = kullaniciA.soyad;
sonuc = kullaniciA["yas"]; //bu altarnatif bir kullanimdir
sonuc = kullaniciA.adres.sehir;
sonuc = kullaniciA.adres.ilce;
sonuc = kullaniciA.hobiler[0];
sonuc = kullaniciB.hobiler[0];

let kullanicilar = [
    kullaniciA,
    kullaniciB
];
sonuc = kullanicilar[1].ad;


// array icinde obje kullanimi
let urunler = [
    {
        "urun_adi": "samsung s22",
        "urun_fiyat": 13000
    },
    {
        "urun_adi": "samsung s23",
        "urun_fiyat": 15000
    }
]

sonuc = urunler[0].urun_adi;

console.log(sonuc);