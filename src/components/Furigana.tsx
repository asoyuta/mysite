type Props = {
  fullDSD: string
  furiDSD: string
  furi: boolean
}

const Furigana = ({ fullDSD, furiDSD, furi }: Props) => {
  let fullD = fullDSD.split('#')
  let furiD = furiDSD.split('#')
  let fullWordsList: string[] = []
  let furiWordsList: string[] = []
  for (let i = 0; i < fullD.length; i++) {
    let iFull = fullD[i].slice(1).slice(0, -1)
    let iFuri = furiD[i]
    if (iFuri === '$$') {
      iFuri = ''
    } else {
      iFuri = furiD[i].slice(1).slice(0, -1)
    }
    fullWordsList.push(iFull)
    furiWordsList.push(iFuri)
  }

  let text = []
  for (let i = 0; i < fullWordsList.length; i++) {
    text[i] = [fullWordsList[i], furiWordsList[i]]
  }
  return (
    <>
      {furi ? (
        <>
          {text.map((part) => (
            <ruby>
              {part[0]}
              <rt>{part[1]}</rt>
            </ruby>
          ))}
        </>
      ) : (
        <>{text.map((part) => part[0])}</>
      )}
    </>
  )
}

export default Furigana
