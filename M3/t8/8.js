function t8(){
    num1 = parseInt(document.getElementById('num1').value);
    num2 = parseInt(document.getElementById('num2').value);
    operation = document.getElementById('operation').value;
    if(operation == 'add'){
        document.getElementById('result').innerHTML = num1 + num2;
    }else if(operation == 'sub'){
        document.getElementById('result').innerHTML = num1 - num2;
    }else if(operation == 'multi'){
        document.getElementById('result').innerHTML = num1 * num2;
    }else if(operation == 'div'){
        document.getElementById('result').innerHTML = num1 / num2;
    }
}