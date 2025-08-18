export function getYear() {
    return new Date().getFullYear()
}
export function getMonth() {
    return new Date().getMonth() + 1
}
export default function getDateString() {
    const now = new Date()
    const year = now.getFullYear()
    const month = String(getMonth()).padStart(2, '0')
    const day = String(now.getDate()).padStart(2, '0')
    return `${year}==${month}==${day}`
}