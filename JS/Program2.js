// Programmering

// math.random
let easy = document.getElementById("ease")
let mid = document.getElementById("mid")
let hard = document.getElementById("hard")

let targetnumber = Math.floor(Math.random() * 1000);
console.log(targetnumber);

let mathinput = document.getElementById("mathinput");
let mathbutton = document.getElementById("mathbutton");

function randomNumber() {
    let usernumber = Number(mathinput.value);

    if (usernumber === targetnumber) {
        document.getElementById("mathresult").innerHTML = "Riktig!";
        targetnumber = Math.floor(Math.random() * 1000);
        console.log(targetnumber);

        // const program = document.getElementById("program");

        // const originalBackground = "linear-gradient(135deg, #020617 0%, #0ea5e9 100%)";

        // program.style.background = "linear-gradient(135deg, #1baf0b 0%, #e5e90e 100%)";

        // setTimeout(() => {
        //     program.style.background = originalBackground;
        // }, 500);

    } else if (usernumber < targetnumber) {
        document.getElementById("mathresult").innerHTML = "For lavt...";
    } else if (usernumber > targetnumber) {
        document.getElementById("mathresult").innerHTML = "For høyt...";
    }

}

if (mathinput) {
    mathinput.addEventListener("keydown", function (e) {
        if (e.key === "Enter") {
            randomNumber();
        }
    });
}
if (mathbutton) {
    mathbutton.addEventListener("click", function () {
    randomNumber();
});
}

if (easy) {
    easy.addEventListener("click", function () {
        targetnumber = Math.floor(Math.random() * 100);
        console.log(targetnumber);
        mathinput.maxLength = 3;
        if (mathinput.value.length > 3) {
            mathinput.value = "";
        }
    });
}
if (mid) {
    mid.addEventListener("click", function () {
        targetnumber = Math.floor(Math.random() * 1000);
        console.log(targetnumber);
        mathinput.maxLength = 4;
        if (mathinput.value.length > 4) {
            mathinput.value = "";
        }
    });
}
if (hard) {
    hard.addEventListener("click", function () {
        targetnumber = Math.floor(Math.random() * 10000);
        console.log(targetnumber);
        mathinput.maxLength = 5;
        if (mathinput.value.length > 5) {
            mathinput.value = "";
        }
    });
}

// colorbox

const colors = ["AliceBlue", "AntiqueWhite", "Aqua", "Aquamarine", "Azure", "Beige", "Bisque", "Black", "BlanchedAlmond", "Blue", "BlueViolet", "Brown", "BurlyWood", "CadetBlue", "Chartreuse", "Chocolate", "Coral", "CornflowerBlue", "Cornsilk", "Crimson", "Cyan", "DarkBlue", "DarkCyan", "DarkGoldenRod", "DarkGray", "DarkGrey", "DarkGreen", "DarkKhaki", "DarkMagenta", "DarkOliveGreen", "DarkOrange", "DarkOrchid", "DarkRed", "Crimson", "DarkSalmon", "DarkSeaGreen", "DarkSlateBlue", "DarkSlateGray", "DarkSlateGrey", "DarkTurquoise", "DarkViolet", "DeepPink", "DeepSkyBlue", "DimGray", "Pink", "HotPink",]

let input = document.getElementById("text");
let box1 = document.getElementById("box1");
let color1 = document.getElementById("color1")
let color2 = document.getElementById("color2")
let box2 = document.getElementById("box2")
let btn1 = document.getElementById("button1");
let btn2 = document.getElementById("button2");
let btn3 = document.getElementById("button3");

function setColor() {
    box1.style.backgroundColor = input.value;
    color1.textContent = input.value;
    input.style.backgroundColor = input.value;
    console.log(input.value);
}

function setRandomColor() {
    let randomColor = colors[Math.floor(Math.random() * colors.length)];
    console.log(randomColor);
    box2.style.backgroundColor = randomColor;
    color2.textContent = randomColor;
    input.style.backgroundColor = randomColor;
}

if (btn1) {
    btn1.addEventListener("click", function () {
        setColor();
    });
}

if (btn2) {
    btn2.addEventListener("click", function () {
        setRandomColor();
    });
}

if (btn3) {
    btn3.addEventListener("click", function () {
        box1.style.backgroundColor = "";
        color1.textContent = "";
        box2.style.backgroundColor = "";
        color2.textContent = "";
        input.style.backgroundColor = "";
        input.value = "";
    });
}

if (btn1) {
    btn1.addEventListener("keydown", function (event) {
        if (event.key === "Enter") {
            setColor();
        }
});
}

if (input) {
    input.addEventListener("keydown", function (event) {
        if (event.key === "Enter") {
            setColor();
            input.value = "";
            input.focus();
        }
    });
}

window.addEventListener("keydown", function (event) {
    if (document.activeElement.tagName === "INPUT" || document.activeElement.tagName === "TEXTAREA") {
        return;
    }

    if (event.key.toLowerCase() === "r") {
        setRandomColor();
    }

    if (event.key.toLowerCase() === "e") {
        box1.style.backgroundColor = "";
        color1.textContent = "";
        box2.style.backgroundColor = "";
        color2.textContent = "";
        input.style.backgroundColor = "";
        input.value = "";
    }
});

// Movie
function movie() {
    const filmname = document.getElementById("searchInput").value;
    const apiKey = "dafed750";

    const url = `https://www.omdbapi.com/?t=${filmname}&apikey=${apiKey}`;

    const name = document.getElementById("name");
    const release = document.getElementById("release");
    const genre = document.getElementById("genre");
    const plot = document.getElementById("plot");
    const poster = document.getElementById("poster");

    fetch(url)
        .then(res => res.json())
        .then(data => {

            if (data.Response === "False") {
                name.innerHTML = "Movie not found";
                release.innerHTML = "";
                genre.innerHTML = "";
                plot.innerHTML = "";
                poster.src = "";
                return;
            }

            name.innerHTML = data.Title;
            release.innerHTML = data.Released;
            genre.innerHTML = data.Genre;
            plot.innerHTML = data.Plot;
            poster.src = data.Poster;
        });
}

let searchInput = document.getElementById("searchInput");

if (searchInput) {
    searchInput.addEventListener("keydown", (event) => {
        if (event.key === "Enter") {
            movie();
        }
    });
}

let searchBtn = document.getElementById("searchBtn");

if (searchBtn) {
    searchBtn.addEventListener("click", () => {
        movie();
    });
}