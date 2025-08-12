export function capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1)
}
export function reverse(str) {
    return str.split(' ').reverse().join(' ')
}
export default function process(str) {
    return capitalize(reverse(str))
}