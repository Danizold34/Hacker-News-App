import React from 'react'
import type {CommentsProps} from './Comments.model'
import {Title, Wrapper, EmptyWrapper} from './Comments.styles'
import CommentItem from '../Comment/Comment.component'

const Comments: React.FC<CommentsProps> = ({comments, commentsCount}) => {
  return commentsCount > 0 ? (
    <Wrapper>
      <Title variant='h3'>Comments</Title>
      {comments.item?.map((comment) => (
        <CommentItem key={comment.id} comment={comment} depth={1} />
      ))}
    </Wrapper>
  ) : (
    <EmptyWrapper>
      <Title variant='h2'>No Comments</Title>
    </EmptyWrapper>
  )
}

export default React.memo(Comments)
