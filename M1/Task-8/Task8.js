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