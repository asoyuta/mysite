import { Header, Dialogue } from "./components/index"
import { Data } from './pages/data';

const App = (data: Data) => {
  return (
    <body>
      <Header />
      <Dialogue lineInfoList={data.lineInfoList} />
    </body>
  )
}

export default App