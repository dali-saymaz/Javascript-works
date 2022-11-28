// matematik ortalmasini getir
const findMathExamsAverage = (pStudentList) => {
  return pStudentList.map((student) => student.exams.math).reduce((a, b) => a + b) / pStudentList.length;
};

// matematik dersi ortamannin altindaki ogrencilerin isim soyismini getir
const findBelowMathExamAverageStudents = (pStudentList) => {
  const mathExamsAverage = findMathExamsAverage(pStudentList);
  return pStudentList.filter((student) => student.exams.math < mathExamsAverage).map((person) => person.name + " " + person.surname);
};

// kimya dersinde tüm ogrenciler 70 notunun üzerinde mi?
const analyzeChemistryExams = (pStudentList) => {
  return pStudentList.map((student) => student.exams.chemistry).every((grade) => grade >= 70);
};



// fizik ten 90 ustu alan ogrencilerin tum notlarini, not ortlamasini getir isim ve soyismiyle
const findAllExamsOfStudentsGradeAboveNinetyInPhysicsExam = (pStudentList) => {
  return pStudentList
    .filter((student) => student.exams.physics > 90)
    .map((student) => {
      const studentExam = student.exams;
      const examKeyList = Object.keys(studentExam);
      const allExamsAverage = examKeyList.map((exam) => studentExam[exam]).reduce((a, b) => a + b) / examKeyList.length;
      const newStudentObject = {
        nameAndSurname: student.name + " " + student.surname,
        allExamsAverage: allExamsAverage,
        exams: studentExam,
      };
      return newStudentObject;
    });
};

export { findMathExamsAverage, findBelowMathExamAverageStudents, analyzeChemistryExams, findAllExamsOfStudentsGradeAboveNinetyInPhysicsExam };
