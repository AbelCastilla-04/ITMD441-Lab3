// Abel Castilla
// ITMD 441-01 Undergraduate Student

// Exercise 1
function minMaxAverage(numbers) {
    let total = numbers.length;
    let min = Math.min(...numbers);
    let max = Math.max(...numbers);
    let sum = numbers.reduce((acc, num) => acc + num, 0);
    let avg = sum / total;
    console.log(`Total Numbers: ${total}, Min Value: ${min}, Max Value: ${max}, Average: ${avg.toFixed(2)}`);
}

minMaxAverage([2, 5, 23, 6, 9, 4, 30, 1]);
minMaxAverage([10, 77, 13, 5, 10, 12, 8, 1, 29]);
minMaxAverage([5, 22, 37, 31, 3]);

// Exercise 2
function countVowels(word) {
    let vowels = "aeiouAEIOU";
    let count = [...word].filter(letter => vowels.includes(letter)).length;
    console.log(`${word}: ${count} vowels`);
}

countVowels("Winter");
countVowels("Africa");
countVowels("Europe");

// Exercise 3
function sortNumbers(numbers) {
    let sorted = [...numbers].sort((a, b) => a - b);
    console.log(`Original Array: [${numbers}] output Sorted Array: [${sorted}]`);
}

sortNumbers([9, 4, 6, 2]);
sortNumbers([15, 2, 8, 19, 29, 31]);
sortNumbers([100, 50, 75, 25, 0]);

// Exercise 4
function celsiusToFahrenheit(celsius) {
    let fahrenheit = (celsius * 9/5) + 32;
    console.log(`${celsius.toFixed(1)} Celsius = ${fahrenheit.toFixed(1)} Fahrenheit`);
}

celsiusToFahrenheit(30);
celsiusToFahrenheit(6.4);
celsiusToFahrenheit(-12.3);
