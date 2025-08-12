function uniqueWords(sentence) {
  const words = sentence.toLowerCase().filter(Boolean)
  return new Set(words)
}
console.log(uniqueWords("The sun shines and the moon glows"))

function intersection(setA, setB) {
  return new Set([...setA].filter(x => setB.has(x)))
}
console.log(intersection(new Set([1, 2, 3]), new Set([2, 3, 4])))

function difference(setA, setB) {
  return new Set([...setA].filter(x => !setB.has(x)))
}
console.log(difference(new Set([1, 2, 3]), new Set([2, 3, 4])))

function uniqueCharCount(str) {
  return new Set(str).size
}
console.log(uniqueCharCount("hello"))

function haveSameUniqueElements(arr1, arr2) {
    const set1 = new Set(arr1)
    const set2 = new Set(arr2)
    if (set1.size !== set2.size) return false
    for (const val of set1) {
        if (!set2.has(val)) return false
  }
  return true;
}
console.log(haveSameUniqueElements([1, 2, 3], [3, 1, 2]))
console.log(haveSameUniqueElements([1, 2, 2], [1, 2, 3]))

function allUniqueChars(word) {
  return new Set(word).size === word.length
}
console.log(allUniqueChars("lamp"))
console.log(allUniqueChars("moon"))