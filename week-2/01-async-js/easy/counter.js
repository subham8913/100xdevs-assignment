
function printTime(){
    let date =new Date();
    let time =date.getHours() + " : "+date.getMinutes() + " : " +date.getSeconds();
    console.log(time);
}
setInterval(printTime,1000);