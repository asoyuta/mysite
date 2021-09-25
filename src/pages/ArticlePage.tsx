import { useParams } from 'react-router-dom'
import { Article, Header } from '../components'

type Pram = {
  id: string
}

const ArticlePage = () => {
  const { id } = useParams<Pram>()

  const data = require(`../JSON/article/${id}.json`)
  const { mainInfo, personInfoList, lineInfoList } = data

  for (let i = 0; i < personInfoList.length; i++) {
    personInfoList[i].src =
      require(`../img/${personInfoList[i].name}.png`).default
  }

  return (
    <>
      <Header />
      <Article
        mainInfo={mainInfo}
        personInfoList={personInfoList}
        lineInfoList={lineInfoList}
      />
    </>
  )
}

export default ArticlePage
