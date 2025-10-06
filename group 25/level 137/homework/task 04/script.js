function transformMap(jsonStr) {
    const data =JSON.parse(jsonStr)
    return data.reduce((map, obj) => {
        map[obj.id] = obj.value
        return map
    })
}