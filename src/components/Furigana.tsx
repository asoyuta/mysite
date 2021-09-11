const MakeNihongoFuriganaWordsList = (nihongo: string, hiragana: string): Array<Array<string>> => {

  nihongo += "#"
  hiragana += "#"

  const jaLetter = nihongo.split("")
  const hiLetter = hiragana.split("")

  let nihongoWordsList = []
  let furiganaWordsList = []
  let niGroupWord = ""
  let hiGroupWord = ""
  let ni = 0
  // ひらがなを一文字ずつ
  for (let hi = 0; hi < hiLetter.length; hi++) {
    // ひらがなと原文の一文字が同じなら、原文一文字を原文グループワードに足し合わせ、原文を次の文字へ
    if (hiLetter[hi] === jaLetter[ni]) {
      niGroupWord += hiLetter[hi]
      ni++
      // ひらがなが最後の一文字なら、それまでの両グループワードを両リストに加えて終了
      if (hiLetter[hi] === "#") {
        nihongoWordsList.push(niGroupWord)
        furiganaWordsList.push(hiGroupWord)
        break
      }
      // ひらがな一文字と原文一文字が異なり
    } else {
      // 原文が最初の一文字でないなら、原文グループワード（ひらがな）を原文リストに加え、
      // ふりがなリストに空白""を加える
      if (ni !== 0) {
        nihongoWordsList.push(niGroupWord)
        furiganaWordsList.push("")
        niGroupWord = ""
        hiGroupWord = ""
      }
      // 現在の両方の一文字を漢字一文字目、ふりがな一文字目としてグループワードの一文字目とする
      niGroupWord += jaLetter[ni]
      hiGroupWord += hiLetter[hi]

      // 次に原文と一致するひらがな一文字を検索する
      searchLoop:
      // 等しいものを見つけたら強制終了
      for (let nOr = ni + 1; nOr < jaLetter.length; nOr++) {
        let nHiGroupWord = hiGroupWord
        for (let nHi = hi + 1; nHi < hiLetter.length; nHi++) {
          // 等しければ
          if (jaLetter[nOr] === hiLetter[nHi]) {
            nihongoWordsList.push(niGroupWord)
            furiganaWordsList.push(nHiGroupWord)
            niGroupWord = ""
            hiGroupWord = ""
            ni = nOr
            hi = nHi - 1
            break searchLoop
          }
          nHiGroupWord += hiLetter[nHi]
        }
        // 異なれば
        niGroupWord += jaLetter[nOr]
      }
    }
  }

  if (nihongoWordsList.slice(-1)[0] === "#") {
    nihongoWordsList.pop()
    furiganaWordsList.pop()
  } else {
    const lastWord = nihongoWordsList.slice(-1)[0].slice(0, -1)
    nihongoWordsList.pop()
    nihongoWordsList.push(lastWord)
  }

  return [nihongoWordsList, furiganaWordsList]
}

//////////////////////////////////////////////////////////////////////////

export interface JpnLine {
  nihongo: string
  hiragana: string
  nihongoWordsList?: string[]
  furiganaWordsList?: string[]
}

export const Furigana = (jpnLine: JpnLine) => {
  const { nihongo, hiragana } = jpnLine
  let [nihongoWordsList, furiganaWordsList] = MakeNihongoFuriganaWordsList(nihongo, hiragana)
  if (jpnLine.nihongoWordsList && jpnLine.furiganaWordsList) {
    nihongoWordsList = jpnLine.nihongoWordsList
    furiganaWordsList = jpnLine.furiganaWordsList
  }
  let textWordsList = []
  for (let i = 0; i < nihongoWordsList.length; i++ ) {
    textWordsList[i] = [nihongoWordsList[i], furiganaWordsList[i]]
  }
  return (
    <div className="jpn-line">
      {textWordsList.map((part) => (
        part[1] 
        ? <ruby>{part[0]}<rt>{part[1]}</rt></ruby>
        : part[0]
      ))}
    </div>
  )
}