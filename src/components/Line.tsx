import { SpeechBubble } from './index'
import { PersonLineInfos } from '../index.d'

const Line = (personLineInfos: PersonLineInfos) => {
  const { personInfo, lineInfo } = personLineInfos

  return (
    <div className={"line-" + personInfo.person}>
      <img src={personInfo.src} alt="icon" />
      <SpeechBubble personInfo={personInfo} lineInfo={lineInfo} />
    </div>
  )
}

export default Line
