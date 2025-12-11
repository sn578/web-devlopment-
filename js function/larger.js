//Write a JavaScript function that returns array elements larger than a number.
let arr = [ 1 , 4, 6, 7, 8 , 9 ];
let num = 5;
// elements larger tha a number num 
function getElements(arr, num){
    for(let i = 0; i < arr.length; i++){
        if(arr[i] > num){
            console.log(arr[i]);
        }
    }
}
getElements(arr, num);