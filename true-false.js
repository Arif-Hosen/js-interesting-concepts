/* 
---falsy
false
0
empty string
undefined
null
Nan
---------------------
------truthy
true
any number(positive or negative)
any string(including whitespace)
[]
{}
*** anything else that is not falsy will ne truthy
*/

let x = {};
console.log('x is ', x);
if (x) {
    console.log('x is truthy');
}
else {
    console.log('x is falsy');
}