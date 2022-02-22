import { useEffect, useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import News from "./components/News";
import news from './top-headlines.json';

function App() {

  const [newsData, setNewsData] = useState([])
  const [mainArticles, setMainArticles] = useState([])

  const getData = () => {
    // fetch('./top-headlines.json', {
    //   headers : {
    //     'Content-Type': 'application/json',
    //     'Accept': 'application/json'
    //   }
    // }
    // )
    // .then(function(response) {
    //   console.log(response)
    //   return response.json();
    // })
    // .then(function(myJson) {
    //   console.log(myJson);
    //   setData(myJson)
    // });
    const getNews = async () => {
      //const res = await fetch('you api request&api_key=23rq5ertwertywryrt');
      //const newsDataFromAPI = res.json();
      //setData(newsDataFromAPI); // data from the api
      const articles = news.articles;
      const notHeroArticles = articles.slice(1,13);

      setNewsData(articles);
      setMainArticles(notHeroArticles)
    }

    getNews();

  }
  useEffect(() => {
    getData()
  }, [])

  console.log(newsData)
  console.log(mainArticles)


  return (
    <div className="wrapper">
      <Header />
      {newsData.length > 0 && <Hero newsData={newsData[0]}/>}
      {mainArticles.length > 0 && <News newsData={mainArticles}/>}
      <Footer />
    </div>
  );
}

export default App;
