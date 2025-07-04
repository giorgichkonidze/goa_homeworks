const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');

let image = [
    'nature1.jpg',
    'nature2.jpg',
    'nature3.jpg',
    'nature4.jpg'
];

let num = 0;

function next(){
    let slider = document.querySelector('.slider');
    num++;
    if(num >= image.length){
        num = 0;
    };
    slider.src = image[num];
};

function prev(){
    let slider = document.querySelector('.slider');
    num--;
    if(num < 0){
        num = image.length - 1;
    };
    slider.src = image[num];
};

prevBtn.addEventListener('click', prev);
nextBtn.addEventListener('click', next);