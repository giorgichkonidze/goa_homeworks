const words = ["world", "the", "to", "Welcome"]
const sentence = words.reduceRight((acc, word) => acc + " " + word, "").trim() + "."

console.log(sentence)