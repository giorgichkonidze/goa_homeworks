import createUser, {deleteUser} from './userService.js'
const user = createUser("Gela")
console.log(user)
deleteUser(user.id)