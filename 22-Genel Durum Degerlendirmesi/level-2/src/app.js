import { createEmail, addEmailToPersonList, findEmail} from "./functions.js"
import { personList } from "./data.js"

console.log(createEmail(personList));
console.log(addEmailToPersonList(personList));

console.log("The mails of singles over 25 years old:")
console.log(findEmail(personList));