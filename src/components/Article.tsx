import { Dialogue, Title } from './index'
import { useParams } from 'react-router-dom'
import data from '../data/db.json'

type Pram = {
  id: string
}

const Article = () => {
  const { id } = useParams<Pram>()

  const articles = data.articles
  const article = articles[Number(id)]
  const { mainInfo, personInfoList, lineInfoList } = article

  for (let i = 0; i < personInfoList.length; i++) {
    personInfoList[i].src =
      require(`../img/livers/${personInfoList[i].name}.png`).default
  }

  return (
    <div className="article">
      <Title title={mainInfo.title} />
      <Dialogue lineInfoList={lineInfoList} personInfoList={personInfoList} />
    </div>
  )
}

export default Article
