function t2(){
    const li = document.createElement('li');
    li.innerText = 'First item';
    document.getElementById('target').appendChild(li);
    const li2 = document.createElement('li');
    li2.innerText = 'Second item';
    li2.classList.add('my-item');
    document.getElementById('target').appendChild(li2);
    const li3 = document.createElement('li');
    li3.innerText = 'Third item';
    document.getElementById('target').appendChild(li3);
}