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

export interface Data {
  lineInfoList: LineInfo[]
}

declare module './data.json' {
  const data: Data
  export = data
}