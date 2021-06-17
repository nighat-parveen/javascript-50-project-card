const bg = document.querySelector('.bg');
const loadText  = document.querySelector('.loader-text');

let load = 0;
let counter = 30;

let interval = setInterval(loading , 30);



function loading(){
    load++;
    

    if(load > 99){
        clearInterval(interval);
    }
    
    loadText.innerText = `${load}%`;
    
    loadText.style.opacity = Math.abs(scaler(load,0,100,1,0));
    bg.style.filter = `blur(${30-Math.abs(scaler(load,0,100,30,0)).toString().split('.')[0]}px)`;
    console.log();
    
}


const scaler = (num, in_min, in_max, out_min, out_max) => {
    return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_max ;
}