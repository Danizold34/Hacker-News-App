import type {Comment} from '../../types/types'

export interface CommentProps {
  comment: Comment
  depth: number
  items?: Comment[]
}
