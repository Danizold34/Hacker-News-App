import {Container as MuiContainer, css} from '@mui/material'
import {styled} from '@mui/system'

export const Container = styled(MuiContainer)`
  ${(props) => css`
    background: ${props.theme.palette.background.paper};
  `}
`
