

let sayilar = [1,4,5,8,4,3,12,5,3,5];

let toplam = 0;

// for(let i=0; i < sayilar.length; i++) {
//     toplam += sayilar[i];    
// }

for(let index in sayilar) {
    console.log(index)
    toplam += sayilar[index];
}
console.log(toplam)


for(let sayi of sayilar) {
    toplam += sayi;
}

console.log(toplam);


//objeler uzerinde nasil calisir

let user = {
    "name": "Durmus ALi SAYMAZ",
    "username": "dali",
    "password": "Kemal.88",
    "email": "durmusalisaymaz@gmail.com"
};

for (let key in user) {
    console.log(key);
    console.log(user[key]);
}

//for pekistirme
let ogrenciler = [
    {ad:"umit", 
    soyad: "yaman", 
    notlar: [60,70,60]},
    {"ad":"esra", "soyad": "er", "notlar": [80,70,80]},
    {"ad":"nizami", "soyad": "sevindi", "notlar":[70,80,60]}
];
for(let ogrenci of ogrenciler) {
    let not_toplam = 0;
    let ortalama = 0;
    let adet = 0;
    for(let not of ogrenci.notlar) {
        not_toplam += not;
        adet++;
    }
    ortalama = not_toplam / adet;
    console.log(`${ogrenci.ad} ${ogrenci.soyad} isimli öğrencimnin not ortalaması : ${ortalama}.`);

}
