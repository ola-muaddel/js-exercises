let user_input = parseInt(prompt("Please enter the number you would like to FizzBuzz up to: "));
for (let i = 1; i <= user_input; i++) {

    if (i % 15) { // ==> i % 3 == 0 && i % 5 == 0
        console.log("FizzBuzz");
    } else if (i % 3 === 0) {
        console.log("Fizz");
    } else if (i % 5 === 0) {
        console.log("Buzz");
    } else {
        console.log(i);
    }
}