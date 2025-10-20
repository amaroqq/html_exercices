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