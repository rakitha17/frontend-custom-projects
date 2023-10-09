var start = document.getElementById("start-btn");
var reset = document.getElementById("reset-btn");

var hour = document.getElementById("hour-btn");
var minute = document.getElementById("minute-btn");
var second = document.getElementById("second-btn");


// reference for the variable

var start_time = null;

function startTimer(){
  if(hour.value == 0 && minute.value == 0 && second.value == 0){
    hour.value = 0;
    minute.value = 0;
    second.value = 0;
  }else if(second.value != 0){
    second.value--;
  }else if(minute.value != 0 && second.value == 0){
    second.value = 59;
    minute.value--;
  }else if(hour.value != 0 && minute.value == 0){
    minute.value = 60;
    hour.value--;
  }
  return;
}

function stopTimer(){
  clearInterval(start_time);
}

start.addEventListener("click", function(){
  //INITIALIZING THE VATRIABLE start_time
  function startInterval(){
    start_time = setInterval(() => {
      startTimer();
    }, 1000);
  }
  startInterval();
})

reset.addEventListener("click", function(){
  hour.value = 0;
  minute.value = 0;
  second.value = 0;
  stopTimer();
})
