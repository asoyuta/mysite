import { Header, Dialogue } from "./components"
import { Data } from './index.d';

const App = (data: Data) => {
  return (
    <body>
      <Header />
      <Dialogue lineInfoList={data.lineInfoList} personInfoList={data.personInfoList}/>
    </body>
  )
}

export default App