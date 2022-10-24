let toplam1 = 0;

for(let i = 1; i <= 10; i++) {
    toplam1 += i;
}
console.log(toplam1);




let sayilar = [1,4,5,8,4,3,12,5,3,5];

let toplam = 0;

for(let i=0; i < sayilar.length; i++) {
    toplam += sayilar[i];    
}



for(let i in sayilar) {
    toplam += sayilar[i];
} // altanatifdir 
