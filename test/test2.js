const array = [1,9,3];
 
function getMaxNumber(arr){
  return Math.max.apply(null, arr);
}
 
console.log(getMaxNumber(array)); // should return 3