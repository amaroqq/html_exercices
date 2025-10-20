//Task 10
function roll(sides){
    return Math.floor(Math.floor(Math.random()*100)/(100/sides))+1;
}
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