const circles = document.querySelectorAll('.circle');
const progress = document.getElementById('progress');
const prev = document.getElementById('prev');
const next = document.getElementById('next');

let currentActiveState = 1;


next.addEventListener('click', () => {
    currentActiveState++;

    if(currentActiveState > circles.length){
        currentActiveState = circles.length;
    }

    updateprogressBarStatus();
});


prev.addEventListener('click', () => {
    currentActiveState--;
    if(currentActiveState < 1){
        currentActiveState = 1;

    }

    updateprogressBarStatus();
});




function updateprogressBarStatus(){
    circles.forEach((circle,index) => {
        if(index < currentActiveState){
            circle.classList.add('active');
        }else{
            circle.classList.remove('active');
        }
    });


    const actives = document.querySelectorAll('.active');
    const percent = (((actives.length-1)/(circles.length-1)) *100) + '%';
    progress.style.width = percent;

    if(actives.length==1){
        prev.disabled = true;
    } else if(actives.length == circles.length){
        next.disabled = true;
    } else{
        next.disabled = false;
        prev.disabled = false;
    }
    

}