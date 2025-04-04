function figFruits(fruits) {
    let fruits = ['appele', 'banana', 'pearl', 'grapes', 'Plum']
    let citrues = fruits.slice(1, 3);

    fruits.splice(fruits -2, 2, 'fig')

    let fruitstring = fruits.join('-');


    return fruitstring
}

console.log(figFruits(fruits))