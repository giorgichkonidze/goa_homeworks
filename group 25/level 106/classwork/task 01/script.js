document.getElementById('registrationForm').addEventListener('submit', function(event){
    event.preventDefault()
    const firstName = document.getElementById('firstName').value.trim()
    const lastName = document.getElementById('lastName').value.trim()
    const email = document.getElementById('email').value.trim()
    const password = document.getElementById('password').value
    const confrimPassword = document.getElementById('confrimPassword').value
    const message = document.getElementById('message')

    if (!firstName || !lastName || !email || !password || !confrimPassword ) {
        alert("გთხოვთ შეავსეთ ყველა ფანჯარა")
        return
    }
    if (password !== confrimPassword) {
        document.body.className = "warning"
        message.textContent = "warning !"
        return
    }
    document.body.className = "success"
    message.textContent= "successfullLogin"
})