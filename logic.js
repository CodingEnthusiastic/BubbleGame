
function makebubble()
{
    var clu=""
    var bubbles=102
    for(var i=1;i<=bubbles;i++)
    {
        clu=clu+`<div class="bubble">${Math.floor(Math.random()*10)}</div>`
    }
    document.querySelector("#pbottom").innerHTML=clu
}

var timer=8;

function runtimer(){
    var timerint=setInterval(function(){
        if(timer>0)
        {
            timer--;
            document.querySelector("#timer").textContent=timer;
        }
        else{
            clearInterval(timerint);
            document.querySelector("#pbottom").innerHTML=`<h1>Game Over!</h1>`;
        }
    },1000);//1000ms==1sec
}

var a=0;
function hitcount(){
    a=Math.floor(Math.random()*10);
    document.querySelector("#hitval").textContent = a;
}
var score=0;
function incscore()
{
    score+=10;
    document.querySelector("#scoring").textContent = score;
}

document.querySelector("#pbottom").addEventListener("click",function(details)
{
    var clickno=(parseInt(details.target.textContent));//return type string hoga convert to int
    if(clickno==a)
    {
        incscore();
        makebubble();
        hitcount();
    }

})



makebubble();
//make timer
runtimer();
hitcount();
