// const fs=require("fs");
// fs.watch("target.txt",()=>{console.log("file changed");})//Watch for changes on filename its watching continuosly
// console.log("Now watching target.txt for file file changes");

//AND

// const fs=require("fs");//filesystem
// const fileName="target.txt";

// fs.readFile(fileName,(err,data)=>{//it will execute later as it takes more time and get later in call stack
//     if(err){
//         throw err;
//     }
//     console.log(data.toString());
// })

// console.log("watching target.txt for changes");//nodeJS execute it first as its easy to print first and get first //in call stack
//its showing asynchronous behavior of nodeJS

//AND
//synchronous procedure

const filesystem=require("fs");
const fileName="target.txt";

const data=filesystem.readFileSync(fileName)//Returns the contents of the path , readfile's synchronous behavior
console.log(data.toString());

console.log("Now watching target.txt for file change");
/*output :target file text 123 mic check
Now watching target.txt for file change */