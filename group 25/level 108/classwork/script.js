//# Level 108:
// # 1. შექმენით გლობალური და ლოკალური ცვლადები და შემდეგ მიიღეთ წვდომა მათზე და ახსენით კომენტარებით თუ როგორ მუშაობს.
// # დრო: 5წთ


//global

let massage = "this is global"

//local

function localFunc() {
    let message = "this is local";
    console.log(message)
}

localFunc();


//# 2. arrow function ის დახმარებით, შექმენით ფუნქცია, რომელიც შეამოწმებს რიცხვი ლუწია თუ კენტი.

function EvenOrOdd(num){
    if (num % 2 === 0){
        return "ლუწია"
    } else {
        return "კენტი"
    }
}