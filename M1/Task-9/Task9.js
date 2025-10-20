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