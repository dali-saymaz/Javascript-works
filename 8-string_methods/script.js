let kursAdi = "Bugun resmen javascripte baslkadik";

let sonuc;

sonuc = kursAdi.replace("Bugun","Suan");
console.log(sonuc);
sonuc = kursAdi.toLowerCase();
sonuc = kursAdi.toUpperCase();
sonuc = kursAdi.length;
sonuc = kursAdi[10];
sonuc = kursAdi.slice(0, 6);

sonuc = kursAdi.substring(0, 6);
sonuc = kursAdi.substring(10);

sonuc = kursAdi.replace("Bugun","Suan");
sonuc = kursAdi.trim();
sonuc = kursAdi.trimEnd();
sonuc = kursAdi.trimStart();


sonuc = kursAdi.split(" ");
sonuc = kursAdi.indexOf("resmen");
sonuc = kursAdi.split(" ")[0];
sonuc = kursAdi.split(" ")[3];


console.log(sonuc);