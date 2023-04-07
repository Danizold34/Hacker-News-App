export interface News {
  id: number
  by: string
  descendants: number
  score: number
  time: number
  title: string
  type: 'story'
  url: string
  kids?: number[]
}
