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