import { Furigana, JpnLine } from './Furigana'

interface LineInfo {
  person: string
  jpnLine: JpnLine
  engLine: string
}

const SpeechBubble = (lineInfo: LineInfo) => {
  const { jpnLine, engLine } = lineInfo

  return (
    <div className="bubble-wrapper">
      <div className="speech-bubble">
        <div className="bubble-content">
          <Furigana
            nihongo={jpnLine.nihongo}
            hiragana={jpnLine.hiragana}
            nihongoWordsList={jpnLine.nihongoWordsList}
            furiganaWordsList={jpnLine.furiganaWordsList}
          />
          <p className="eng-line">{engLine}</p>
        </div>
      </div>
    </div>
  )
}

export default SpeechBubble
