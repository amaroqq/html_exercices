//Task 1
function t1(){
    console.log("I'm printing to console!");
    document.getElementById('task1').innerHTML = 'Task 1 (in console)';
}
//Task 2
function t2(){
    let name = prompt("Enter your name");
    document.getElementById('task2').innerHTML = `Hello, ${name}!`;
}
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
//Task 4
function t4(){
    let person = prompt('Enter your name again:');
    let assignment = Math.floor(Math.random()*100);
    if(assignment<25){
        document.getElementById('task4').innerHTML = `${person}, you are a Gryffindor!`;
    }
    else if(assignment<50){
        document.getElementById('task4').innerHTML = `${person}, you are a Slytherin!`;
    }
    else if(assignment<75){
        document.getElementById('task4').innerHTML = `${person}, you are a Hufflepuff!`;
    }
    else{
        document.getElementById('task4').innerHTML = `${person}, you are a Ravenclaw!`;
    }
}
//Task 5
function t5(){
    let year = prompt('Enter a year:');
    if(year%4==0){
        if(year%100==0){
            if(year%400==0){
                document.getElementById('task5').innerHTML = `${year} is a leap year!`;
            }
            else{
                document.getElementById('task5').innerHTML = `${year} is not a leap year!`;
            }
        }
        else{
            document.getElementById('task5').innerHTML = `${year} is a leap year!`;
        }
    }
    else{
        document.getElementById('task5').innerHTML = `${year} is not a leap year!`;
    }
}
//Task 6
function t6(){
    if(confirm('Should I calculate the square root?') == true){
        let num = prompt("Enter the number then:");
        if(num>=0){
            document.getElementById('task6').innerHTML = `The square root is ${Math.sqrt(num)}`;
        }else{
            document.getElementById('task6').innerHTML = "The square root of a negative number is not defined";
        }
    }else{
        document.getElementById('task6').innerHTML = "The square root is not calculated";
    }
}
//Task 7
function roll(sides){
    return Math.floor(Math.floor(Math.random()*100)/(100/sides))+1;
}
function t7(){
    let numofdice = prompt('How many dice rolls would you like?');
    sum = 0;
    for (let i =0; i<numofdice; i++){
        sum+=roll(6);
    }
    document.getElementById('task7').innerHTML = `The sum of the rolls is ${sum}`;
}
//Task 8
function checkleap(year){
    if(year%4==0){
        if(year%100==0){
            if(year%400==0){
                return true;
            }
            else{
                return false;
            }
        }
        else{
            return true;
        }
    }
    else{
        return false;
    }
}
function t8(){
    let syear = prompt('Enter start number:');
    let eyear = prompt('Enter end year:');
    document.getElementById('task8').innerHTML = "<ul>";
    for(let i = syear; i<=eyear; i++){
        if(checkleap(i) == true){
            document.getElementById('task8').innerHTML +=`<li>${i}</li>`;
        }
    }
    document.getElementById('task8').innerHTML += "</ul>";
}
//Task 9
function checkprime(numb){
    if(numb<2){
        return false;
    }
    for (let i = 2; i*i<=numb; i++){
        if(numb%i==0){
            return false;
        }
    }
    return true;
}
function t9(){
    let num = prompt('Enter a number: ');
    if(checkprime(num) == true){
        document.getElementById('task9').innerHTML = `The number ${num} is prime` ;
    }else{
        document.getElementById('task9').innerHTML = `The number ${num} is not prime` ;
    }
}
//Task 10
function simulatedice(dice,sum){
    let succesfull=0;
    for(let i = 0; i<100000;i++){
        let s=0;
        for(let j = 0; j<dice;j++){
            s+=roll(6);
        }
        if (s == sum){
            succesfull++;
        }
    }
    return Math.floor(succesfull/10)/100;
}
function t10(){
    let numofdice = prompt('Enter number of dice:');
    let sum = prompt('Enter the sum desired:');
    document.getElementById('task10').innerHTML = `Probability to get sum ${sum} with ${numofdice} dice is ${simulatedice(numofdice,sum)}%`;
}