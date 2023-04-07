import {Typography} from '@mui/material'
import {styled} from '@mui/system'

export const Wrapper = styled('div')`
  display: flex;
  padding: 5px;
  flex-direction: column;
  gap: 10px;
  width: 100%;
`
export const ContentWrapper = styled('div')`
  display: flex;
  flex-direction: column;
  gap: 10px;
`

export const InfoWrapper = styled('div')`
  display: flex;
  flex-direction: row;
  justify-content: start;
  gap: 20px;
`
export const Author = styled(Typography)`
  display: flex;
  gap: 10px;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`
export const Time = styled(Author)``
export const CommentsCount = styled(Author)``

export const ChildWrapper = styled('div')<{depth: number}>`
  padding-left: ${(props) => props.depth * 15}px;
`

export const Text = styled(Typography)`
  color: ${(props) => props.theme.palette.secondary.dark};
`
