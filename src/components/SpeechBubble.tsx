import { LineInfo } from '../pages/data';
import { Furigana } from './index';

const SpeechBubble = (lineInfo: LineInfo) => {
  return (
    <div className="bubble-wrapper">
      <div className="speech-bubble">
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
    </div>
  )
}

export default SpeechBubble