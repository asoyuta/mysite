import { Line, Toggle, Button } from './index'
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
  const toggleTran = () => {
    setTran((prevState) => !prevState)
  }
  const nextName = () => {
    setFirst((prevState) => (prevState + 1) % personInfoList.length)
  }

  return (
    <div className="dialogue">
      <div className="buttons">
        <div className="furi-tran">
          <p>Furigana</p>
          <Toggle toggled={furi} onClick={() => toggleFuri()} />
        </div>
        <div className="furi-tran">
          <p>Translation</p>
          <Toggle toggled={tran} onClick={() => toggleTran()} />
        </div>
        <div className="person">
          <p>First Person</p>
          <Button value={personInfoList[first].name} onClick={() => nextName()} className='person-button'/>
        </div>
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
