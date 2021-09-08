import "./Furigana.scss"

const MakeFuriganaArray = (japanese: string, hiragana: string):Array<Array<string>> => {

  japanese += "#"
  hiragana += "#"

  const jaLetter = japanese.split("")
  const hiLetter = hiragana.split("")

  let japaneseArray = []
  let furiganaArray = []
  let jaGroupWord = ""
  let hiGroupWord = ""
  let ja = 0
  // ひらがなを一文字ずつ
  for (let hi = 0; hi < hiLetter.length; hi++) {
    // ひらがなと原文の一文字が同じなら、原文一文字を原文グループワードに足し合わせ、原文を次の文字へ
    if (hiLetter[hi] === jaLetter[ja]) {
      jaGroupWord += hiLetter[hi]
      ja++
      // ひらがなが最後の一文字なら、それまでの両グループワードを両リストに加えて終了
      if (hiLetter[hi] === "#") {
        japaneseArray.push(jaGroupWord)
        furiganaArray.push(hiGroupWord)
        break
      }
      // ひらがな一文字と原文一文字が異なり
    } else {
      // 原文が最初の一文字でないなら、原文グループワード（ひらがな）を原文リストに加え、
      // ふりがなリストに空白""を加える
      if (ja !== 0) {
        japaneseArray.push(jaGroupWord)
        furiganaArray.push("")
        jaGroupWord = ""
        hiGroupWord = ""
      }
      // 現在の両方の一文字を漢字一文字目、ふりがな一文字目としてグループワードの一文字目とする
      jaGroupWord += jaLetter[ja]
      hiGroupWord += hiLetter[hi]

      // 次に原文と一致するひらがな一文字を検索する
      searchLoop:
      // 等しいものを見つけたら強制終了
      for (let nOr = ja + 1; nOr < jaLetter.length; nOr++) {
        let nHiGroupWord = hiGroupWord
        for (let nHi = hi + 1; nHi < hiLetter.length; nHi++) {
          // 等しければ
          if (jaLetter[nOr] === hiLetter[nHi]) {
            japaneseArray.push(jaGroupWord)
            furiganaArray.push(nHiGroupWord)
            jaGroupWord = ""
            hiGroupWord = ""
            ja = nOr
            hi = nHi - 1
            break searchLoop
          }
          nHiGroupWord += hiLetter[nHi]
        }
        // 異なれば
        jaGroupWord += jaLetter[nOr]
      }
    }
  }

  if (japaneseArray.slice(-1)[0] === "#") {
    japaneseArray.pop()
    furiganaArray.pop()
  } else {
    const lastWord = japaneseArray.slice(-1)[0].slice(0, -1)
    japaneseArray.pop()
    japaneseArray.push(lastWord)
  }

  return [japaneseArray, furiganaArray]
}

//////////////////////////////////////////////////////////////////////////

interface Props {
  jpn: {
    key: number,
    japanese: string,
    hiragana: string,
    japaneseArray?: Array<string>,
    furiganaArray?: Array<string>
  }
}

export const Furigana = (props: Props) => {
  const { japanese, hiragana } = props.jpn
  let [japaneseArray, furiganaArray] = MakeFuriganaArray(japanese, hiragana)
  if (props.jpn.japaneseArray && props.jpn.furiganaArray) {
    japaneseArray = props.jpn.japaneseArray
    furiganaArray = props.jpn.furiganaArray
  }
  let textArray = []
  for (let i = 0; i < japaneseArray.length; i++ ) {
    textArray[i] = [japaneseArray[i], furiganaArray[i]]
  }
  return (
    <div className="furiganaText">
      {textArray.map((part) => (
        part[1] 
        ? <ruby>{part[0]}<rt>{part[1]}</rt></ruby>
        : part[0]
      ))}
    </div>
  )
}