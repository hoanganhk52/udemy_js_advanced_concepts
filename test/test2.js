const array = [1,9,3];
 
function getMaxNumber(arr){
  return Math.max.apply(null, arr);
}
 
console.log(getMaxNumber(array)); // should return 3


var user1 = {name : "nerd", org: "dev"};
var user2 = {org: "dev", name : "nerd"};

var eq = JSON.stringify(user1) === JSON.stringify(user2);
console.log(eq);