const result = `Hello my name is Elijah
and I am 19 years old!`

console.log(result)

function template(age, sport) {
    return `<div class= "info">
                <h1>Age: ${age}<h1>
                <h1>Sport: ${sport}<h1>
            </div>
            `;
}

const gen = template(
    "19",
    "Rugby"
)

console.log(gen)



// Convert from regular function to arrow functions 
function multiply(a, b) {
    return a * b
}

const multiply = (a, b) => a * b;


// Arrow functions
const num = [1, 5, 10, 25, 56]
const odd = num.filter(number => number % 2 !== 0);
console.log(odd)