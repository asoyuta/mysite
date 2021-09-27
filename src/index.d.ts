export type Jpn = {
  fullDSD: string
  furiDSD: string
}

export type Eng = {
  free: string
  literal?: string
}

export type PersonInfo = {
  name: string
  src: string
}

export type LineInfo = {
  id: number
  personName: string
  jpn: Jpn
  eng: Eng
  desc?: string
}

export type MainInfo = {
  id: number
  title: string
  date: string
  url: string
}

export type Article = {
  mainInfo: MainInfo
  personInfoList: PersonInfo[]
  lineInfoList: LineInfo[]
}

declare module '*.json' {
  const article: Article
  const articles: Article[]
  export = article | articles
}