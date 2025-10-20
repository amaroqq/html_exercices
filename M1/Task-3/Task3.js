//Task 3
function t3(){
    let number1 = prompt("Enter a number");
    let number2 = prompt("Enter another number");
    let number3 = prompt("Enter a third number");
    let sum = Number(number1) + Number(number2) + Number(number3);
    let average = sum / 3;
    let product = Number(number1) * Number(number2) * Number(number3);
    document.getElementById('task3').innerHTML= `The sum is: ${sum} <br> The average is: ${average} <br> The product is: ${product}`;
}