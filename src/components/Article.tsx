import { Dialogue, Title } from './index'
import { Data } from '../index.d'

const Article = ({ lineInfoList, personInfoList, mainInfo }: Data) => {
  return (
    <div className="article">
      <Title title={mainInfo.title} />
      <Dialogue lineInfoList={lineInfoList} personInfoList={personInfoList} />
    </div>
  )
}

export default Article
