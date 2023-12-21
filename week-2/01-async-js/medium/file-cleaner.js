fs = require('fs');


    let p = new Promise((resolve)=>{
        fs.readFile('assignments\\week-2\\01-async-js\\medium\\test.txt','utf-8',(err,data)=>{
            if(data){
                data =data.replace(/\s+/g,' ');
                
                resolve(data);
            }
            else console.log(err);
        })
       
    })

 p.then((newdata)=>{
  fs.writeFile('assignments\\week-2\\01-async-js\\medium\\test.txt',newdata,'utf-8',(err)=>{
    if(err)console.log(err);
  })
 });