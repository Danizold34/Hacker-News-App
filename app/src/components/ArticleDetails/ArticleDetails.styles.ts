import {Typography} from '@mui/material'
import {styled} from '@mui/system'

export const Wrapper = styled('a')`
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 20px;
  justify-content: center;
  cursor: pointer;
  text-decoration: none;
  border-bottom: 1px solid ${(props) => props.theme.palette.secondary.dark};
`
export const Title = styled(Typography)`
  text-align: left;
  padding: 5px;
  color: ${(props) => props.theme.palette.secondary.dark};
`
export const ContentWrapper = styled('div')`
  display: flex;
  flex-direction: row;
  justify-content: end;
  gap: 20px;
`
export const Points = styled(Typography)`
  display: flex;
  gap: 10px;
  color: ${(props) => props.theme.palette.secondary.dark};
  flex-direction: row;
  justify-content: center;
  align-items: center;
`
export const Author = styled(Points)``
export const Time = styled(Points)``
export const CommentsCount = styled(Points)``
