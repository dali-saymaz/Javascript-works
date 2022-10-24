let simdi = new Date(); // şimdiki tarih - saat
console.log(simdi)

// Get Methods
sonuc = simdi;
sonuc = simdi.getDate();    // gün
sonuc = simdi.getDay();     // 0: pazar 6: cumartesi
sonuc = simdi.getFullYear(); // yıl
sonuc = simdi.getHours();   // saat
console.log(sonuc)



let dogumTarihi = new Date(1990, 5, 15);
let simdi2 = new Date(); 
sonuc = simdi2.getFullYear() - dogumTarihi.getFullYear();

console.log(sonuc);
console.log(typeof sonuc);

