
let timer = 0;

let interval;
let show_timer_box = document.getElementById('show_timer_box');
let start_or_pause = document.getElementById('start_or_pause');
let stop_or_reset = document.getElementById('stop_or_reset');
stop_or_reset.setAttribute('hidden',true);

const convert_double = (value)=>{
    return value<10?'0'+value:value;
}

const time_format = ()=>{
    let hr = Math.floor(timer/3600);
    timer = timer%3600;
    let min = Math.floor(timer/60);
    let second = timer %60;
    return `<span>${convert_double(hr)}:${convert_double(min)}:${convert_double(second)}</span>`
    

}


const startTimer = ()=>{
    stop_or_reset.removeAttribute('hidden');
    interval = setInterval(()=>{
        timer +=1;
        show_timer_box.innerHTML = time_format();
    },1000);
    start_or_pause.setAttribute('onclick','pauseTimer()');
    start_or_pause.setAttribute('class','btn_pause');

    start_or_pause.innerText = 'pause'

}

const stopTimer = ()=>{
    clearInterval(interval);
    
    start_or_pause.setAttribute('hidden',true);
    stop_or_reset.setAttribute('onclick','resetTimer()');
    stop_or_reset.setAttribute('class','btn_reset');
    stop_or_reset.innerText = 'reset';

}

const pauseTimer = ()=>{
    clearInterval(interval);
    start_or_pause.setAttribute('onclick','startTimer()');
    start_or_pause.setAttribute('class','btn_resume')
    start_or_pause.innerText = "resume"

}

const resetTimer = ()=>{
    timer = 0;
    show_timer_box.innerHTML = '<span>00:00:00</span>';
    start_or_pause.removeAttribute('hidden')
    start_or_pause.setAttribute('class','btn_start');
    start_or_pause.setAttribute('onclick','startTimer()');
    start_or_pause.innerText = "start";
    stop_or_reset.setAttribute('onclick','stopTimer()');
    stop_or_reset.setAttribute('class','btn_stop');
    stop_or_reset.innerText = "stop";
    stop_or_reset.setAttribute('hidden',true);
}