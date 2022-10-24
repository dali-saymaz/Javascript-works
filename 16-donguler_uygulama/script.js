const toplamhak = 4;// Math.random()*10 1 ile 9 arası sayı üretir bundan dolayı +1 eklendi
const saklanilanVagon = Math.floor((Math.random() * 10) + 1); //Şüphelinin Saklandıgı vagon 
for (let tahminSayisi = 1; tahminSayisi <= toplamhak ; tahminSayisi++) { //kullanıcıya verilen tahmin hakkına göre for döngüsü calışacaktır
    
    let tahmin = Number(prompt('vagon numarası giriniz'));
    if (saklanilanVagon == tahmin) {
        alert(`Tebrikler Süpheliyi ${tahminSayisi} defada hangi vagonda oldugunu bildiniz`);
        alert(`puan: ${100-(25)*(tahminSayisi)}`)
        break;
    } else if (saklanilanVagon > tahmin) {
        alert("Daha Büyük bir sayı giriniz!! Şüpheli arka vagonda");
    } else {
        alert("Daha Kücük bir sayı giriniz!! Şüpheli ön vagonda");
    }

    if (tahminSayisi == toplamhak) {
        alert('Hakkınız bitti Şüpheliyi bulamadınız');
    }
    
 
}
