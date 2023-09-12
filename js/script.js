var arrayLinks = [
    "https://www.youtube.com/embed/QfySIkxdBDw", "https://www.youtube.com/embed/skJcsRwaTRk", "https://www.youtube.com/embed/KWrFdEhyKjg", "https://www.youtube.com/embed/GboOdR8o2Hw", "https://www.youtube.com/embed/7wRCyIKNV58", "https://www.youtube.com/embed/eq9mJnbuKcQ", "https://www.youtube.com/embed/fL1dM8L48z0", "https://www.youtube.com/embed/3K5LIgHmNfI", "https://www.youtube.com/embed/CXRxrYBgUIo", "https://www.youtube.com/embed/1mPrUO_v4V0", "https://www.youtube.com/embed/4P4CmLyivpM"
];
function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
function buttonBg() {
    var buttonBackground;
    buttonBackground = document.getElementById('buttonChangeMode');
    if (document.body.style.backgroundColor = 'rgb(255, 255, 245)') {
        var btnGen;
        btnGen = document.getElementById('generate');
        document.body.style.backgroundColor = 'rgb(56, 56, 56)';
        document.body.style.color = 'rgb(255, 245, 245)';
        buttonBackground.innerHTML = '<i class="fa-solid fa-moon fa-2xl" style="color: #383838;"></i>';
        btnGen.style.backgroundColor = 'rgb(50, 50, 100)';
        btnGen.style.color = 'rgb(255, 255, 235)';
        btnGen.style.borderColor = 'rgb(255, 255, 235)';
    }
    else {
        var btnGen;
        btnGen = document.getElementById('generate');
        document.body.style.backgroundColor = 'rgb(255, 255, 245)';
        document.body.style.color = 'rgb(50, 50, 50)';
        buttonBackground.innerHTML = '<i class="fa-solid fa-sun fa-2xl" style="color: #fffff5;"></i>';
        btnGen.style.backgroundColor = 'rgb(255, 255, 225)';
        btnGen.style.color = 'rgb(50, 50, 70)';
        btnGen.style.borderColor = 'rgb(50, 50, 70)';
    }
}
function genVideos() {
    var rndmNum;
    var divEl;
    divEl = document.getElementById('genDiv');
    if (divEl.innerHTML != "") {
        divEl.innerHTML = '';
    }
    rndmNum = getRndInteger(0, arrayLinks.length - 1);
    divEl.innerHTML = '<iframe src="' + arrayLinks[rndmNum] + '"title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>';
}
