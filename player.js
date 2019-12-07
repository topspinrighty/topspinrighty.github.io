const myVideo = document.getElementById('myVideo');
const btnPlay = document.getElementById('btnPlay');
const btnPause = document.getElementById('btnPause');
const btnStop = document.getElementById('btnStop');
const timeOut = document.getElementById('timeOut');
const vidNumOut = document.getElementById('vidNum');
let timer = null;

btnPlay.addEventListener('click', vidAction);
btnPause.addEventListener('click', vidAction);
btnStop.addEventListener('click', vidAction);
// btnGoTo.addEventListener('click', goToGame);
myVideo.addEventListener('click', vidEnded);

const vids = ["The Big Bang Theory S04E01 The Robotic Manipulation (1080p x265 Joy)"];
let vidPlaying = 0;

function vidAction(event){
    switch(event.target.id){
        case "btnPlay":
            playVideo();
            timer = setInterval(update, 100);
            break;
        case "btnPause":
            myVideo.pause();
            break;
        case "btnStop":
            myVideo.pause();
            myVideo.currentTime = 0;
            break;
    }
}

function playVideo(){
    myVideo.play();
    timer = setInterval(update, 100);
}

function update(){
    timeOut.innerHTML = "Time:" + myTime(myVideo.currentTime) + "/" + myTime(myVideo.duration);
}

function myTime(time){
    let hr = ~~(time/3600);
    let min = ~~((time % 3600) / 60);
    let sec = time % 60;
    let sec_min = "";
    if(hr > 0){
      sec_min += "" + hrs + ":" + (min < 10 ? "0" : "");
    }
    sec_min += "" + min + ":" + (sec < 10 ? "0" : "");
    sec_min += "" + Math.round(sec);
    return sec_min;
}

function vidEnded(){
    clearInterval(timer);
    timeOut.innerHTML = "Timer: 0";
    playVideo();
}



