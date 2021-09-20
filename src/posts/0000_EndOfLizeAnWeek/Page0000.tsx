import data from "./data.json"
import App from "../../App"
import { Fragment } from "react"

for (let i = 0; i < data.personInfoList.length; i++) {
  data.personInfoList[i].src = require(`../../img/${data.personInfoList[i].name}.png`).default
}

data.personInfoList[0].person = "first"
data.personInfoList[1].person = "second"

const Page0000 = () => {
  return (
    <Fragment>
      <App lineInfoList={data.lineInfoList} personInfoList={data.personInfoList}></App>
    </Fragment>
  )
}

export default Page0000