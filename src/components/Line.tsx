import { SpeechBubble } from './index'
import { PersonInfo, LineInfo } from '../index.d'

type Props = {
  personInfo: PersonInfo
  lineInfo: LineInfo
  furi: boolean
  tran: boolean
  firstPerson: string
}

const Line = ({ personInfo, lineInfo, furi, tran, firstPerson }: Props) => {
  return (
    <div className={`line-${firstPerson === personInfo.name ? "first" : "second"}`}>
      <img src={personInfo.src} alt="icon" />
      <SpeechBubble
        personInfo={personInfo}
        lineInfo={lineInfo}
        furi={furi}
        tran={tran}
        firstPerson={firstPerson}
      />
    </div>
  )
}

export default Line
