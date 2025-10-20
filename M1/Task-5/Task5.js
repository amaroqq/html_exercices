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