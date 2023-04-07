import type {Comment} from '../../types/types'
export interface CommentsProps {
  commentsCount: number
  comments: {
    item: Comment[] | null
  }
}
