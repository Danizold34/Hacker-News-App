export interface News {
  id: number
  by: string
  descendants: number
  score: number
  time: number
  title: string
  type: 'story'
  url: string
  kids: number[]
}

export interface Comment {
  by: string
  id: number
  kids?: number[]
  parent: number
  text: string
  time: number
  type: 'comment'
}
