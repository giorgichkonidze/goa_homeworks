let fruits = new Map([
    ["Apple", "Red"],
    ["Grapes", "Purple"],
    ["Orange", "Orange"],
    ["Blueberry", "Blue"]
]);
let fruitToCheck = "Orange";

if (fruits.has(fruitToCheck)) {
    console.log("Yes");
} else {
    console.log("No");
}