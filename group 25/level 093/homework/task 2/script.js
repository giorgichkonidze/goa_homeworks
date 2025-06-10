let student = ["nika","gio","luka","oto","saba"]

let grades = [4, 6, 9, 10, 8]

function addStudent(studentName, studentGrate) {
    student.unshift(studentName);
    grades.unshift(studentGrate);
} 
function removeLastStudent() {
    student.pop(-1);
    grades.pop(-1);
}
function replaceGrade(gradeIndex, newGrade) {
    grades.splice(gradeIndex,1,newGrade);
}

function updateGrades() {
    grades.fill(10);
}