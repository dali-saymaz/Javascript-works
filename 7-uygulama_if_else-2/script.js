//1- x, y, z sayılarının büyüklük karşılaştırmasını yapınız. (else if 'i araştırınız.)

let x = 60, y = 60, z = 60;

if (x > y && x > z) {
    console.log("x en büyük");
} else if (y > x && y > z) {
    console.log("y en büyük");
} else if (z > x && z > y) {
    console.log("y en büyük");
} else {
    console.log("sayılar eşit");
}

// 2- 2 tane vizenin (40%) ve finalin (60%) notuna göre hesaplanan ortalama için;

let vize1 = 30;
let vize2 = 10;
let final = 70;

let ortalama = (((vize1 + vize2) / 2) * 0.4) + (final * 0.6);

console.log("ortalamanız: " + ortalama);

// a- Eğer ortalama 50 ve üstündeyse geçti değilse kaldı yazsın.

if (ortalama >= 50) {
    console.log("geçtiniz");
} else {
    console.log("kaldınız");
}

// b- Geçmek için ortalama 50 bile olsa final notu en az 50 olmalıdır.

if (ortalama >= 50 && final >= 50) {
    console.log("geçtiniz");
} else {
    console.log("kaldınız");
}

// c- Finalden 70 alındığında ortalama 50' nin altında olsa bile dersten geçilsin.

if (ortalama >= 50 || final >= 70) {
    console.log("geçtiniz");
} else {
    console.log("kaldınız");
}