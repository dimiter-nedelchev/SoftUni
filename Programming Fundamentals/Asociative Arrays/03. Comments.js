function comments(input){

    let articles= {};
    let users= [];

    input.forEach(el => {
        if(el.includes('user')){
            const user= el.split('user ').join('');
            users.push(user);
        }
        else if(el.includes('article')){
            const article= el.split('article ').join('');
            articles[article]= {
                count: 0,
            }
        }
        else{
            let[info, commentInfo]= el.split(': ');
            const[user, article]= info.split(' posts on ');
            let comment= commentInfo.replace(', ', ' - ');

            if(articles.hasOwnProperty(article)){
                if(users.includes(user)){
                    if(!articles[article].hasOwnProperty(user)){
                    articles[article][user]= [];
                    }
                    articles[article][user].push(comment);
                    articles[article].count+= 1;
                }
            }
        }
    })

    let sorted= Object.entries(articles);
    sorted= sorted.sort((a, b) => (b[1].count) - (a[1].count));

    for(let article of sorted){
        console.log(`Comments on ${article[0]}`)
       
        let sortedComments= Object.entries(article[1]);
        sortedComments= sortedComments.sort((a, b) => (a[0]).localeCompare(b[0]))
        
        delete article[1].comment

        for(let comment of sortedComments){
          
            for(let i = 0; i <= comment[1].length - 1; i++){
            console.log(`--- From user ${comment[0]}: ${comment[1][i]}`)
            }
        }
    }
}
comments(['user aUser123', 'someUser posts on someArticle: NoTitle, stupidComment', 'article Books', 'article Movies', 'article Shopping', 'user someUser', 'user uSeR4', 'user lastUser', 'uSeR4 posts on Books: I like books, I do really like them', 'uSeR4 posts on Movies: I also like movies, I really do', 'someUser posts on Shopping: title, I go shopping every day', 'someUser posts on Movies: Like, I also like movies very much', 'someUser posts on Movies: Fuck this shit']);