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
    <div
      className={`line ${
        firstPerson === personInfo.name
          ? 'line-first'
          : personInfo.name !== 'THIRD'
          ? 'line-second'
          : 'line-third'
      }`}
    >
      <img src={personInfo.src} alt="icon" />
      <SpeechBubble lineInfo={lineInfo} furiOn={furiOn} tranOn={tranOn} />
    </div>
  )
}

export default Line
