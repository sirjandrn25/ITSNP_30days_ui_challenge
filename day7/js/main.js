
        
const country_detail_list = [
    {
        'country':'Bangkok',
        'time_offset':(1*60+15)*60,
        'ahead':true
        
    },
    {
        'country':'Taiwan',
        'time_offset':(2*60+15)*60,
        'ahead':true
    },
    {
        'country':'Sydney',
        'time_offset':(4*60+15)*60,
        'ahead':true
    },
    {
        'country':'Berlin',
        'time_offset':(3*60+45)*60,
        'ahead':false
    },
   
   
    {
        'time_offset':(9*60+45)*60,
        'country':'New York',
        'ahead':false
    },
    
    
]

const list_item = (country_detail)=>{
    let curr_date = new Date();
    const curr_time = (curr_date.getHours()*60+curr_date.getMinutes())*60+curr_date.getSeconds();
    
    let actualDate = '';
    let temp = 0;
    if(country_detail.ahead){
        temp = curr_time + country_detail.time_offset;
    }
    else{
        temp = curr_time - country_detail.time_offset;
    }
    let hour = Math.floor(temp/3600);
    temp = temp%3600;
    let minute = Math.floor(temp/60);
    let seconds = temp %60;
    
    let actual_date;
    if(hour >24){
        hour = hour-24;
        actual_date = new Date(`  ${curr_date.getFullYear()}-${curr_date.getMonth()}-${curr_date.getDate()+1}`)
    }else if(hour<0){
        hour = hour+24;
        actual_date = new Date(`${curr_date.getFullYear()}-${curr_date.getMonth()}-${curr_date.getDate()-1}`)
    }else{
        actual_date = curr_date;
    }
    

    
    return `<li class="list-group-item bg-light d-flex justify-content-between align-items-center">
                    <div class="d-flex flex-column ">
                        <span class="h4">${country_detail.country}</span>
                        <span> ${actual_date.toDateString()}</span>
                    </div>
                    <span class="h3">
                        ${hour<10?'0'+String(hour):hour}:${minute<10?'0'+String(minute):minute}:${seconds<10?'0'+String(seconds):seconds}
                    </span>
                </li> `;
}


const OtherCountryShow = ()=>{
    let world_times_box = document.getElementById('other_country_times');
    world_times_box.innerHTML = '';
     
    for(let country_detail of country_detail_list ){
        world_times_box.innerHTML += list_item(country_detail);
    }
}
const myCountryShow = ()=>{
    let my_country_box = document.getElementById('my_country');
    my_country_box.innerHTML = list_item({'country':'Kathmandu','time_offset':0,'ahead':false})
}


window.onload = setInterval(()=>{
    myCountryShow();
    OtherCountryShow();
},1000);
