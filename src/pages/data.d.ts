export interface Jpn {
  fullDSD: string
  furiDSD: string
}

export interface Eng {
  free: string
  literal?: string
}

export interface LineInfo {
  id: number
  name: string
  jpn: Jpn
  eng: Eng
  desc?: string
}

declare module './data.json' {
  interface Data {
    lineInfoList: LineInfo[]
  }

  const data: Data
  export = data
}