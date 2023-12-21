// function printTime(){
//     let date =new Date();
//     let time =date.getHours() + " : "+date.getMinutes() + " : " +date.getSeconds();
//     console.log(time);
// }
// setInterval(printTime,1000);
function printTime(){
    let date =new Date();
    
 
  let time = date.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric',second: 'numeric', hour12: true })
    console.log(time);
}
setInterval(printTime,1000);