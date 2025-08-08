//destructing assigment

// task 01
let arr = [2,4,6,8,10]
let [w,l,o,p,z] = arr

console.log(w)
console.log(l)
console.log(o)
console.log(p)
console.log(z)

// task 02
let men = {
    name: 'jora',
    lastName: 'angelina'
}
let (userName, userLastName) = men
console.log(name)
console.log(lastName)

// task 03
let arr5 = [1]
let [x, y=8]= arr2
console.log(x, y)

let arr9 = [1]
let [n, m=9] = arr2
console.log(n,m)

//array

//task 01
let nestedArr = [1,2,3,[4,5]]
let[a,b,c,[d,e]] = nestedArr
console.log(a,b,c,d,e)

// chashenebuli object
    let person = {
    name: 'gela',
    address: {
        city: 'Tbilisi',
        zip: 3030
    }
}
let{mame,address:{city,zip}} = person
console.log(name)
console.log(city)
console.log(zip)

// objects

// task 01
let obj = {
    name: 'giorga',
    age: 15
}
let{name : userName, age: userAge} = obj
console.log(userName)
console.log(userAge)