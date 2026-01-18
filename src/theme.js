import { createTheme } from '@mui/material/styles'

const theme = createTheme({
  trello: {
    appBarHeight: '58px',
    boardBarHeight: '60px'
  },
  cssVariables: {
    colorSchemeSelector: 'class'
  },
  colorSchemes: {
    // light: {
    //   palette: {
    //     primary: { main: '#1976d2' },
    //     secondary : { main: '#dc004e' }
    //   }
    // },
    // dark: {
    //   palette: {
    //     primary: { main: '#90caf9' },
    //     secondary : { main: '#f48fb1' }
    //   }
    // }
    light: true, dark: true
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          '*::-webkit-scrollbar': {
            width: '8px',
            height: '8px'
          },
          '*::-webkit-scrollbar-thumb': {
            backgroundColor: '#bdc3c7',
            borderRadius: '8px'
          },
          '*::-webkit-scrollbar-thumb:hover': {
            backgroundColor: '#90caf9'
          }
        }
      }
    },
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none'
        }
      }
    },
    MuiInputLabel: {
      styleOverrides: {
        root: ({ theme }) => ({
          color: theme.palette.primary.main,
          fontSize: '0.875rem'
        })
      }
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: ({ theme }) => ({
          color: theme.palette.primary.main,
          fontSize: '0.875rem',
          '& .MuiOutlinedInput-notchedOutline': {
            borderColor: theme.palette.primary.light
          },
          '&:hover .MuiOutlinedInput-notchedOutline': {
            borderColor: theme.palette.primary.main
          },
          '& fieldset': {
            borderWidth: '1px !important'
          }
        })
      }
    }
  }
})

export default theme