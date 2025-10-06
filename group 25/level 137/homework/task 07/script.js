function groupCategory(jsonStr) {
    const data = JSON.parse(jsonStr)
    const grouped = {}

    data.forEach(({ item, category }) => {
        grouped[category].push(item)
    })
    return grouped
}