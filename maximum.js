// max in array by using array 
let arr = [1,4,2,6,7,2,9,2];
//let max = -1;
//for (let i = 0; i < arr.length; i++){
  //  if(max < arr[i]){
    //    max = arr[i];
    //}

//}
//console.log(max);

// by using the reduce function 
let max = arr.reduce((max, el)=>{
    if(max<el){
        return el;

    }
    else{
        return max;
    }
});
console.log(max);
