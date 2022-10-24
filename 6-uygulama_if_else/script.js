// 1- Bir sayının 1-100 arasında olup olmadığını kontrol ediniz.

let sayi1 = 41;
if (sayi1>1 && sayi1<100) {
    console.log("sayı 1-100 arasındadır.");
} else {
    console.log("sayı 1-100 arasında değildir.");
}

//2- Bir sayının pozitif tek sayı yada cift say olup olmadığını kontrol ediniz.

let sayi = 35;
if (sayi % 2 == 1 || sayi > 0)
{
    console.log("sayi pozitif tek sayıdır.");
}
else if (sayi % 2 == 0)
{
    console.log("sayi pozitif cift sayıdır.");
}