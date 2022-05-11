// console.log("countdwonevent")
let interval;


const clearEvent = ()=>{
    localStorage.clear();
    location.reload();
}
const event_form = document.getElementById('countdown_event');
const event_show_box = document.getElementById('event_show_box');
const addEventForm = ()=>{
    

    event_form.addEventListener('submit',e=>{
        e.preventDefault();
        const event_title = e.target.event_title.value;
        const event_date = e.target.event_date.value;
        const event_time = e.target.event_time.value;
        const event_message = e.target.event_message.value;
        
        localStorage.setItem('event',JSON.stringify({
            title:event_title,
            date:event_date,
            time:event_time,
            message:event_message
        }))
       
        location.reload();
        
        

    })
}


const countDownTime = (event,time_value_tr)=>{

    const curr_date = new Date();
    // first converted event time into milli seconds
    const full_event_schedule = event.date+' '+event.time;
    const event_date = new Date(full_event_schedule);
    let diff = Math.floor((event_date-curr_date)/1000);
    
    if(diff>=0){
        let day = Math.floor(diff/(24*3600))
        diff = diff % (24*3600)
        let hour = Math.floor(diff/3600);
        diff = diff%3600;
        let minute = Math.floor(diff/60);
        diff = diff%60;
        time_value_tr.innerHTML = `<td>${day}</td> <td>${hour}</td> <td>${minute}</td> <td>${diff}</td>`
    }else{
        clearInterval(interval);
        document.getElementById('message_show').innerHTML = `<h5 class="text-warning">${event.message}</h5>`
    }
    

    
    
    
    
}

const countDownEventShow = (event)=>{
    console.log(event.date)
    console.log(event.time)
    document.getElementById('event_title').innerText = event.title;
    let time_value_tr = document.getElementsByClassName('time_value')[0];
    interval = setInterval(()=>{
        countDownTime(event,time_value_tr);
    },1000);
    
    
    


}


const checkEvent = ()=>{
    const event = localStorage.getItem('event');

    
    
    if(event){
        event_form.setAttribute('hidden',true);
        event_show_box.removeAttribute('hidden');
        countDownEventShow(JSON.parse(event));
    }else{
        event_show_box.setAttribute('hidden',true);
        addEventForm();
    }
}

window.onload = checkEvent()

