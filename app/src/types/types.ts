export interface Common {
  id: number
  by: string
  time: number
  type: string
}

export interface News extends Common {
  descendants: number
  score: number
  title: string
  url: string
  kids: number[]
}

export interface Comment extends Common {
  parent: number
  text: string
  kids?: number[]
}
