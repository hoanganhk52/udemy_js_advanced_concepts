var a = {name: 1};
console.log(a.name);

var b = (function(arg) {
    arg = 5;    
})(a);

console.log(a);