import {Typography, css} from '@mui/material'
import {styled} from '@mui/system'

export const Wrapper = styled('div')`
  ${(props) => {
    return css`
      display: flex;
      width: 100%;
      background: ${props.theme.palette.secondary.main};
      border-bottom: 1px solid ${props.theme.palette.secondary.dark};
      flex-direction: column;
      justify-content: start;
      align-items: start;
      gap: 10px;
      padding: 0 10px 10px 10px;
      &:hover {
        -webkit-box-shadow: 0px -5px 5px -1px rgba(16, 141, 197, 0.61) inset;
        -moz-box-shadow: 0px -5px 5px -1px rgba(16, 141, 197, 0.61) inset;
        box-shadow: 0px -5px 5px -1px rgba(16, 141, 197, 0.61) inset;
      }
    `
  }}
`
export const ContentWrapper = styled('div')`
  display: flex;
  width: 100%;
  flex-direction: row;
  gap: 10px;
  padding: 0 10px;
  justify-content: start;
`
export const Points = styled(Typography)`
  display: flex;
  gap: 10px;
  flex-direction: row;
  justify-content: center;
  align-items: start;
`
export const Author = styled(Points)``
export const Time = styled(Author)``
