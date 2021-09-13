import { SpeechBubble } from './index'
import { Data } from '../pages/data';

const Dialogue = (data: Data) => {
  return (
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
  )
}

export default Dialogue