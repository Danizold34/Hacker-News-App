import React from 'react'
import {
  Title,
  Wrapper,
  Time,
  Author,
  ContentWrapper,
  Points,
  CommentsCount,
} from './ArticleDetails.styles'
import type {ArticleDetailsProps} from './ArticleDetails.model'
import {getDifferenceBetweenTimes} from '../../utilities/getDifferenceBetweenTimes.utilities'
import StarBorderIcon from '@mui/icons-material/StarBorder'

const ArticleDetails: React.FC<ArticleDetailsProps> = ({
  time,
  url,
  by,
  score,
  title,
  commentsCount,
}) => {
  return (
    <Wrapper href={url}>
      <Title variant='h4'>{title}</Title>
      <ContentWrapper>
        <Points variant='h5'>
          {score} <StarBorderIcon />
        </Points>
        <Author variant='h5'>by {by}</Author>
        <Time variant='h5'>{getDifferenceBetweenTimes(time)} ago</Time>
        <CommentsCount variant='h5'>{commentsCount} comment(s)</CommentsCount>
      </ContentWrapper>
    </Wrapper>
  )
}
export default ArticleDetails
