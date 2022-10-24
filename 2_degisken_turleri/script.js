
// var ve let arasında ki fark, var function scope özelliği taşırken, 
// let block scope özelliği taşımaktadır. Yani let ile oluşturulan bir değişken sadece oluşturulduğu yerdeki 
//süslü parantezler içerisinde erişilebilirdir ve dışarısında kullanılamaz.
var deger1 = 1800;  
let deger2 = 1500;  

const deger3 = 1600;    // const ile oluşturulan bir değişkene daha sonrasında tekrar değer ataması yapılamaz.


var urunAdi = "macbook pro 2022 m2";  // string
let urunFiyatMediamark = 1500;    // number
let urunFiyatMigrosElektronik = 1600;    // number
let urunFiyatMigrosElektronik2 = "1600";    // string
var stokDurumu = true // boolean


console.log(typeof urunAdi);
console.log(urunAdi);
console.log(typeof urunFiyatMediamark);
console.log(typeof stokDurumu);
console.log(typeof urunFiyatMigrosElektronik2);

console.log(typeof urunurunFiyatMediamark);

