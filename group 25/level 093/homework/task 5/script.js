const library = ["book1", "book2"]

let addBook = prompt("Which book you want to add")
library.push(addBook)
console.log(library)
library.pop()
console.log(library)
let addBookmanyitems = prompt("which book you want to add")
let booknumber = prompt ("how many itimes you want to add")
for (let index = 0; index < booknumber; index++){
    library.splice(0,0,addBookmanyitems)
}

console.log(library)
console.log(library.join(","))
console.log(library.slice(0,2))
library.copyWithin(-1,0,1)
console.log(library)
library.fill("book1")
console.log(library)
library.shift()
console.log(library)
library.unshift("book3")
console.log(library)
