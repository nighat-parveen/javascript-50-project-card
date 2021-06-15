const screens = document.querySelectorAll('.screen');
const playButton = document.getElementById('play-btn');
const choose_btns = document.querySelectorAll('.choose-img-btn');
const gameContainer = document.getElementById('game-container');
const score = document.getElementById('score');
const time = document.getElementById('time');
const message = document.getElementById('message');

let _time = 0;
let _score = 0;
let _sec = 0;
let selectedImage = {};



playButton.addEventListener('click' , () => {
    screens[0].classList.add('up');
});


choose_btns.forEach(button => {
    button.addEventListener('click', () => {

        // get selected image 
        const image_data = button.querySelector('img');
        let src = image_data.getAttribute('src');
        let alt= image_data.getAttribute('alt');
        selectedImage = { src, alt };

        // create insect and inject it in to DOM
        setTimeout(createInsect, 1000);
        // set Time Interval
        setInterval(startGame,1000);

        // move the screen down 
        screens[1].classList.add('up');

        


    });
});

function createInsect (){
    const insect = document.createElement('div');
    insect.classList.add('insect');
    
    const { x,y } = getRandomLocation();

    insect.style.top = `${x}px`;
    insect.style.left = `${y}px`;
    // insect.style.transform = `rotate(${Math.floor(Math.random()*360)}deg)`;


    insect.innerHTML = `<img src="${selectedImage.src}" 
                                alt="${selectedImage.alt}" 
                                style="transform: rotate(${Math.floor(Math.random()*360)}deg"/>`;

    insect.addEventListener('click', catchInsect);
    

    gameContainer.append(insect);
    

}

function getRandomLocation(){
    const width = window.innerWidth;
    const height = window.innerHeight;
    
    const x = Math.floor(Math.random() * (width - 200) + 100);
    const y = Math.floor(Math.random() * (height - 200) + 100);
    console.log(x,y);
    
    return { x,y };
}


function startGame() {
    const _min = Math.floor(_sec / 60);
    const _seconds = Math.floor(_sec % 60);
    const __min = _min < 10 ? `0${_min}` : _min;
    const __sec = _seconds < 10 ? `0${_seconds}` : _seconds;
    time.innerHTML = `Time ${__min}:${__sec}`;
    _sec++;
}


function catchInsect(){
    scoreUp();
    console.log(this);
    
    this.classList.add('caught');
    // setTimeout
    setTimeout(this.remove(),2000)

    addMoreInsect();

}

function addMoreInsect(){
    setTimeout(createInsect,1000);
    setTimeout(createInsect,1200);
}


function scoreUp() {
    _score ++;
    if(score > 19){
        message.classList.add('visilble');
    }

    score.innerHTML = `score ${_score}`;
}

