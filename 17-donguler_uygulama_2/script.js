var isimler = ["ali", "ahmet", "can", "canan"];

console.log(isimler[0]);  // ali
console.log(isimler[1]);  // ahmet
console.log(isimler[2]);  // can
console.log(isimler[3]);  // canan

for (i = 0; i < isimler.length; i++) {
  console.log(isimler[i]);
}

isimler.forEach(

  element => {
    console.log(element);
}

);
 

 for (var i = 10; i >=1; i--) {
  document.write(i+"<br/>");
}


let student =[
  {firstName:'umit',lastName:'yaman'},
  {firstName:'esra',lastName:'er'},
  {firstName:'nizami',lastName:'sevindi'}
];

for (let index = 0; index < student.length; index++) {
console.log(student[index].firstName + " "+ student[index].lastName);
  
}
