// `# 1. შექმენით ფუნქცია, რომელშიც გაწერილი იქნება name, lastname,
//  age, birthYear პარამეტრი. თქვენი დავალებაა, რომ დააბრუნოთ თითოეული
//  მნიშვნელობა ფუნქციაში, დაბრუნების შემდეგ ფუნქციის გარეთ შეამოწმეთ 
// მნიშვნელობები უდრის თუ არა მომხმარებლისგან შემოტანილ მნიშვნელობებს`



function userName(name) {
    return name;
}

function userLastName(lastName) {
    return lastName;
};

function userAge(age) {
    return age;
};

let name = userName('givia');
let lastName = userLastName('kukalaidze')
let age =  userAge(30);

if (name == newName && lastName == newLastName && age == newAge) {
    alert('the information is same')
} else {
    alert('the information is different')
}

