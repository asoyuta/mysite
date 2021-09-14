export interface Jpn {
  fullDSD: string
  furiDSD: string
}

export interface Eng {
  free: string
  literal?: string
}

export interface PersonInfo {
  name: string
  src: string
  person: string
}

export interface LineInfo {
  id: number
  personName: string
  jpn: Jpn
  eng: Eng
  desc?: string
}

export interface PersonLineInfos {
  personInfo: PersonInfo
  lineInfo: LineInfo
}

export interface Data {
  personInfoList: PersonInfo[]
  lineInfoList: LineInfo[]
}

declare module '*.json' {
  const data: Data
  export = data
}