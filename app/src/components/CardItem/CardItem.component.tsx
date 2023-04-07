import {Wrapper, ContentWrapper, Points, Author, Time} from './CardItem.styles'
import type {CardItemData} from './CardItem.model'
import StarBorderIcon from '@mui/icons-material/StarBorder'
import {getDifferenceBetweenTimes} from '~/src/utilities/getDifferenceBetweenTimes.utilities'
import {Typography} from '@mui/material'

const CardItem = ({
  data,
  style,
}: {
  data: CardItemData
  style?: React.CSSProperties
}) => {
  const {title, score, by, time} = data
  return (
    <Wrapper style={style}>
      <Typography variant='h6'>{title}</Typography>
      <ContentWrapper>
        <Points variant='subtitle2'>
          {score} <StarBorderIcon />
        </Points>
        <Author variant='subtitle2'>by {by}</Author>
        <Time variant='subtitle2'>{getDifferenceBetweenTimes(time)} ago</Time>
      </ContentWrapper>
    </Wrapper>
  )
}
export default CardItem
