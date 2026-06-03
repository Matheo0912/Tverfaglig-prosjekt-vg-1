// Left and Right navigation
function nav() {
    const pages = [
        'om.html',
        'tech.html',
        'yff.html',
        'media.html',
        'program.html',
        'kontakt.html'
    ];

    const leftButton = document.querySelector('.left');
    const rightButton = document.querySelector('.right');

    let currentPageIndex = pages.indexOf(
        window.location.pathname.split('/').pop()
    );


    function left() {
        currentPageIndex =
            (currentPageIndex - 1 + pages.length) % pages.length;
        window.location.href = pages[currentPageIndex];
    }

    function right() {
        currentPageIndex =
            (currentPageIndex + 1) % pages.length;
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
};
nav();

// Autoscroll slider
function autoScroll() {
    function createSlider(id, array, speed = 1200) {
        const element = document.querySelector(id);
        if (!element) return;

        let currentIndex = 0;
        let interval = null;
        let isRunning = false;
        let userpause = false;

        function updateImage() {
            element.src = array[currentIndex];
        }

        function start() {            
            if (interval) return;
            interval = setInterval(() => {
                currentIndex = (currentIndex + 1) % array.length;
                updateImage();
            }, speed);

            isRunning = true;
        }

        function stop() {
            clearInterval(interval);
            interval = null;
            isRunning = false;
        }

        updateImage();
        start();

        function toggleInterval() {
            userpause = !userpause;

            if (isRunning) {
                stop();
            } else {
                start();
            }
            // isRunning = !isRunning;
        }

        function next() {
            currentIndex = (currentIndex + 1) % array.length;
            updateImage();
        }

        function prev() {
            currentIndex = (currentIndex - 1 + array.length) % array.length;
            updateImage();
        }

        return { start, stop, next, prev, toggleInterval, element, userpause };
    }

    const yffImg1 = [
        "../img/yff/pc1.jpg", "../img/yff/pc2.jpg", "../img/yff/pc3.jpg", "../img/yff/pc4.jpg", "../img/yff/pc5.jpg",
        "../img/yff/pc6.jpg", "../img/yff/pc7.jpg", "../img/yff/pc8.jpg", "../img/yff/pc9.jpg", "../img/yff/pc10.jpg"
    ];

    const yffimg2 = [
        "../img/yff/car1.png", "../img/yff/car2.png", "../img/yff/car3.png", "../img/yff/car4.png", "../img/yff/car5.png",
        "../img/yff/car6.png", "../img/yff/car7.png"
    ];

    const yffimg3 = [
        "../img/yff/Praksis/koding.jpg", "../img/yff/Praksis/knust1.jpg", "../img/yff/Praksis/knust2.jpg", "../img/yff/Praksis/knust3.jpg", "../img/yff/Praksis/knust4.jpg", "../img/yff/Praksis/exam.jpg", "../img/yff/Praksis/media (8).jpg", "../img/yff/Praksis/Rutine1.jpg", "../img/yff/Praksis/rutine2.jpg", "../img/yff/Praksis/rutine3.jpg", "../img/yff/Praksis/rutine4.jpg", "../img/yff/Praksis/setup2.jpg", "../img/yff/Praksis/setup3.jpg"
    ];

    const mediaImg1 = [
        "../img/media/Twine1.png", "../img/media/Twine2.png", "../img/media/Twine3.png", "../img/media/Twine4.png", "../img/media/Twine5.png",
        "../img/media/Twine6.png"
    ];

    const techimgs1 = [
        "../img/tech/Space1.png", "../img/tech/Space2.png", "../img/tech/Space3.png", "../img/tech/Space4.png", "../img/tech/Space5.png",
        "../img/tech/Space6.png", "../img/tech/Space7.png", "../img/tech/Space8.png", "../img/tech/Space9.png", "../img/tech/Space10.png"
    ];

    const programimg1 = [
        "../img/program/colorbox/color1.png", "../img/program/colorbox/color2.png", "../img/program/colorbox/color3.png", "../img/program/colorbox/color4.png"
    ];

    const programimg2 = [
        "../img/program/Movie/move1.png", "../img/program/Movie/move2.png", "../img/program/Movie/move3.png", "../img/program/Movie/move4.png",
        "../img/program/Movie/move5.png"
    ]

    const programimg3 = [
        "../img/program/Firebase/fire1.png", "../img/program/Firebase/fire2.png", "../img/program/Firebase/fire3.png", "../img/program/Firebase/fire4.png",
        "../img/program/Firebase/fire5.png", "../img/program/Firebase/fire6.png", "../img/program/Firebase/fire7.png", "../img/program/Firebase/fire8.png"
    ]

    const programimg4 = [
        "../img/program/math/math1.png", "../img/program/math/math2.png", "../img/program/math/math3.png", "../img/program/math/math4.png",
        "../img/program/math/math5.png", "../img/program/math/math6.png", "../img/program/math/math7.png"
    ]

    const program5 = [
        "../img/program/git/git1.png", "../img/program/git/git2.png", "../img/program/git/git3.png", "../img/program/git/git4.png",
        "../img/program/git/git5.png", "../img/program/git/git6.png"
    ]

    const sliders = [
        createSlider('#slide1', yffImg1),
        createSlider('#slide4', yffimg2, 1500),
        createSlider('#slide2', mediaImg1),
        createSlider('#slide3', techimgs1),
        createSlider('#slide6', yffimg3, 1700),
        createSlider('#slide5', programimg1, 1300),
        createSlider('#slide7', programimg2, 1400),
        createSlider('#slide8', programimg3, 1500),
        createSlider('#slide9', programimg4, 1600),
        createSlider('#slide10', program5, 1600)
    ].filter(slider => slider !== undefined);

    // let currentIndex1 = 0;
    // const slide2Element = document.querySelector('#slide2');

    // if (slide2Element) {
    //     setInterval(() => {
    //         currentIndex1 = (currentIndex1 + 1) % imgs1.length;
    //         slide2Element.src = imgs1[currentIndex1];
    //     }, 1200);
    // }

    const sliderObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            const matchedSlider = sliders.find(s => s.element === entry.target);
            
            if (matchedSlider) {
                if (entry.isIntersecting) {
                    activeSlider = matchedSlider;
                    matchedSlider.start();
                   
                } else {
                    matchedSlider.stop();
                }
            }
        });
    }, {
        threshold: 0.9
    });

    sliders.forEach(slider => {
        sliderObserver.observe(slider.element);
    });

}
autoScroll();

let activeSlider = null;

window.addEventListener('keydown', (e) => {
    if (!activeSlider) return;

    if (e.code === 'Space') activeSlider.toggleInterval();

    if (e.code === 'ArrowUp') {
        e.preventDefault();
        activeSlider.next();
    }
    if (e.code === 'ArrowDown') {
        e.preventDefault();
        activeSlider.prev();
    }
});

// Video play/pause
function videocontrol() {
    const videos = document.querySelectorAll('video');
    // Variable to store the currently active video on screen
    let activeVideo = null;

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Set this video as the active one
                activeVideo = entry.target;
            } else {
                // Pause when left screen
                entry.target.pause();
                if (activeVideo === entry.target) {
                    activeVideo = null;
                }
            }
        });
    }, {
        threshold: 0.7
    });

    videos.forEach(video => {
        observer.observe(video);
    });

    document.addEventListener('keydown', (e) => {
        if (e.code === 'Space') {
            e.preventDefault();

            if (activeVideo) {
                if (activeVideo.paused) {
                    activeVideo.play();
                } else {
                    activeVideo.pause();
                }
            }
        }
    });
};
videocontrol();