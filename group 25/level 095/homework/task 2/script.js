function randomName(nameList){
    return nameList[Math.floor(Math.random()*nameList.length)]
}

console.log(randomName(["a", "b", "c", "d"]))
