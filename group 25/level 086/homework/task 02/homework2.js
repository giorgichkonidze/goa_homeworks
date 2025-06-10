function Student (name, age, faculty, course, avgGrade) {
      this.name = name;
      this.age = age;
      this.faculty = faculty;
      this.course = course;
      this.avgGrade = avgGrade;
}
const student1 = new Student("გიორგი", 21, "ინფორმატიკა", 3, 88);

console.log(student1.name); 
console.log(student1.age); 

console.log(student1["name"]); 
console.log(student1["age"]);  

console.log(`${student1.name} არის ${student1.age}-წლის სტუდენტი, რომელიც სწავლობს ${student1.faculty}-ის ფაკულტეტზე. დღეს იგი ${student1.course}-ე კურსზეა და მისი საშუალო ქულა არის ${student1.avgGrade}.`);