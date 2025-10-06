function extractname(jsonstr) {
    const data = JSON.parse(jsonstr)
    return data.map(obj => obj.name)
}