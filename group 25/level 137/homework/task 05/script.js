function validatestructure(jsonStr) {
    const data =JSON.parse(jsonStr)
    return data.every(obj => 
        obj.hasOwnProperty('name') && obj.hasOwnProperty('age') && obj.hasOwnProperty('email')
    )
}