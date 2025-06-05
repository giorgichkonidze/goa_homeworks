function classTask() {
    const infoElement = document.getElementById("info")
    for(let i=0; i < infoElement.clientHeight; i++){
        infoElement[i].textContent = "change by class name"
    }

}