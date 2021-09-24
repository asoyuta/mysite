import data from './data.json'
import App from '../../App'
import { Fragment } from 'react'

const { mainInfo, lineInfoList, personInfoList } = data

for (let i = 0; i < personInfoList.length; i++) {
  personInfoList[i].src =
    require(`../../img/${personInfoList[i].name}.png`).default
}

const Page0000 = () => {
  return (
    <Fragment>
      <App
        mainInfo={mainInfo}
        lineInfoList={lineInfoList}
        personInfoList={personInfoList}
      />
    </Fragment>
  )
}

export default Page0000
