function t9(){
    let nums = ['']
    let operands = []
    let readchar ='';
    let input = document.getElementById('calculation').value;
    let j = 0;
    for (let i = 0; i < input.length; i++) {
        readchar = input.charAt(i);
        if(isNaN(readchar) == false){
            nums[j] += readchar;
        }else{
            operands.push(readchar);
            nums[j] = parseInt(nums[j]);
            j++;
            nums[j] = '';
        }
    }
    nums[j] = parseInt(nums[j]);
    let result = nums[0];
    for (let i = 0; i < operands.length; i++) {
        if(operands[i] == '+'){
            result += nums[i+1];
        }else if(operands[i] == '-'){
            result -= nums[i+1];
        }else if(operands[i] == '*'){
            result *= nums[i+1];
        }else if(operands[i] == '/'){
            result /= nums[i+1];
        }
    }
    document.getElementById('result').innerHTML = `Result: ${result}`;

}