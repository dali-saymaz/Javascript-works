const filterPersonList = (pPersonList) => {
  return pPersonList.filter((person) => person.age > 27);
};

export {filterPersonList}
