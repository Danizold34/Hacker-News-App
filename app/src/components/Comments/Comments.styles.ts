import {Typography} from '@mui/material'
import {styled} from '@mui/system'

export const ArticleWrapper = styled('div')`
  display: flex;
  flex-direction: column;
  gap: 40px;
`

export const Wrapper = styled('div')`
  display: flex;
  width: 100%;
  height: 100%;
  justify-content: start;
  gap: 40px;
  flex-direction: column;
`

export const Title = styled(Typography)`
  color: ${(props) => props.theme.palette.secondary.dark};
  text-align: center;
`

export const EmptyWrapper = styled('div')`
  width: 100%;
  height: 50vh;
  display: flex;
  justify-content: center;
  align-items: center;
`
