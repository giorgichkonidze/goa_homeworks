function TagName() {
    const head = document.getElementById("h2");
    for(let i = 0; i < head.length; i++) {
        head[i].textContent = "Heading change getElementsByTagName"
    }
}