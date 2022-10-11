const navSlide = () => {
    const menu = document.querySelector('.menu')
    const nav = document.querySelector('.nav-links ')
    const main = document.querySelector('main')

    menu.addEventListener('click',()=>{
    
        nav.classList.toggle('nav-active');

        menu.classList.toggle('menu-toggle');

        main.classList.toggle('main-push');

    });
}

navSlide();
