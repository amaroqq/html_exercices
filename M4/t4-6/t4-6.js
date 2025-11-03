async function log_broda(){
    let search = document.getElementById('query').value;
    try {                                               // error handling: try/catch/finally
            const response = await fetch(`https://api.chucknorris.io/jokes/search?query=${search}`);    // starting data download, fetch returns a promise which contains an object of type 'response'
            const jsonData = await response.json();          // retrieving the data retrieved from the response object using the json() function
            articles(jsonData['result'])
        } catch (error) {
            console.log(error.message);
        } 
}
async function radnomjouk(){
    try {                                               // error handling: try/catch/finally
            const response = await fetch(`https://api.chucknorris.io/jokes/random`);    // starting data download, fetch returns a promise which contains an object of type 'response'
            const jsonData = await response.json();          // retrieving the data retrieved from the response object using the json() function
            console.log(jsonData.value); // log the result to the console
            
        } catch (error) {
            console.log(error.message);
        } 
}
function articles(data){
    document.getElementById('results').innerHTML = '';
    for (let i = 0; i < data.length; i++){
        let article = document.createElement('article');
        article.className = 'joke';
        article.innerHTML = `<p>${data[i]['value']}</p>`;
        document.getElementById('results').appendChild(article);
    }
}