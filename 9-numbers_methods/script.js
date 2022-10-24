let sonuc;

sonuc = 10;
sonuc = "10";
sonuc = Number("10");//string ifadeyi numaraya cevirir.
sonuc = parseInt("10.6");//parseInt() metoduna gönderdiğimiz parametreyi tam sayıya çevirir.

sonucParseF = parseFloat("10.6dali"); //parseInt() metodundan farklı olarak geriye ondalıklı kısmıda döndürür.
console.log(sonucParseF)

parseInt("10");         // 10
parseInt("10.33");      // 10
parseInt("10 a");       // 10
parseInt("a10");        // NaN 


sonuc = isNaN("10"); //eğer NaN yani sayısal olmayan bir değer ise bu durumda true sonucunu gönderir.

let sayi = 20.12355467;

sonuc = sayi.toPrecision(5);//15.123 toFixed() farkli olarak sayinin basindan itibaren alir
sonuc = sayi.toFixed(5);//15.12345  yani virgulden sonraki basamak sayisini belirler. toFixed() metodu verilen parametreye göre veriyi yuvarlar.

sonuc = Math.round(2.4);//yani 2 ciktisi gelir. round() metodu ile en yakın sayıya yuvarlama yapabiliriz.
sonuc = Math.round(2.6);//yani 3 ciktisi gelir. round() metodu ile en yakın sayıya yuvarlama yapabiliriz.
sonuc = Math.ceil(2.2); //ceil() metodu ile en yakın tam sayıya yukarı yuvarlama yaparız.
sonuc = Math.floor(2.6); //floor() metodu ile en yakın tam sayıya aşağı yuvarlama yaparız
sonuc = Math.sqrt(25);//yani ciktisi 5 olur.  sayiyi kare kokune dondurur.
sonuc = Math.pow(5,3);//Burada yapacağı işlem 5*5*5 işlemidir. ikicin sayi kadar birinci sayiyi kendisi ile carpar
sonuc = Math.abs(-10); //abs() metoduna gönderilen sayı pozitif olarak geri gönderilir.
sonuc = Math.min(4,6,8,3,9);//min() metodu kendisine gönderilen sayıların en küçüğünü bulur. 
sonuc = Math.max(4,6,8,3,9);//max() metodu ise en büyüğünü bulur.
console.log(typeof sonuc);
console.log(sonuc);

sonucRandom= Math.floor(Math.random() * 100); //random() metodu 0 ile 1 arasında rastgele bir sayı üretir.
console.log(Math.random())
console.log(sonucRandom)

