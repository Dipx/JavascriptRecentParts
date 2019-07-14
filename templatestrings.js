var amount = 12.3;

var msg = 
    formatCurrency
    `The total is ${amount} and ${amount+3}`;

var name = "isaac",
    twitter = "nobody",
    topic = "jackass";

console.log(
    upperArgs`Hello ${name}, (@${twitter}), welcome to ${topic}!`
)

function formatCurrency(strings, ...values) {
    var str = "";
    for (let i = 0; i < strings.length; i++) {
        if(i>0) {
            if(typeof values[i-1] == "number") {
                str += `$${values[i-1].toFixed(2)}`;
            } else {
                str += values[i-1];
            }
        }
        str += strings[i]
    }
    return str;
}

function upperArgs(strings, ...values) {
    let str = "";
    for (let i = 0; i < strings.length; i++) {
        str += strings[i];
        if(i < values.length) {
            str += String(values[i]).toUpperCase();

        }
    }
    return str;
}