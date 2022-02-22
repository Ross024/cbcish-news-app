// make sure to trim the title to remove identifier from the end

function NewsCard({ news }) {

     function trimTitle(news) {
        const splitTitle = news.title.split(' - ');
        const trimmedTitle = splitTitle[0];

        return trimmedTitle
    };

    return (
        <article className="article-card">
            <figure className="article-pic">
                <img src={news.urlToImage} alt="article pic" />
            </figure>
            <div className="article-info">
                <h2>{trimTitle(news)}</h2> 
                <p>{news.description}</p>
                <a href={news.url}>Read More</a>
            </div>
        </article>
    )
}

export default NewsCard;