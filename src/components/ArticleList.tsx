import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { Article } from '../index.d'

const ArticleList = () => {
  const [articles, setArticles] = useState<Article[] | null>(null)

  useEffect(() => {
    fetch('http://localhost:8000/articles')
      .then((res) => {
        return res.json()
      })
      .then((data) => {
        setArticles(data)
      })
  }, [])

  return (
    <div className="article-list">
      <h1>Article List!</h1>
      {articles && (
        <>
          {articles.map((article) => (
            <div className="article-preview" key={article.id}>
              <Link to={'/article/' + article.id}>
                <h2>{article.mainInfo.title}</h2>
              </Link>
            </div>
          ))}
        </>
      )}
    </div>
  )
}

export default ArticleList
