document.getElementById('myList').addEventListener("click", function(event){
    if (event.target.tagName=== 'LI') {
        console.log("clicked element:", event.target.textContent)
    }
})