document.getElementById("outher").addEventListener("click", function(){
    console.log("outer clicked")
})
document.getElementById("inner").addEventListener("click", function(){
    console.log("inner clicked")
})
document.getElementById("button").addEventListener("click", function(){
    console.log("button clicked")
})

//button clicked, inner clicked, outher clicked