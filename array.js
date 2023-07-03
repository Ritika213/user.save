//Given an array of string and an interger len concate the string whose length equal to len.
input:
arr={"abc","def","xyzd","imm"}
len=3
output: "abcdefimn"
input:
arr={"hello","world","goodbye","cruel","world"}
len=5
output: "helloworldcruelworld"

let ste=["hello","world","goodbye","cruel","world"];
let len=5;
let ans="";
for(let i=0;i<str.length;i++){
    if(str[i].split("").length===len){
        ans+=str[i]
    }
}
console.log(ans)



