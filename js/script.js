'use strict';

AOS.init({
    duration: 1000, // Длительность анимации в миллисекундах
    delay: 200, // Задержка перед началом анимации
    once: true, // Анимация срабатывает только один раз
    offset: 120, // Смещение (в пикселях) от точки срабатывания
});

// Примеры анимаций
// fade-up, fade-down, fade-left, fade-right
// slide-up, slide-down
// zoom-in, zoom-out
// flip-left, flip-right

// Функционал плавной прокрутки по якорю
const chevron = document.querySelector('.chevron');
window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
        chevron.style.display = 'flex';
    } else {
        chevron.style.display = 'none';
    }

    chevron.addEventListener('click', (e) => {
        e.preventDefault();
        document.querySelector('#start').scrollIntoView({
            behavior: 'smooth',
        });
    });
});

const serviceItems = document.querySelectorAll('.service__item');
serviceItems.forEach((item) => {
    let srcImg;
    const img = item.querySelector('img');
    item.addEventListener('mouseenter', (e) => {
        if (e.target.closest('.service__item')) {
            srcImg = img.src;
            img.src = './img/car-2.jpg';
        }
    });
    item.addEventListener('mouseleave', (e) => {
        img.src = srcImg;
    });
});
