//# 2. სიყვარულის კალკულატორი
//შექმენით ფუნქცია, რომელიც შემოიტანს ორი ადამიანის სახელს და შემდეგ alert ის სახით
//  გამოიტანს მათ სიყვარულის პროცენტს - ტექსტი უნდა გამოვიდეს შემდეგნაირად - '{პირველი სახელი} და {მეორე სახელი},
//  თქვენი სიყვარულის პროცენტია {პროცენტული მაჩვენებელი}'



function love(namelove1, namelove2) {
 
    let lovepercent = Math.floor(Math.random() * 100)

  
    alert(`${namelove1} და ${namelove2}, თქვენ გიყვართ ერთმანეთი ${lovepercent}%`)
}


let firstName = prompt("სახელი: ")
let secondName = prompt("სახელი: ")

love(firstName, secondName)