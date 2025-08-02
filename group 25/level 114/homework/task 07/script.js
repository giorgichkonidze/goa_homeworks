const users = [
  { name: "george", email: "george@example.com" },
  { name: "Bob", email: "bob@example.com" },
  { name: "joker", email: "joker@example.com" }
]

const formattedEmails = users.map(user => `<${user.email}>`)
console.log(formattedEmails)