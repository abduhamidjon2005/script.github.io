const slider = document.querySelector('.slider'),
active = document.querySelector('#active'),
line1 = document.querySelector('#line1'),
line2 = document.querySelector('#line2'),
line3 = document.querySelector('#line3'),
line4 = document.querySelector('#line4'),
conteiner = document.querySelector('.container');

line1.addEventListener('click',function(){
    slider.style.transform = "translateX(0)";
    active.style.top="10px";
    conteiner.style.background = "#c4d419"
});
line2.addEventListener('click',function(){
    slider.style.transform = "translateX(-25%)";
    active.style.top="80px";
    conteiner.style.background = "#195bd7"
});
line3.addEventListener('click',function(){
    slider.style.transform = "translateX(-50%)";
    active.style.top="160px";
    conteiner.style.background = "#19d762"
});
line4.addEventListener('click',function(){
    slider.style.transform = "translateX(-75%)";
    active.style.top="220px";
    conteiner.style.background = "#d71919"
});