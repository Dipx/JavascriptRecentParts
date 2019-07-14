function data() {
    return [1,2,undefined,4,5,6];
}

var first; // You can use already declared variable to destructure an array

// Left hand is declaration of the destructuring schema
var [
    first, // Assign the first value of data() to first
    , // You can skip a position if you want
    third = 20, // Default value in case of undefined
    ...rest // assign the rest of the values to the variable rest
] = data();

// Or you can destructure into an object

var o = {};
[
    o.first,
    o.second,
    o.third = 20,
    ...o.fourth
] = data();

console.log(first);
console.log(third);
console.log(rest);
console.log(o);

// You can also swap values with array destructuring :
var x = 10,
    y = 20;

[x,y] = [y,x];

console.log(x);
console.log(y);

// You can assign new variables with destructuring directly as the parameters of a function :

function destructExample([
    first,
    second,
    ...rest
] = []) { // With a default value as an empty array to make sure we have no null and type error
    // Function logic
    return [];
}

// Nested array destructuring :

function nestedArray() {
    return [1, [2, 3], 4];
}

var [
    first,
    [
        second,
        third
    ] = [],
    fourth
] = nestedArray() || [];

console.log(first);
console.log(second);
console.log(third);
console.log(fourth);