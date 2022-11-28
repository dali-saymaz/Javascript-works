import {
  findMathExamsAverage,
  findBelowMathExamAverageStudents,
  analyzeChemistryExams,
  findAllExamsOfStudentsGradeAboveNinetyInPhysicsExam,
} from "./functions.js";

const exampleList = [
  {
    name: "Maxwell",
    surname: "Wintringham",
    exams: {
      math: 70,
      chemistry: 75,
      physics: 85,
      geometry: 80,
    },
  },
  {
    name: "Georgie",
    surname: "Greenwood",
    exams: {
      math: 75,
      chemistry: 85,
      physics: 95,
      geometry: 85,
    },
  },
];

const mathExamsAverage = findMathExamsAverage(exampleList);
const belowMathExamAverageStudents = findBelowMathExamAverageStudents(exampleList);
const analysisChemistryExams = analyzeChemistryExams(exampleList);
const allExamsOfStudentsGradeAboveNinetyInPhysicsExam = findAllExamsOfStudentsGradeAboveNinetyInPhysicsExam(exampleList);
const exampleResult = [
  {
    nameAndSurname: "Georgie Greenwood",
    allExamsAverage: 85,
    exams: { math: 75, chemistry: 85, physics: 95, geometry: 85 },
  },
];

test("Math exam average is 72,5", () => {
  expect(mathExamsAverage).toBe(72.5);
});

test("Maxwell Wintringham is below the mathematics exam average", () => {
  expect(belowMathExamAverageStudents).toStrictEqual(["Maxwell Wintringham"]);
});

test("All students are above 70 in chemistry exam", () => {
  expect(analysisChemistryExams).toBe(true);
});

test(`The information of students who get over 90 in physics should match`, () => {
  expect(allExamsOfStudentsGradeAboveNinetyInPhysicsExam).toStrictEqual(exampleResult);
});

