import { SpeechBubble } from './index'
import { PersonInfo, LineInfo } from '../index.d'

type Props = {
  personInfo: PersonInfo
  lineInfo: LineInfo
  furiOn: boolean
  tranOn: boolean
  firstPerson: string
}

const Line = ({ personInfo, lineInfo, furiOn, tranOn, firstPerson }: Props) => {
  return (
    <div className={`line-${firstPerson === personInfo.name ? "first" : "second"}`}>
      <img src={personInfo.src} alt="icon" />
      <SpeechBubble
        personInfo={personInfo}
        lineInfo={lineInfo}
        furiOn={furiOn}
        tranOn={tranOn}
        firstPerson={firstPerson}
      />
    </div>
  )
}

export default Line
