import { Line } from './index'
import { PersonInfo, LineInfo } from '../index.d'
import { useState } from 'react'

type Props = {
  personInfoList: PersonInfo[]
  lineInfoList: LineInfo[]
}

const Dialogue = ({ personInfoList, lineInfoList }: Props) => {
  const [furi, setFuri] = useState(true)
  const [tran, setTran] = useState(true)
  const [first, setFirst] = useState(0)

  const toggleFuri = () => {
    setFuri((prevState) => !prevState)
  }
  const toggleTl = () => {
    setTran((prevState) => !prevState)
  }
  const nextName = () => {
    setFirst((prevState) => (prevState + 1) % personInfoList.length)
  }

  return (
    <div className="dialogue">
      <div className="buttons">
        <button onClick={() => nextName()}>{"First person: " + personInfoList[first].name}</button>
        <button onClick={() => toggleFuri()}>
          {furi ? 'Turn OFF Furigana' : 'Turn ON Furigana'}
        </button>
        <button onClick={() => toggleTl()}>
          {tran ? 'Turn OFF Translation' : 'Turn ON Translation'}
        </button>
      </div>
      <div className="chat">
        {lineInfoList.map((lineInfo) => (
          <div className="line">
            {personInfoList.map(
              (personInfo) =>
                personInfo.name === lineInfo.personName && (
                  <Line
                    personInfo={personInfo}
                    lineInfo={lineInfo}
                    furi={furi}
                    tran={tran}
                    firstPerson={personInfoList[first].name}
                  />
                ),
            )}
          </div>
        ))}
      </div>
    </div>
  )
}

export default Dialogue
