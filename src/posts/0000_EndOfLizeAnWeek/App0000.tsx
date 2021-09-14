import { Header, Dialogue } from "../../components"
import data from "./data.json"

import AngeIcon from "../../img/Ange.png"
import LizeIcon from "../../img/Lize.png"

data.personInfoList[0].src = AngeIcon
data.personInfoList[0].person = "first"
data.personInfoList[1].src = LizeIcon
data.personInfoList[1].person = "second"

const App0000 = () => {
  return (
    <body>
      <Header />
      <Dialogue lineInfoList={data.lineInfoList} personInfoList={data.personInfoList}/>
    </body>
  )
}

export default App0000