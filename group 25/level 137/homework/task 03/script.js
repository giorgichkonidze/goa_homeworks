function passedscore(jsonStr) {
    const data = JSON.parse(jsonStr)
    return data.filter(obj => obj.score >80 && obj.passed === true).length
}