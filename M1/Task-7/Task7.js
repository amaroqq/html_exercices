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