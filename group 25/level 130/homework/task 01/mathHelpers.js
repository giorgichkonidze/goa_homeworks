export function square(num) {
    return num * num
}
export function double(num) {
    return num * 2
}
export default function magicMath(num) {
    return square(num) + double(num)
}