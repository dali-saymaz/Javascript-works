let ogrenciler = ["esra", "umit", "nizami"];

// array to string
sonuc = ogrenciler.toString(); // butun nesneleri birlestirir

sonuc = ogrenciler.join(" "); // butun nesneler arasinda bosluk birakarak birlestirir. yeni bir array olusturur.

sonuc = ogrenciler.join("-"); // aralara tire koyarak birlestirir.

// eleman silme
sonuc = ogrenciler.pop();       // son eleman silinir ve silinen eleman geri döndürülür.
sonuc = ogrenciler.shift();     // ilk eleman silinir.

// eleman ekleme
let ogrenciler2 = ["esra", "umit", "nizami"];
sonuc = ogrenciler2.push("dali");    // dizinin sonuna eleman eklenir.
sonuc = ogrenciler.unshift("samet"); // dizinin başına yeni değerler eklemek için kullanıl

//:..............

let markalar1 = ["mazda","toyota"];
let markalar2 = ["opel","renault"];
let markalar3 = ["mercedes"];

 sonuc = markalar1.concat(markalar2, markalar3);// dizileri birleştirmek için kullanılır. Birden fazla diziyi tek bir dizi haline getirir yani birleştirir.

//splice() metodu diziye eleman ya da elemanlar eklenebilmesini sağladığı gibi, silinebilmesini de sağlar. 
//splice() ile diziden silinen değeri geri döndürür. Metot dizinin yapısını değiştirir.
let markalar4 = ["mazda","toyota"];
sonuc2 = markalar4.splice(0, 1);
console.log(sonuc2);

let markalar5 = ["mazda","toyota"];
sonuc1 = markalar5.splice(0, 1, "bmw","audi");
console.log(sonuc1);
console.log(markalar5);

