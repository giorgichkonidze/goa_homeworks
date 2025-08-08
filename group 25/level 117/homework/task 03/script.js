const student = {
  name: "Bob",
  age: 20,
  grades: {
    math: 90,
    science: 85,
    english: 92,
  },
};
const {grades: {math, english} }=student

console.log(math)
console.log(english)