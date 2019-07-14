function data() {
    return { a: 1, b: 2, c: 3, d: 4, e: 5 }
}

var { // To the left is where the value is taken from the function
      // To the right is where the value is put
    a: first,
    b: second,
    c, // if the variable and the property have the same name, you can use this short hand method to assign the property to the value
    e: fourth,
    notExisting: fifth = 6,
    ...rest // Takes every property that hasn't been taken yet
} = data() || {}; // In case data() return nothing, provide a default empty object

console.log(c);
console.log(fifth);
console.log(rest);

// If you want to assign values to already existing value, you have to use parenthesis, like :

var first,
    second,
    third;

({
    a: first,
    b: second,
    c: third
} = data());

console.log(first + " " + second + " " + third);

// In the case of a nested object, you can destructure it like:

function destructuredData() {
    return {
        a: 1,
        b: 2,
        c: {
            d: 3,
            e: 4
        },
        f: 5
    }
}

var {
    a: one,
    b: two,
    c: {
        d: three,
        e: four
    },
    f: five
} = destructuredData() || {};

console.log(three);