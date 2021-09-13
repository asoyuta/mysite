import './DialoguePage.scss'
import Header from '../components/Header'
import SpeechBubble from '../components/SpeechBubble'
import data from "./data.json"

const DialoguePage = () => {
  return (
    <body>
      <Header />
      <div className="dialogue">
        {data.lineInfoList.map((lineInfo) => (
          <SpeechBubble
            id={lineInfo.id}
            name={lineInfo.name}
            jpn={lineInfo.jpn}
            eng={lineInfo.eng}
            desc={lineInfo.desc}
          />
        ))}
      </div>
    </body>
  )
}

export default DialoguePage
