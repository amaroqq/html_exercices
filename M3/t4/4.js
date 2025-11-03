'use strict';
const students = [
  {
    name: 'John',
    id: '2345768',
  },
  {
    name: 'Paul',
    id: '2134657',
  },
  {
    name: 'Jones',
    id: '5423679',
  },
];
function t4(){
  let op1 = document.createElement('option');
  op1.value = students[0].id;
  op1.innerHTML = students[0].name;
  document.getElementById('target').appendChild(op1);
  let op2 = document.createElement('option');
  op2.value = students[1].id;
  op2.innerHTML = students[1].name;
  document.getElementById('target').appendChild(op2);
  let op3 = document.createElement('option');
  op3.value = students[2].id;
  op3.innerHTML = students[2].name;
  document.getElementById('target').appendChild(op3);
}