let iconEl = document.querySelector('.nav-icon');
let closeEl = document.querySelector('.nav-close');
let listEl = document.querySelector('.nav-list');
let overlay = document.querySelector('.nav-bgOverlay');

const navOpen = () => {
    listEl.classList.add('show');
    overlay.classList.add('active');
    document.body.style = `
    visibility:visible;
    height:100vh;
    width:100vw;
    overflow: hidden;
    `
}

const navClose = () => {
    listEl.classList.remove('show');
    overlay.classList.remove('active');
    document.body.style = `
    visibility:visible;
    height:100vh;
    width:100vw;
    overflow-x: hidden;
    `
}

window.onload = navClose();

iconEl.addEventListener('click', navOpen);

closeEl.addEventListener('click', navClose);


// AOS init 

AOS.init ({
    offset:90,
    delay:70,
    duration:300,
    easing: 'ease',
    once: false,
    mirror: false,
    anchorPlacement: 'top-bottom'
})