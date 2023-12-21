
function printTime(){
    let date =new Date();
    let time =date.getHours() + " : "+date.getMinutes() + " : " +date.getSeconds();
    console.log(time);
    setTimeout(printTime,1000);
  
}
printTime();