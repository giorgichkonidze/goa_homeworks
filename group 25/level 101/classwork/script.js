let inc = document.querySelector('#inc')
let dec = document.querySelector('#dec')
let div = document.querySelector('#divbox')

function increase() {
    if(!div.classList.contains('big')) {
        div.classList.add('big')
        div.classList.remove('small')
    }
}
function decrease() {
    if(!div.classList.contains('small')) {
        div.classList.add('small')
        div.classList.remove('big')
    }
}