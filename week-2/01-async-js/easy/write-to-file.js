fs = require('fs');
data ="Hello! My Name is Subham Sharma"
fs.writeFile('assignments\\week-2\\01-async-js\\easy\\test.txt',data,'utf-8',(err)=>{
  if(err)console.log(err);
  else console.log(data);  
});
let sum=0;
for(let i=1;i<=1000000;i++){
    sum+=i;
}
console.log(sum);