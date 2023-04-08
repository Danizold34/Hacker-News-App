import {Box} from '@mui/material'
import {Container} from './Layout.styles'
import type {PropsWithChildren} from 'react'

const Layout: React.FC<PropsWithChildren> = ({children}) => {
  return (
    <Container maxWidth='lg'>
      <Box sx={{my: 4}}>{children}</Box>
    </Container>
  )
}
export default Layout
