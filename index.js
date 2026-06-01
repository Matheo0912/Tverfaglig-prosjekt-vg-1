// Left and Right navigation
const pages = [
    './classes/om.html',
    './classes/tech.html',
    './classes/yff.html',
    './classes/media.html',
    './classes/program.html',
    './classes/kontakt.html'
];

const leftButton = document.querySelector('.left');
const rightButton = document.querySelector('.right');

let currentPageIndex = pages.indexOf(
    window.location.pathname.split('/').pop()
);


function left() {
    currentPageIndex = (currentPageIndex - 1 + pages.length) % pages.length;
    window.location.href = pages[currentPageIndex];
}

function right() {
    currentPageIndex = (currentPageIndex + 1) % pages.length;
    window.location.href = pages[currentPageIndex];
}

leftButton.addEventListener('click', (left));
rightButton.addEventListener('click', (right));

document.addEventListener('keydown', (event) => {
    if (event.key === 'ArrowRight') right();
    if (event.key === 'ArrowLeft') left();
});

// nav glow
const currentFile = window.location.pathname.split('/').pop();
const navlinks = document.querySelectorAll('nav a');

navlinks.forEach(link => {
    if (link.getAttribute('href') === currentFile) {
        link.classList.add('active');
    }
});
