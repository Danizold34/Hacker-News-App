import {
  Wrapper,
  ContentWrapper,
  Points,
  Author,
  Time,
  Title,
} from './CardItem.styles'
import type {CardItemData} from './CardItem.model'
import StarBorderIcon from '@mui/icons-material/StarBorder'
import {getDifferenceBetweenTimes} from '~/src/utilities/getDifferenceBetweenTimes.utilities'
import {useNavigate} from 'react-router'
import {ROUTE_CONSTANTS} from '~/src/constants/route.constants'

const CardItem = ({
  data,
  style,
}: {
  data: CardItemData
  style?: React.CSSProperties
}) => {
  const {title, score, by, time, id} = data
  const navigate = useNavigate()

  const redirectHandler = () => {
    navigate(`${ROUTE_CONSTANTS.ARTICLE}/${id}`)
  }
  return (
    <Wrapper style={style} onClick={redirectHandler}>
      <Title variant='h6'>{title}</Title>
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
