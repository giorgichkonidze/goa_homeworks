console.log("Using for...of:");

const arr = ["Js", "React", "Node"]
for (let key in arr) {
    console.log(key)
}
// for in გამოიტანს
// 0
// 1
// 2
for (let value of arr) {
  console.log(value);
} 
// for of გამოიტანს 
// Js
// React
// Node