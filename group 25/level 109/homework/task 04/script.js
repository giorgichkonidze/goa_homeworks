const book = {
    "nukri": "robota",
    "2000": "davit",
    "Mortisi": "yoysps"
}

const bookTitle = []
for (let title in book) {
    bookTitle.push(title)
}
console.log(bookTitle)