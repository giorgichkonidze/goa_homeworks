function mergededuplicate(jsonStr1, jsonStr2) {
    const arr1 = JSON.parse(jsonStr1)
    const arr2 = JSON.parse(jsonStr2)
    const mergedMap = new Map()

    [arr1, arr2].forEach(obj => {
        mergedMap.set(obj.id, obj)
    })
    return Array.from(mergedMap.values())
}