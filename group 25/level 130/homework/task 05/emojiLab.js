export function addSmile(str) {
    return str + "😁"
}
export function addHeart(str) {
    return str + "💓"
}
export default function happyLove(str) {
    return addHeart(addSmile(str));
}