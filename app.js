let Timer = 60;
let score = 0;
let hitrn =0;
let started= false;
function increaseScore(){
  score+= 10;
  document.querySelector("#scoreval").textContent =score;
}






function getNewhit(){
  hitrn = Math.floor(Math.random() *10);
  document.querySelector("#hitval").textContent = hitrn;
}




 function makeBubble(){
  let clutter= "";

  for(let i =1; i<=168; i++){
    let rm =  Math.floor(Math.random()*10);
      clutter+= `<div class="bubble">${rm}</div>`;
        
  }
  
  document.querySelector("#pbtm").innerHTML= clutter;
 }

 
function runTimer() {
  let Timerint = setInterval(function(){
    if(Timer >0){
      Timer--;
      document.querySelector("#timerval").textContent= Timer;
      }
      else{
        clearInterval(Timerint);
        document.querySelector("#pbtm").innerHTML = `<h1>GAME OVER<br><h4>press ctrl + r to restart the Game</h4></h1>`;
      }
    },1000);
}

document.querySelector("#pbtm").addEventListener("click",function(dets){
  let clickednum =(Number(dets.target.textContent));
  if( clickednum ===hitrn){
    increaseScore();
    makeBubble();
    getNewhit();
  }
});



document.addEventListener("click" , function(){
  

  if(started == false){
    console.log("game started");
    started = true;
    runTimer();
    makeBubble();
  }
});
 



 
 getNewhit();
 
 
