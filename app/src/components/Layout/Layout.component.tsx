import {Box} from '@mui/material'
import {Container} from './Layout.styles'

const Layout = ({children}: {children: React.ReactNode}) => {
  return (
    <Container maxWidth='lg'>
      <Box sx={{my: 4}}>{children}</Box>
    </Container>
  )
}
export default Layout
