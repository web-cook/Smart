"use strict"

const isMobile = {
    Android: function () {
        return navigator.userAgent.match(/Android/i);
    },
    BlackBerry: function () {
        return navigator.userAgent.match(/BlackBerry/i);
    },
    iOS: function () {
        return navigator.userAgent.match(/iPhone|iPad|iPod/i);
    },
    Opera: function () {
        return navigator.userAgent.match(/Opera Mini/i);
    },
    Windows: function () {
        return navigator.userAgent.match(/IEMobile/i);
    },
    any: function () {
        return (
            isMobile.Android() ||
            isMobile.BlackBerry() ||
            isMobile.iOS() ||
            isMobile.Opera() ||
            isMobile.Windows()
        );
    }
};

if (isMobile.any()) {
    document.body.classList.add('_touch');

    let menuArrows = document.querySelectorAll('.menu__arrow');
    if (menuArrows.length > 0){
        for (let index = 0; index < menuArrows.length; index++) {
            const menuArrow = menuArrows[index];
            menuArrow.addEventListener("click", function (e) {
                menuArrow.parentElement.classList.toggle('_active');
            });
        }
    }

} else {
    document.body.classList.add('_pc');
}

//Меню бургер

const iconMenu = document.querySelector('.menu__icon');
const menuBody = document.querySelector('.menu__body');
if (iconMenu) {
    iconMenu.addEventListener("click", function (e) {
        document.body.classList.toggle('_lock');
        iconMenu.classList.toggle('_active');
        menuBody.classList.toggle('_active');
    });
}

//Cлайдер
let icon = document.getElementById('icon');//большая иконка на карточке
let item = document.querySelectorAll('.features__item');//коллекция элементов списка

let slider = {
    slides: ['far fa-heart','myIcons_briefcase',//массив с классами иконок
    'myIcons_leaf',
    'myIcons_rectangle-portrait',
    'myIcons_umbrella'],
    frame: 1,//стартовая иконка
    set: function(image) {
        icon.className = image;
        },

    init: function() {
        this.set(this.slides[this.frame]);
    }
};

window.onload = function() {
    slider.init();
    item[slider.frame].classList.add('_active');//добавляется класс к стартовому элементу
}

let itemPrev = item[slider.frame];//переменная для хранения предыдущего элемента

for (let i = 0; i < item.length; i++) {
    if(item[i]){
        item[i].addEventListener('click', function(e) {
            slider.frame = i;
            slider.init();
            if(itemPrev.classList.contains('_active')){
                itemPrev.classList.remove('_active');
            }
            item[i].classList.add('_active');
            itemPrev = item[i];//предыдущий элемент перезаписывается
        })
    }
}

//слайдер screenshots
let galleryItem = Array.from(document.querySelectorAll('.show__column'));
let arrowLeft = document.querySelector('.arrow__left');
let arrowRight = document.querySelector('.arrow__right');

const slide = 0;
let size = galleryItem.length;

    if (arrowLeft) {
        arrowLeft.addEventListener('click', function(e) {
            let current = galleryItem[slide].innerHTML;
            for (let i = 0; i < (size - 1); i++) {
                galleryItem[i].innerHTML = galleryItem[i+1].innerHTML;
            }
            galleryItem[size-1].innerHTML = current;
        })
    }

    if (arrowRight) {
        arrowRight.addEventListener('click', function(e) {
            let current = galleryItem[size-1].innerHTML;
            for (let i = (size-1); i > 0; i--){
                galleryItem[i].innerHTML = galleryItem[i-1].innerHTML;
            }
            galleryItem[slide].innerHTML = current;
        })
    }

//слайдер about

let userpic = document.getElementById('userpic');
let message = document.querySelector('.about__message');
let sign = document.querySelector('.about__sign');
let button = document.querySelectorAll('.about__pages span');

let buttonPrev = button[0];
buttonPrev.classList.add('_active');

for (let i = 0; i < button.length; i++) {
    if(button[i]) {
        button[i].addEventListener('click', function(e) {
            if (buttonPrev.classList.contains('_active')) {
                buttonPrev.classList.remove('_active')
            }
            button[i].classList.add('_active');
            buttonPrev = button[i];
            Show();
        })
    }
}

let step = 0.01;
function Show() {    
    userpic.style.opacity = 0 + step;
    message.style.opacity = 0 + step;
    sign.style.opacity = 0 + step;
    step += 0.01;
    // console.log(step);
    // console.log(message.style.opacity);
    if (step >= 0.99999999999 && userpic.style.opacity >= 0.99999999999) {
        return step = 0.01;
    }
    setTimeout(Show, 7);
}



