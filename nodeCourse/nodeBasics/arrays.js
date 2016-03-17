var grades = [100, 50, 75];
var totalGrade = 0;
//use forEach to add grades to total grade
//totalGrade / total number of grades

grades.forEach(function (grade) {
  totalGrade += grade;
  console.log("Current totalGrade is " + totalGrade);
})

console.log(totalGrade);
console.log(totalGrade/grades.length);
