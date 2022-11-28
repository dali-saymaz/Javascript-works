import { filterPersonList } from "./functions.js";
import { personList } from "./data.js";

const filteredPersonList = filterPersonList(personList);

console.log("Information of people over the age of 27:");
filteredPersonList.forEach((person, index) => {
  console.log(`${index + 1}. person => name: ${person.name}, surname: ${person.surname}, age: ${person.age}`);
});