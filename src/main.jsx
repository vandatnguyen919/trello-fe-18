import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import CssBaseline from '@mui/material/CssBaseline'
import { ThemeProvider } from '@mui/material/styles'
import InitColorSchemeScript from '@mui/material/InitColorSchemeScript'
import theme from './theme.js'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <InitColorSchemeScript attribute="class" />
    <ThemeProvider theme={theme}>
      {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
      <CssBaseline />
      <App />
    </ThemeProvider>
  </React.StrictMode>
)
