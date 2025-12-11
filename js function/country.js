//write a js function that accepts a list of country  names as input and returns the longest country name as output.
let country = ["Australia", "United States of America"];
function LongestCountryName(country){
    let longest = "";
    for(let i = 0; i <country.length; i++){
        if(country[i].length > longest.length){
            longest = country[i];
        }

    }
    return longest;
}
console.log(LongestCountryName(country));