export function loginfo(msg) {
    console.log(`info: ${msg}`)
}
export function logerror(msg) {
    console.log(`error: ${msg}`)
}
export default function logAll(msg) {
    loginfo(msg)
    logerror(msg)
}