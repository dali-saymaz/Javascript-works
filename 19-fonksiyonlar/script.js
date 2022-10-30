

//...........Calisma 1

function selamlama(msg) {
    console.log(msg);
}

selamlama("selam Umit");
selamlama("merhaba Esra");
selamlama("iyi günler Nizami");



//...........Calisma 2

function yasHesapla(dogumYili) {
    return new Date().getFullYear() - dogumYili;
}
let yasEsra = yasHesapla(2001);
let yasUmit = yasHesapla(1991);
let yasNizami = yasHesapla(1987);
console.log(yasEsra, yasUmit, yasNizami);


//...........Calisma 3

function emekliligeKacYilKaldi(dogumYili, isim) {
    let yas = yasHesapla(dogumYili);
    let kalan_sene = 65 - yas;

    if (kalan_sene > 0) {
        console.log(`${isim}, emekli olmanıza ${kalan_sene} yıl kaldı.`);
    } else {
        console.log("zaten emekli oldunuz.");
    }
}

emekliligeKacYilKaldi(1991, "Umit");
emekliligeKacYilKaldi(1987, "Nizami");