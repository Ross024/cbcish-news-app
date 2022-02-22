import NewsCard from './NewsCard';

function News({ newsData }) {

    
    return (
        <div className="news-container">
           {newsData.map((news, i) => <NewsCard key={i} news={news} />)}
        </div>
    )
}

export default News 