//Task 1
function t1(){
    let list = [];
    for (let i = 0; i < 5; i++) {
        list.unshift(parseInt(prompt(`Enter a number (${i+1})`)));
    }
    document.getElementById('task1').innerHTML = 'Task 1 (in console)';
    for (let i = 0; i < list.length; i++) {
        console.log(list[i]);
    }
}
//Task 2
function t2(){
    let partic = parseInt(prompt("Enter number of participants"));
    let name = [];
    for (let i = 0; i < partic; i++) {
        name.push(prompt(`Enter name of participant (${i+1})`));
    }
    name.sort();
    document.getElementById('task2').innerHTML = '<ol></ol>';
    for (let i = 0; i < partic; i++) {
        document.querySelector('#task2 ol').innerHTML += `<li>${name[i]}</li>`;
    }
}
//Task 3
function t3(){
    let name = [];
    for (let i = 0; i < 6; i++) {
        name.push(prompt(`Enter name of dog (${i+1})`));
    }
    name.sort();
    document.getElementById('task3').innerHTML = '<ul></ul>';
    for (let i = 6; i > 0; i--) {
        document.querySelector('#task3 ul').innerHTML += `<li>${name[i-1]}</li>`;
    }
}
//Task 4
function t4(){
    let num = parseInt(prompt('Enter numbers (or 0 to quit)'));
    let nums = [];
    while(num != 0){
        nums.push(num);
        num = parseInt(prompt('Enter numbers (or 0 to quit)'));
    }
    nums.sort();
    document.getElementById('task4').innerHTML = 'Task 4 (in console)';
    for (let i = nums.length; i > 0; i--) {
        console.log(nums[i-1]);
    }
}
//Task 5
function t5(){
    let num = parseInt(prompt('Enter numbers (or repeat to quit)'));
    let nums = [];
    while(nums.includes(num) == false){
        nums.push(num);
        num = parseInt(prompt('Enter numbers (or repeat to quit)'));
    }
    console.log('Number has already been entered');
    nums.sort();
    document.getElementById('task5').innerHTML = 'Task 5 (in console)';
    for (let i = 0; i < nums.length; i++) {
        console.log(nums[i]);
    }
}
//Task 6
function roll(sides){
    return Math.floor(Math.floor(Math.random()*100)/(100/sides))+1;
}
function roll6(){
    return roll(6);
}
function t6(){
    let num = roll6();
    document.getElementById('task6').innerHTML = '<ul></ul>';
    while(num != 6){
        document.querySelector('#task6 ul').innerHTML += `<li>${num}</li>`;
        num = roll6();
    }
    document.querySelector('#task6 ul').innerHTML += '<li>6</li>';
}
//Task 7
function roll(sides){
    return Math.floor(Math.floor(Math.random()*100)/(100/sides))+1;
}
function t7(){
    let numofdice = prompt('How many faces should the dice have?');
    let num = roll(numofdice);
    document.getElementById('task7').innerHTML = '<ul></ul>';
    while(num != numofdice){
        document.querySelector('#task7 ul').innerHTML += `<li>${num}</li>`;
        num = roll(numofdice);
    }
    document.querySelector('#task7 ul').innerHTML += `<li>${num}</li>`;
}
//Task 8
function concat(arstr){
    result = '';
    for (let i = 0; i < arstr.length; i++) {
        result += arstr[i].toString();
    }
    return result;
}
function t8(){
    let arr = ['John', 'Doe', 'Jane', 'Doe'];
    document.getElementById('task8').innerHTML = concat(arr);
}
//Task 9
function even(numbs){
    let numres = [];
    for (let i = 0; i < numbs.length; i++) {
        numres.push(numbs[i]);
    }
    for (let i = 0; i < numres.length; i++) {
        if(numres[i]%2 != 0){
            numres.splice(i,1);
        }
    }
    return numres;
}
function t9(){
    let list = [2, 7, 4, 5];
    let list2 = even(list);
    document.getElementById('task9').innerHTML = 'Task 9 (in console)';
    for (let i = 0; i < list.length; i++) {
        console.log(list[i]);
    }
    for (let i = 0; i < list2.length; i++) {
        console.log(list2[i]);
    }
}
//Task 10
function simulatedice(dice,sum){
    
}
function t10(){
    let nc = parseInt(prompt('Enter number of candidates'));
    let listcand = [];
    for (let i = 0; i < nc; i++) {
        let name = prompt(`Enter name of candidate (${i+1})`);
        let votes = 0;
        listcand[i] = {name: name, votes: votes};
    }
    let numofvoters = parseInt(prompt('Enter number of voters'));
    for (let i = 0; i < numofvoters; i++) {
        let vote = (prompt(`Enter candidate name: (or null to pass)`));
        if(vote !='') {
            for (let j = 0; j < nc; j++) {
                if(vote == listcand[j].name){
                    listcand[j].votes++;
                }
            }
        }
    }
    let mostvotes = 0;
    let winner = '';
    for (let i = 0; i < nc; i++) {
        if(listcand[i].votes > mostvotes){
            mostvotes = listcand[i].votes;
            winner = listcand[i].name;
        }
    }
    document.getElementById('task10').innerHTML = 'Task 10 (in console)';
    console.log(`The winner is ${winner} with ${mostvotes} votes`);
    console.log('results:');
    for (let i = 0; i < nc; i++) {
        console.log(`${listcand[i].name}: ${listcand[i].votes} votes`);
    }
    
}