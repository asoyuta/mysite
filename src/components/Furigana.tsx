import { Fragment } from "react"
import { Jpn } from "../index.d"

const Furigana = (jpn: Jpn) => {
  const { fullDSD, furiDSD } = jpn
  let fullD = fullDSD.split('#')
  let furiD = furiDSD.split('#')
  let fullWordsList: string[] = []
  let furiWordsList: string[] = []
  for (let i = 0; i < fullD.length; i++ ) {
    let iFull = fullD[i].slice(1).slice(0,-1)
    let iFuri = furiD[i]
    if (iFuri === "$$") {
      iFuri = ""
    } else {
      iFuri = furiD[i].slice(1).slice(0,-1)
    }
    fullWordsList.push(iFull)
    furiWordsList.push(iFuri)
  }

  let text = []
  for (let i = 0; i < fullWordsList.length; i++ ) {
    text[i] = [fullWordsList[i], furiWordsList[i]]
  }
  return (
    <Fragment>
      {text.map((part) => (
        <ruby>{part[0]}<rt>{part[1]}</rt></ruby>
      ))}
    </Fragment>
  )
}

export default Furigana