import { Link } from 'react-router-dom'
import { ArticleData } from '../index.d'

type Props = {
  articles: ArticleData[]
}

const ArticleList = ({ articles }: Props) => {

  return (
    <div className="article-list">
      <h1>Article List!</h1>
          {articles.map((article) => (
            <div className="article-preview" key={article.id}>
              <Link to={`/article/${article.id}`}>
                <h2>{article.mainInfo.title}</h2>
              </Link>
            </div>
          ))}
    </div>
  )
}

export default ArticleList
