const API_KEY = 'e71fb94d719c40c0b798666321f09742';
const url = "https://newsapi.org/v2/everything?q=";

window.addEventListener('load', () => fetchNews('India'));

async function fetchNews(query) {
    const res= await fetch(`${url}${query}&apikey=${API_KEY}`) ;
    const data = await res.json();
    bindData(data.articles);
}

function bindData(articles) {
    const cardsContainer = document.getElementById('cards-container');
    const newsCardTemplate = document.getElementById('template-news-card');
    cardsContainer.innerHTML = "";
    articles.forEach(article => {
       if (!article.urlToImage) return;
       const cardClone = newsCardTemplate.content.cloneNode(true);
       cardsContainer.appendChild(cardClone);

    });

}