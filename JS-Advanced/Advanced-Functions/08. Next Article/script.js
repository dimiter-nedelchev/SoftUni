function getArticleGenerator(articles) {
    
    return function showArticle () {
        
        if(articles.length > 0){
            let div= document.getElementById('content')

            let article= document.createElement('article');
            article.textContent= articles.shift();

            div.appendChild(article);

        }
    }
}
