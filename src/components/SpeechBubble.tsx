import { Furigana, Button } from './index'
import { PersonInfo, LineInfo } from '../index.d'
import { useState } from 'react'

type Props = {
  personInfo: PersonInfo
  lineInfo: LineInfo
  furiOn: boolean
  tranOn: boolean
  firstPerson: string
}

const SpeechBubble = ({
  personInfo,
  lineInfo,
  furiOn,
  tranOn,
  firstPerson,
}: Props) => {
  const [show, setShow] = useState(false)

  const toggle = () => {
    setShow((prevState) => !prevState)
  }

  const descList = lineInfo.desc?.split('\n')

  return (
    <div
      className={`speech-bubble-${
        firstPerson === personInfo.name ? 'first' : 'second'
      }`}
    >
      <div className="bubble-content">
        <div className="jpn-line">
          <Furigana
            fullDSD={lineInfo.jpn.fullDSD}
            furiDSD={lineInfo.jpn.furiDSD}
            furiOn={furiOn}
          />
        </div>
        {tranOn ? <p className="eng-line">{lineInfo.eng.free}</p> : null}
        {lineInfo.desc || lineInfo.eng.literal ? (
          <Button
            value={show ? 'Close details' : 'Open details'}
            onClick={toggle}
            className="detail-button"
          />
        ) : null}
        {show ? (
          <div className="detail">
            {lineInfo.eng.literal ? (
              <div className="literal">
                <p className="literal-text">{lineInfo.eng.literal}</p>
              </div>
            ) : null}
            {lineInfo.desc ? (
              <div className="desc">
                <div className="desc-text">
                  {descList?.map((paragraph) => (
                    <p>{paragraph}</p>
                  ))}
                </div>
              </div>
            ) : null}
          </div>
        ) : null}
      </div>
    </div>
  )
}

export default SpeechBubble
