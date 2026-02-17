document.addEventListener('DOMContentLoaded', () => {
    // --- БУРГЕР ---
    const burger = document.querySelector('.burger');
    const menu = document.querySelector('.header__menu');
    const body = document.body;

    if (burger && menu) {
        burger.addEventListener('click', () => {
            burger.classList.toggle('active');
            menu.classList.toggle('active');
            if (menu.classList.contains('active')) {
                body.style.overflow = 'hidden';
            } else {
                body.style.overflow = '';
            }
        });

        menu.querySelectorAll('a').forEach((link) => {
            link.addEventListener('click', () => {
                burger.classList.remove('active');
                menu.classList.remove('active');
                body.style.overflow = '';
            });
        });
    }

    // --- СЛАЙДЕР ---
    const slider = document.querySelector('.feedback__slider');
    const prevBtn = document.querySelector('.feedback__control--prev');
    const nextBtn = document.querySelector('.feedback__control--next');

    if (slider && prevBtn && nextBtn) {
        nextBtn.addEventListener('click', () => {
            const scrollAmount = 320;
            slider.scrollBy({left: scrollAmount, behavior: 'smooth'});
        });

        prevBtn.addEventListener('click', () => {
            const scrollAmount = 320;
            slider.scrollBy({left: -scrollAmount, behavior: 'smooth'});
        });
    }
});
