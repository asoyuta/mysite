import data from './data.json'
import App from '../../App'

const { mainInfo, lineInfoList, personInfoList } = data

for (let i = 0; i < personInfoList.length; i++) {
  personInfoList[i].src =
    require(`../../img/${personInfoList[i].name}.png`).default
}

const Page0001 = () => {
  return (
    <App
      mainInfo={mainInfo}
      lineInfoList={lineInfoList}
      personInfoList={personInfoList}
    />
  )
}

export default Page0001
