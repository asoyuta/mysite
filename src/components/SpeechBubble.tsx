import { Furigana } from './index'
import { PersonLineInfos } from '../index.d';

const SpeechBubble = (personLineInfos: PersonLineInfos) => {
  const { personInfo, lineInfo } = personLineInfos

  return (
    <div className={"speech-bubble-" + personInfo.person}>
      {console.log(personInfo.person)}
      <div className="bubble-content">
        <div className="jpn-line">
          <Furigana
            fullDSD={lineInfo.jpn.fullDSD}
            furiDSD={lineInfo.jpn.furiDSD}
          />
        </div>
        <p className="eng-line">{lineInfo.eng.free}</p>
      </div>
    </div>
  )
}

export default SpeechBubble
