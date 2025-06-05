let array = [10, 20, 30, 40, 50];

let valueToChek1 = 30;
let valueToChek2 = 100;
let index1 = array.indexOf(valueToChek1);
let index2 = array.indexOf(valueToChek2);

if (index1 !== -1) {
    console.log("True: მასივში არის", index1);
} else {
    console.log("False: არ არის ");
}

if (index2 !== -1) {
    console.log("True ", index2);
} else {
    console.log("False: მნიშვნელობა არ არი");
}

array.push(60, 70, 80);
console.log(array);


array.splice(0, 4);
console.log(array);