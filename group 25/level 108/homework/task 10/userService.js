export default function creatUser(name) {
    return {id: Date.now(), name}
}
export function deleteUser(id) {
    console.log(`user with ID ${id} deleted`)
}