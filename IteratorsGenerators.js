var str = "Hello";

var itr = str[Symbol.iterator]();

for (const iterator of itr) {
    console.log(iterator);
}

var str2 = str;

var itr2 = str2[Symbol.iterator]();

console.log(itr2.next());
console.log(itr2.next());
console.log(itr2.next());
console.log(itr2.next());
console.log(itr2.next());
console.log(itr2.next());

// Iterator under the hood :

var obj = {
    a:1,
    b:2,
    c:3,
    [Symbol.iterator]: function(){
        var keys = Object.keys(this);
        var index = 0;
        return {
            next: () =>
                (index < keys.length) ?
                    { done: false, value: this[keys[index++]] } :
                    { done: true, value: undefined }
        }
    }
}

console.log([...obj]);

/* GENERATOR */

function *main() { // The asterisk * is telling we are declarating a generator function
    yield 1;
    yield 2;
    yield 3;
    return 4; // With return: done become true
}

var it = main();

console.log(it.next());
console.log(it.next());
console.log(it.next());
console.log(it.next());

// Same example as iterator under the hood, but with generator :

var obj = {
    a: 1,
    b: 2,
    c: 3,
    *[Symbol.iterator]() {
        for(let key of Object.keys(this)) {
            yield [key, this[key]]; // Yield a tuple of key & key value
        }
    }
};

console.log([...obj]);

// EXERCISE 

var numbers = {
    *[Symbol.iterator]({
        start = 0,
        end = 100,
        step = 1
    } = {}) {
        for(let i= start; i <= end; i += step) {
            yield i;
        }
    }
}

for (const num of numbers) {
    console.log(num)
};

console.log(
    [...numbers[Symbol.iterator]({
        start: 6,
        end: 500,
        step: 6
    })]
)