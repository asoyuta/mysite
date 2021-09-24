import { Article, Header } from './components'
import { Data } from './index.d'

const App = ({ lineInfoList, personInfoList, mainInfo }: Data) => {
  return (
    <body>
      <Header />
      <Article
        mainInfo={mainInfo}
        personInfoList={personInfoList}
        lineInfoList={lineInfoList}
      />
    </body>
  )
}

export default App
