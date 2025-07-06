const getFullNAme = ({firstName, lastName = "Doe" }) => `${firstName} ${lastName}`

console.log(getFullNAme({firstName: "John", lastName: "smith"}))
console.log(getFullNAme({firstName: "Jane"}))