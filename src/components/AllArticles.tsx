import {
  ArticleList,
  useFetch,
  ErrorMessage,
  LoadingMessage,
} from 'components/index'
import { ArticleData } from 'index.d'

const AllArticles = () => {
  const {
    data: articles,
    isPending,
    error,
  } = useFetch<ArticleData[]>('http://localhost:8000/articles')

  return (
    <div className="home">
      {error && <ErrorMessage error={error} />}
      {isPending && <LoadingMessage />}
      {articles && <ArticleList articles={articles} />}
    </div>
  )
}

export default AllArticles
