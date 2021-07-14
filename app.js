//For loop to complete the task, the simpliest way is as below.
let option1 = "";

for (let i=1; i<=100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        option1 += "FizzBuzz" + "<br>";
    } else if (i % 3 === 0) {
        option1 += "Fizz" + "<br>";
    } else if (i % 5 === 0) {
        option1 += "Buzz" + "<br>";
    } else {
        option1 += i + "<br>";
    }
}

console.log(option1)

// Now get the variable option 1 to print in the DOM when option1-button button is clicked.
const option1Button = document.getElementById("option1-button");
const option1ButtonEvent = option1Button.addEventListener("click", () => {
    document.getElementById("option1-result").innerHTML = option1;
})

