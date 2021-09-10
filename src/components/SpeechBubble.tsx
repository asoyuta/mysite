import './SpeechBubble.scss';
import {Furigana} from "./Furigana"

interface Jpn {
  key: number,
  japanese: string,
  hiragana: string,
  japaneseArray?: Array<string>,
  furiganaArray?: Array<string>
}

interface Props {
  line: {
    key: number,
    person: string, 
    jpn: Jpn,
    eng: string
  }
}

const SpeechBubble = (props: Props) => {
  const {key, person, jpn, eng} = props.line

  return(
    <div className='speech-bubble' key={key}>
      <Furigana jpn={jpn}></ Furigana>
      <p>{eng}</p>
      <p>{person}</p>
    </div>
  );
}

export default SpeechBubble;