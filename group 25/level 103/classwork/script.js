let htmlbtn = document.querySelector('.htmlbtn')
let cssbtn = document.querySelector('.cssbtn')
let jsbtn = document.querySelector('.jsbtn')
let img = document.querySelector('img')

console.log(htmlbtn, cssbtn, jsbtn)

function html() {
    img.src = "html.png"
}
function css() {
    img.src ="css.png"
}
function js() {
    img.src = "js.png"
}
htmlbtn.addEventListener('click', html)
cssbtn.addEventListener('click', css)
jsbtn.addEventListener('click', js)