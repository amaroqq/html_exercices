async function log_broda(){
    let search = document.getElementById('query').value;
    try {                                               // error handling: try/catch/finally
            const response = await fetch(`https://api.tvmaze.com/search/shows?q=${search}`);    // starting data download, fetch returns a promise which contains an object of type 'response'
            const jsonData = await response.json();          // retrieving the data retrieved from the response object using the json() function
            console.log(jsonData); // log the result to the console
            
            articles(jsonData)
        } catch (error) {
            console.log(error.message);
        } 
}
function articles(data){
    document.getElementById('results').innerHTML = '';
    for (let i = 0; i < data.length; i++){
        let article = document.createElement('article');
        article.className = 'tvshow';
        show = data[i]['show'];
        if (show.image == null){
            show.image = {medium: 'https://placehold.co/210x295?text=Not%20Found'};
        }
        article.innerHTML = `<h2>${show['name']}</h2><figure><img src="${show.image.medium}" alt="${show['name']}"></figure><a target = "_blank" href="${show['url']}">${show['url']}</a><div>${show['summary']}</div>`;
        document.getElementById('results').appendChild(article);
    }
}