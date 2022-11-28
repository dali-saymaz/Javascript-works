// 1- Kendisine gönderilen kelimeyi belirtilen kez ekranda yazan fonksiyonu yapınız.

function kelimeYazdir(kelime, adet) {
    for (let i=0; i < adet; i++) {
        console.log(kelime);
    }
}

 kelimeYazdir("merhaba", 5);

// 2- Dikdörtgenin alan ve çevresini hesaplayan fonksiyonu yazınız.

function alanCevreHesapla(kisa, uzun) {
    let alan = kisa * uzun;
    let cevre = (kisa + uzun) * 2;

    return `alan: ${alan} çevre: ${cevre}`;
}

let sonuc = alanCevreHesapla(7, 10);
console.log(sonuc);

// 3- Yazı tura uygulamasını fonksiyon kullanarak yapınız.

function yaziTuraAt() {
    let random = Math.random(); // 0-1

    if(random < 0.5) {
        console.log("yazı");
    } else {
        console.log("tura");
    }
    console.log(random);
}
 yaziTuraAt();
