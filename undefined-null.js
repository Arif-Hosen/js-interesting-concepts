/* 
----undefined
1. variable value not assign
2. function but not write return
3. just wrote return but didn't return anything
4. parameter that isn't passed
5. property that doesn't exist in an object
6. accessing array element out of range 
7. accessing deleted array element
8. explicitly set value to undefined
-------------------------------
----null
 if i don't set null , it will not be automatically null
 ex: set null of property's value of an object
*/

let a;
// console.log(a);

function add(a, b) {
    const sum = a + b;
}
// const result = add(10, 5);
// console.log(result);

function sum(a, b) {
    const mul = a * b;
    if (b < 10) {
        return;
    }
    const add = a + b;
    return add;
}
const result2 = sum(4, 5);
// console.log(result2);

function double(a, b) {
    const result = a * 2;
    // console.log(b);
    return result;
}
double(5);

const obj = { name: 'Sogir', Age: 20, address: 'Dhaka' };
// console.log(obj.mobile);

const arr = [20, 40, 25];
delete (arr[1]);
// console.log(arr[1]);

const m = undefined;
// console.log(m);

const myObj = { name: 'Arman', profession: null };
console.log(myObj);