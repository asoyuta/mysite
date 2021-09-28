import { Dialogue, Title, useFetch, ErrorMessage, LoadingMessage } from './index'
import { useParams } from 'react-router-dom'
import { ArticleData } from 'index.d'

type Pram = {
  id: string
}

const Article = () => {
  const { id } = useParams<Pram>()

  const {
    data: article,
    isPending,
    error,
  } = useFetch<ArticleData>(`http://localhost:8000/articles/${id}`)

  if (article) {
    const { personInfoList } = article

    for (let i = 0; i < personInfoList.length; i++) {
      personInfoList[i].src =
        require(`../img/livers/${personInfoList[i].name}.png`).default
    }
  }
  
  return (
    <div className="article">
      {error && <ErrorMessage error={error} />}
      {isPending && <LoadingMessage />}
      {article && (
        <>
          <Title title={article.title} />
          <Dialogue
            date={article.date}
            url={article.url}
            lineInfoList={article.lineInfoList}
            personInfoList={article.personInfoList}
          />
        </>
      )}
    </div>
  )
}

export default Article
