const city = "tbilisi"
const API_KEY = "5faa8e189a4b974b5f1dd2556054e48f"
const API_ENDPINT_LINK = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`
console.log(API_ENDPINT_LINK)

const apiFetch = async() => {
    const API_ENDPINT = fetch(API_ENDPINT_LINK)
    const API_Data = API_ENDPINT.then(response => response.json())
    const response = API_Data.then(json => json)
    console.log(await response)
}
apiFetch()
