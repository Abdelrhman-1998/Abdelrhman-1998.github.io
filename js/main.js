/*---------------------- Variables-------------------------*/

let days_decimals=Days.firstElementChild;
let days_ones=Days.lastElementChild;

let hours_decimals=Hours.firstElementChild;
let hours_ones=Hours.lastElementChild;

let minutes_decimals=Minutes.firstElementChild;
let minutes_ones=Minutes.lastElementChild;

let seconds_decimals=Seconds.firstElementChild;
let seconds_ones=Seconds.lastElementChild;

let video_buttons=document.getElementsByClassName("videoButton");
let video_content=document.getElementById("myVideo");
let video_sources=["pexels-ignat-schukin-10541160.mp4","pexels-mart-production-7565628.mp4","pexels-rostislav-uzunov-7710243.mp4","pexels-rostislav-uzunov-8252781.mp4","production ID_3796398 .mp4","production ID_4440816.mp4","pexels-artem-podrez-7048753.mp4"];
let shuffle_videos=document.getElementById("shuffle");
/*---------------------------------------------------*/
function counterUP(){
    if(seconds_decimals.textContent<6)
    {
        if(seconds_ones.textContent<9){
            ++seconds_ones.textContent;
            Seconds.lastElementChild.textContent=seconds_ones.textContent;
        }
        else{
            Seconds.lastElementChild.textContent=0;
            if(seconds_decimals.textContent<5){
                ++seconds_decimals.textContent;
                seconds_decimals.textContent=seconds_decimals.textContent;
            }
            else{
                ++seconds_decimals.textContent;
                var startMinute=seconds_decimals.textContent;
                Seconds.firstElementChild.textContent=0;
            }
            }
    }
    if(startMinute==6){
        if(minutes_decimals.textContent<6)
        {
            if(minutes_ones.textContent<9)
            {
                    ++minutes_ones.textContent;
                    Minutes.lastElementChild=minutes_ones.textContent;
            }
            else
            {
                Minutes.lastElementChild.textContent=0;
                    if(minutes_decimals.textContent<5){
                        ++minutes_decimals.textContent;
                        minutes_decimals.textContent=minutes_decimals.textContent;
                    }
                    else{
                        ++minutes_decimals.textContent;
                        var startHour=minutes_decimals.textContent;
                        Minutes.firstElementChild.textContent=0;
                    }
            }
        }
    }
    if(startHour==6){
        console.log("yes")
        if(hours_decimals.textContent<2)
        {
            if(hours_ones.textContent<9)
            {
                    ++hours_ones.textContent;
                    Hours.lastElementChild=hours_ones.textContent;
            }
            else
            {
               Hours.lastElementChild.textContent=0;
                ++hours_decimals.textContent;
                hours_decimals.textContent=hours_decimals.textContent;
            }
        }
        else{
            if(hours_ones.textContent<3)
            {
                    ++hours_ones.textContent;
                    Hours.lastElementChild=hours_ones.textContent;
            }
            else
            {
               var startDays=hours_ones.textContent;
               Hours.firstElementChild.textContent=0;
               Hours.lastElementChild.textContent=0;
            }
        }
    }
    if(startDays==3){
        if(days_ones.textContent<9)
        {
                ++days_ones.textContent;
                Days.lastElementChild=days_ones.textContent;
        }
        else
        {
           Days.lastElementChild.textContent=0;
           ++days_decimals.textContent;
           Days.firstElementChild.textContent=days_decimals.textContent;
        }
    }
    }
function counterDown(){
    if(days_decimals.textContent==0 && days_ones.textContent==0 && hours_decimals.textContent==0 && hours_ones.textContent==0 && minutes_decimals.textContent==0 && minutes_ones.textContent==0 && seconds_ones.textContent==0 && seconds_decimals.textContent==0){
        clearInterval(intervalCounterDown);
    }
    else{
        if(seconds_decimals.textContent>=0)
        {
            if(seconds_ones.textContent>0){
                --seconds_ones.textContent;
                Seconds.lastElementChild.textContent=seconds_ones.textContent;
            }
            else{
                Seconds.lastElementChild.textContent=9;
                if(seconds_decimals.textContent>0){
                    --seconds_decimals.textContent;
                    seconds_decimals.textContent=seconds_decimals.textContent;
                }
                else{
                        var startMinute=seconds_decimals.textContent;
                        Seconds.firstElementChild.textContent=5;
                        Seconds.lastElementChild.textContent=9;
    
                }
                }
        }
        if(startMinute==0){
            if(minutes_decimals.textContent>=0)
            {
                if(minutes_ones.textContent>0)
                {
                        --minutes_ones.textContent;
                        Minutes.lastElementChild=minutes_ones.textContent;
                }
                else
                {
                    Minutes.lastElementChild.textContent=9;
                        if(minutes_decimals.textContent>0){
                            --minutes_decimals.textContent;
                            minutes_decimals.textContent=minutes_decimals.textContent;
                        }
                        else{
                            var startHour=minutes_decimals.textContent;
                            Minutes.firstElementChild.textContent=5;
                            Minutes.lastElementChild.textContent=9;
                        }
                }
            }
        }
        if(startHour==0){
            if(hours_decimals.textContent>0)
            {
                if(hours_ones.textContent>0)
                {
                        --hours_ones.textContent;
                        Hours.lastElementChild=hours_ones.textContent;
                }
                else
                {
                   Hours.lastElementChild.textContent=9;
                    --hours_decimals.textContent;
                    hours_decimals.textContent=hours_decimals.textContent;
                }
            }
            else{
                if(hours_ones.textContent>0)
                {
                        --hours_ones.textContent;
                        Hours.lastElementChild=hours_ones.textContent;
                }
                else
                {
                   var startDays=hours_ones.textContent;
                   Hours.firstElementChild.textContent=2;
                   Hours.lastElementChild.textContent=3;
                }
            }
        }
        if(startDays==0){
            if(days_decimals.textContent>0)
            {
                if(days_ones.textContent>0)
                {
                        --days_ones.textContent;
                        Days.lastElementChild=days_ones.textContent;
                }
                else
                {
                   Days.lastElementChild.textContent=9;
                    --days_decimals.textContent;
                    days_decimals.textContent=days_decimals.textContent;
                }
            }
            else{
                if(days_ones.textContent>0)
                {
                        --days_ones.textContent;
                        Days.lastElementChild=days_ones.textContent;
                }
                else
                {
                }
            }
        }
    }
}
const intervalCounterDown=setInterval(counterDown,1000);
const intervalBlueBar=setInterval(function(){
    if(document.getElementById("ourSkill").getBoundingClientRect().top<=200){
        let x=document.getElementsByClassName("blueBar");
        for(i=0;i<x.length;i++){
            if(i==0 || i==x.length-1){
                x[i].style.width="80%";
            }
            else if(i==1){
                x[i].style.width="85%";
            }
            else if(i==2){
                x[i].style.width="70%";
            }
        }
        clearInterval(intervalBlueBar);
    }
},300)
function statsCounter(id,interval){
    let x=document.getElementById(id).innerText;
        if(id=="clients"){
            const startCount=setInterval(function(){
                ++x;
                document.getElementById(id).innerText=x;
                if(x==150){
                    clearInterval(startCount);
                }
            },interval)
        }
        else if(id=="projects"){
            const startCount=setInterval(function(){
                ++x;
                document.getElementById(id).innerText=x;
                if(x==135){
                    clearInterval(startCount);
                }
            },interval)
        }
        else if(id=="countries"){
            const startCount=setInterval(function(){
                ++x;
                document.getElementById(id).innerText=x;
                if(x==50){
                    clearInterval(startCount);
                }
            },interval)
        }
        else if(id=="money"){
            const startCount=setInterval(function(){
                ++x;
                document.getElementById(id).innerText=x;
                if(x==500){
                    clearInterval(startCount);
                }
            },interval)
        }
}
const statsInterval=setInterval(function(){
    if(document.getElementById("stats").getBoundingClientRect().top<=0){
        statsCounter("clients",10);
        statsCounter("projects",10);
        statsCounter("countries",30);
        statsCounter("money");
        clearInterval(statsInterval);
    }
},300);

/* make buttons*/
for(let i=0;i<video_buttons.length;i++){
    let element=video_buttons[i];
    element.addEventListener('click',function(){
        video_content.setAttribute("src","images/"+video_sources[i]);
    })
}
/* shuffle*/ 
shuffle_videos.addEventListener('click',function(){
    let counter=0;
    video_content.loop=false;
    let mysequence=createRandomSequence();
    console.log(mysequence);
    video_content.setAttribute("src","images/"+video_sources[mysequence[counter]]);
    video_content.addEventListener('ended',function(){
        if(counter<6){
            ++counter;
            video_content.setAttribute("src","images/"+video_sources[mysequence[counter]]);
        }
        else{
            video_content.paused=true;
        }
    })
})


function createRandomSequence(){
    let randomSequence=[];
    for(let i=0;i<video_sources.length;i++)
    {
        if(randomSequence.length==0){
            let x=Math.floor(Math.random()*video_sources.length);
            randomSequence.push(x);
        }
        else{
            while(true){
                let x=Math.floor(Math.random()*video_sources.length);
                if(randomSequence.includes(x)){
                    continue;
                }
                else{
                    randomSequence.push(x);
                    break;
                }
            }
        }
    }
    return randomSequence
}