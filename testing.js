let a = "a";
let b = "a";


if(a=b){
    console.log("hello");
}
if(a==b){
    console.log("hi");
}
if(a===b){
    console.log("hey");
}

arr = [1,2,3,4,5,6,7,2,3,4,5];

dict = {}
dict2 ={}

for(let i =0;i<arr.length;i++){
    if(arr[i] in dict){
        dict[arr[i]]++;
    }
    else{
        dict[arr[i]] = 1;
    }
}
for(let i =0;i<arr.length;i++){
    if(arr[i] in dict2){
        dict2[arr[i]]++;
    }
    else{
        dict2[arr[i]] = 1;
    }
}

if (JSON.stringify(dict)==JSON.stringify(dict2)){
    console.log("dont need complex");
}