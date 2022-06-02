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

iconEl.addEventListener('click', navOpen);

closeEl.addEventListener('click', navClose);


// AOS init 

AOS.init ({
    offset:200,
    delay:100,
    duration:400,
    easing: 'ease',
    once: false,
    mirror: false,
    anchorPlacement: 'top-bottom'
})