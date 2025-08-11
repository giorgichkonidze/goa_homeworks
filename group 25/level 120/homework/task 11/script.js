function getDefaultName() {
    return 'anonimus'
}
function greet(name = getDefaultName()) {
    console.log('hello, ' + name)
}
greet()