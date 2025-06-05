const playlist = ['song1', 'song2', 'song3']
let musicInput = prompt("enter a song to add in playlist")
playlist.unshift(musicInput)
console.log(playlist)
playlist.pop()
console.log(playlist)
playlist.copyWithin(-1,0,2)
console.log(playlist)
const playlist2 =['song4', 'song5', 'song6']

console.log(playlist.concat(playlist2))