function User(name, lastName, phoneNumber, email, password, confirmPassword) {
  this.name = name;
  this.lastName = lastName;
  this.phoneNumber = phoneNumber;
  this.email = email;
  this.password = password;
  this.confirmPassword = confirmPassword;

  this.introduce = function() {
      return `ჩემის სახელია ${this.name}, ჩემი გვარია ${this.lastName}, ჩემი ტელეფონის ნომერია ${this.phoneNumber}, ჩემი ელ.ფოსტა არის ${this.email}.`
  }
}


const userman1 = new User('lamara', 'mayvalidze', '555-123456', 'lamara@gmail.com', 'password123', 'password123')
const userman2= new User('sandro', 'akofa', '555-654321', 'sandr@gmail.com', 'mypassword', 'mypassword')
const userman3 = new User('laura', 'kukuladxe', '555-987654', 'laur@gmail.com', 'laurasi22', 'laurasi22')

console.log(userman1.introduce())
console.log(userman2.introduce())
console.log(userman3.introduce())
