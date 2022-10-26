
let ogrenciler1 = "esra"
let ogrenciler2 = "umit"
let ogrenciler3 = "nizami"

let ogrenciler = ["esra", "umit", "nizami"];
let dogumTarihi = [2001, 1991, 1987];
let renkler = ["gold", "siyah", "beyaz"];

let ogrenci1 = ["esra", 2000, "gold"];
ogrenci1[0] = "esra";
ogrenci1[1] = 2000;
ogrenci1[2] = "gold";

console.log(ogrenci1[0])

//........

let urunler = [
    "iphone 13 pro",
    20000,
    ["siyah", "beyaz", "mavi"]
];

console.log(urunler[0]);
console.log(urunler[1]);
console.log(urunler[2]);

console.log(urunler[2]);
console.log(urunler[2][0]);
console.log(urunler[2][1]);
console.log(urunler[2][2]);
console.log(typeof urunler[2]);



//.......

let kursAdi = "Komple Web Geliştirme Eğitimi";
console.log(kursAdi[5]);
console.log(kursAdi.split(" ")[3]);