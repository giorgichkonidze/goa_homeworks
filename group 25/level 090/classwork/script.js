function contacts (name, number) {
    this.name = name
    this.number = number
    this.print =function(){
        return `${this.name}: ${this.number}`
    }
}

let user1= new contacts('luka', 554333543);
console.log(user1.print())
