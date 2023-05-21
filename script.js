let timerTon = document.querySelector('#timerTon')
let timeEl = document.querySelector('.time');
let timer = null;
let timerEnd = document.querySelector('#timerEnd');
let [hours, minutes,seconds] = [0,0,0];
let timerAlertH = document.querySelector('.timerAlertH')
let timerAlertM = document.querySelector('.timerAlertM')
let timerAlertS = document.querySelector('.timerAlertS')

function stopWatch() {
    seconds++;
    if ((hours == `${timerAlertH.value}`) 
        && (minutes == `${timerAlertM.value}`)
        && (seconds == `${timerAlertS.value}`)
        ){
            timerTon.play();
            timerEnd.setAttribute('class', 'timerEndView');
            resetTimer();
            timerAlertH.value = '';
            timerAlertM.value = '';
            timerAlertS.value = '';
        }else{
        if (seconds == 60) {
            seconds = 0;
            minutes++;
            if (minutes == 60) {
                minutes = 0;
                hours++;
            }
        }
    }

    let h = hours< 10 ? ('0' + hours) : hours;
    let m = minutes< 10 ? ('0' + minutes) : minutes;
    let s = seconds< 10 ? ('0' + seconds) : seconds;
    timeEl.innerHTML = h+':'+m+':'+s;
}

function startTimer() {
    if (timer != null) {
        clearInterval(timer)
    }timer = setInterval(stopWatch, 1000);
}

function stopTimer() {
    clearInterval(timer)
}

function resetTimer() {
    [hours, minutes, seconds] = [0,0,0];
    clearInterval(timer)
    timeEl.innerHTML = '00:00:00';

}

function timerEndClose() {
    timerEnd.setAttribute('class', 'timerEnd');
}

