function Hero({ newsData }) {

    function trimTitle(newsData) {
        const splitTitle = newsData.title.split(' - ');
        const trimmedTitle = splitTitle[0];

        return trimmedTitle
    };

    return (
        <article className='hero-card'>
            <figure className='article-image'>
                <img src={`${newsData.urlToImage}`} alt="Warhammer article" />
            </figure>
            <div className='article-info'>
                <h2>{trimTitle(newsData)}</h2>
                <a href={`${newsData.url}`}>Read More</a>
            </div>
        </article>
    )
}

export default Hero;