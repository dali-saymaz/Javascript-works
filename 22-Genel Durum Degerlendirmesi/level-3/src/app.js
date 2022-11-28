import {
  findMathExamsAverage,
  findBelowMathExamAverageStudents,
  analyzeChemistryExams,
  findAllExamsOfStudentsGradeAboveNinetyInPhysicsExam,
} from "./functions.js";
import { studentList } from "./data.js";

console.log(`1- Average of math exams: ${findMathExamsAverage(studentList)}`);

console.log("2- Names of students below average in math exam:")
console.log(findBelowMathExamAverageStudents(studentList));

console.log("3- Are all students over 70 in the chemistry exam?")
const result = analyzeChemistryExams(studentList)
if(result){
  console.log("All students are above 70 in the chemistry exam");
} else {
  console.log("Not all students are above 70 in the chemistry exam")
}

console.log("4- Name and surname, grade point average and all grades of students who scored above 90 in the physics exam:")
console.log(findAllExamsOfStudentsGradeAboveNinetyInPhysicsExam(studentList));
