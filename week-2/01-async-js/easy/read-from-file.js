let fs =require('fs');

fs.readFile('assignments\\week-2\\01-async-js\\easy\\3-read-from-file.md',"utf-8",(err,data)=>{
    if(data)
    console.log(data);
else console.log(err);
    
});
let sum=0;
for(let i=1;i<=1000000000;i++){
  sum+=i;
}
console.log(sum);