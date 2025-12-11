// return value from any where 
function sum(a , b){
    return a+b;// it's give return value not print 
}
let s = sum(sum (4, 5),9);
console.log(s);