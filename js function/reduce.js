//Reduce : - Reduce the array to a single value 
//arr.reduce(reduce function with 2 variable for(accumulator, element));
// accumulator :- it is a temporary variable which is collect result step by step in reduce() function 
//for example   acc         curr         acc + curr
//               0            1            0 + 1 = 1
//               1            2            1 + 2 = 3
//create a array 
//let num = [1,2,3,4];
// crate a reduce function 
//let finalValue = num.reduce((res , el) => {
    //console.log(res);
  //  return res + el;

//});
//console.log(finalValue);
// Array declare
let num = [1, 2, 3, 4, 5];

// reduce() use karke sum nikalna
let finalValue = num.reduce((res, el) => res + el);

// Output print
console.log(finalValue);
