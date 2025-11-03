function t10(){
    let fname = document.querySelector('input[name="firstname"]').value;
    let lname = document.querySelector('input[name="lastname"]').value;
    document.getElementById('target').innerHTML = `Your name is ${fname} ${lname}`;
}