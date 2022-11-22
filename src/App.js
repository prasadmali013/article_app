
import './App.css';
import Card from './components/card';
import { useEffect, useState } from "react";

function App() {

  const [articles, setArticles] = useState([]);

  useEffect(() => {
    fetch("https://techcrunch.com/wp-json/wp/v2/posts")
      .then(res => res.json())
      .then((data) => {
        console.log(data)
        setArticles(data);
      });

  }, []);

  return (
    <div>
      <h2 className='appTitle'>The Prash News</h2>

      <div className='container'>

        {/* left side (main part) */}

        <div className='mainSection'>

          {articles.map((article, index) => {
            console.log(index);
            console.log(article);

            let title = article.parselyMeta["parsely-title"];
            let author = article.parselyMeta["parsely-author"];
            let category = article.parselyMeta["parsely-section"];
            let date = new Date(article.date).toDateString();
            let excerpt = article.excerpt.rendered;
            let feturedImg = article.parselyMeta["parsely-image-url"];
            let raw_tags = String(article.parselyMeta["parsely-tags"]);
            let canonical_url = article.canonical_url;

            let tags = raw_tags.split(",").slice(1, 5);

            return <Card title={title} author={author} category={category} date={date} excerpt={excerpt} feturedImg={feturedImg} tags={tags} articleUrl={canonical_url} />
          })}
        </div>


        {/* sidebar */}
        <div className='sidebar'>
          <h3>Related News</h3>

          <ul>
            <li>After laying off half of its staff, Twitter might be asking some employees to come back</li>
            <li>Devialet launches a high-end portable speaker</li>
            <li>When you say portable speakers, most people think about cheap Bluetooth speakers that you can easily put in your backpack when you’re going to the park.</li>

          </ul>

          <h3>Trading News</h3>

          <ul>
            <li>After laying off half of its staff, Twitter might be asking some employees to come back</li>
            <li>Devialet launches a high-end portable speaker</li>
            <li>When you say portable speakers, most people think about cheap Bluetooth speakers that you can easily put in your backpack when you’re going to the park.</li>

          </ul>

        </div>
      </div>






    </div>
  );
}

export default App;
