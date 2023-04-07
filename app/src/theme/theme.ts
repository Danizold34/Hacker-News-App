import {createTheme} from '@mui/material/styles'
import {red} from '@mui/material/colors'

// Create a theme instance.
const theme = createTheme({
  palette: {
    secondary: {
      main: '#fff',
      dark: '#000000',
    },
    text: {
      primary: '#808080',
      secondary: '#333333',
    },
    error: {
      main: red.A400,
    },

    background: {
      default: '#E6F7FF',
      paper: '#E6F7FF',
    },
  },
})

export default theme
