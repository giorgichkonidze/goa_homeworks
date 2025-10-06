function sortBypriority(jsonStr){
    const data =JSON.parse(jsonStr)
    return data.sort((a, b) => a.priority-b.priority)
}