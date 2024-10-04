console.log("Question-1");
let arrstr=[1,2,3,4,5,{id:1,age:25},[1,2,3]]
let arr_res= [];
for(a=arrstr.length-1;a>=0;a--){
    arr_res.push(arrstr[a])
}
console.log(arr_res);


console.log("Question-2");
let arr_one=[1,2,3,4]
let fin_res=' '
for(b=arr_one.length-1;b>=0;b--){
    fin_res=fin_res+arr_one[b];
}
console.log(fin_res);

console.log("Question-2");
let astr="Indhu Rapolu";
let res=" ";
for(b=astr.length-1;b>=0;b--){
    res=res+astr[b];
}
console.log(res);


console.log("Question-3");
let arr=[1,2,3,4,5,{id:1,age:25},[1,2,3]];
for(let a=0;a<=arr.length-1;a++){
    if (typeof arr[a] === 'object' && arr[a].age !== undefined)
    console.log(arr[a].age);
}





