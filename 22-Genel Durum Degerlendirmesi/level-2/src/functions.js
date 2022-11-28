// email olustur
const createEmail = (pList) => {
  return pList.map((person) => {
    return person.name.toLowerCase() + "." + person.surname.toLowerCase() + "@hicoders.ch";
  });
};

// objeye email ve id ekle
const addEmailToPersonList = (pList) => {
  const createdEmail = createEmail(pList);
  return pList.map((person, index) => {
    return { id: index, ...person, email: createdEmail[index] };
  });
};

// yasi 25 den buyuk olan bekarlarin emailini getir
const findEmail = (pList) => {
  const addedMailPersonList = addEmailToPersonList(pList);
  return addedMailPersonList.filter((person) => person.age > 25 && person.maritalStatus === "single").map((person) => person.email);
};

export { createEmail, addEmailToPersonList, findEmail };
