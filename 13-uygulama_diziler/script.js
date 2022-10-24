let ogr1 = [
    "umit",
    "yaman",
    1992,
    [70,60,80]
];

let ogr2 = [
    "esra",
    "gul",
    2000,
    [80,80,90]
];

let ogr3 = [
    "nizami",
    "sevindi",
    1987,
    [60,60,70]
];

let ogrenciler = [ogr1, ogr2, ogr3];
console.log(ogrenciler)

let umit_yas =  new Date().getFullYear() - ogrenciler[0][2];
let esra_yas =  new Date().getFullYear() - ogrenciler[1][2];
let nizami_yas =  new Date().getFullYear() - ogrenciler[2][2];
console.log(umit_yas,esra_yas,nizami_yas)

let umit_not = (ogrenciler[0][3][0] + ogrenciler[0][3][1] + ogrenciler[0][3][2]) / 3;
let esra_not = (ogrenciler[1][3][0] + ogrenciler[1][3][1] + ogrenciler[1][3][2]) / 3;
let nizami_not = (ogrenciler[2][3][0] + ogrenciler[2][3][1] + ogrenciler[2][3][2]) / 3;

console.log(umit_not.toFixed(1), esra_not.toFixed(1), nizami_not.toFixed(1));//toFixed(1) ile virgulden sonra bir basamak olsun diye ayarliyoruz