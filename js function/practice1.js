// chapter 8 
function getMin(num){
    let min = num.reduce((min,el) => {
    if(min < el){
        return min;
    }
    else{
        return el;
    }
  });
  return min;
}
let num = [ 10, 20 ,30 , 40 , 50 , 5];
 let ans = num.every((el)=> el % 10 == 0);
 
 console.log(ans);
 getMin(num);
// create a funtion to find the min number in an array 
//let min = num.reduce((min,el) => {
  //  if(min < el){
    //    return min;
    //}
    //else{
      //  return el;
    //}
//});
//console.log(min);