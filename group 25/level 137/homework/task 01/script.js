function filter(jsonstr) {
    const data = JSON.parse(jsonstr)
    return data.filter(obj => obj.active === false)
}