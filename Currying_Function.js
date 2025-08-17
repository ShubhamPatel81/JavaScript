// Currying is an advanced technique to transform a function of arguments n, to n functions of one or fewer arguments.


function add(a) {
  return function (b) {
    return a + b;
  }
}
var ans = add(3)(4);
console.log(ans)

// For Example, if we have a function f(a,b), then the function after currying, will be transformed to f(a)(b).

function multiply(a,b){
  return a*b;
}

function currying(fn){
  return function(a){
    return function(b){
      return fn(a,b);
    }
  }
}

var curriedMultiply = currying(multiply);

var a= multiply(4, 3); // Returns 12
console.log(a)

var b = curriedMultiply(4)(3); // Also returns 12
console.log(b)