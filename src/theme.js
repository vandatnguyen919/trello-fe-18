import { createTheme } from '@mui/material/styles'

const theme = createTheme({
  trello: {
    appBarHeight: '48px',
    boardBarHeight: '56px'
  },
  cssVariables: {
    colorSchemeSelector: 'class'
  },
  colorSchemes: {
    light: {
      palette: {
        primary: { main: '#1976d2' },
        secondary : { main: '#dc004e' }
      }
    },
    dark: {
      palette: {
        primary: { main: '#90caf9' },
        secondary : { main: '#f48fb1' }
      }
    }
  }
})

export default theme