import { Dialogue, Title } from './index'
import { useParams } from 'react-router-dom'

type Pram = {
  id: string
}

const Article = () => {
  const { id } = useParams<Pram>()

  const data = require(`../JSON/article/${id}.json`)
  const { mainInfo, personInfoList, lineInfoList } = data

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
