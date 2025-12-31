import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import { useColorScheme } from '@mui/material/styles'

function App() {
  return (
    <>
      <ModeSwitcher />
      <div>Hello, Nguyen Van Dat</div>

      <Typography variant="body2" color="text.secondary">
        Nguyen Van Dat Typography Body2 - text.secondary
      </Typography>

      <Button variant="text">Text</Button>
      <Button variant="contained">Contained</Button>
      <Button variant="outlined">Outlined</Button>
    </>
  )
}

function ModeSwitcher() {
  const { mode, setMode } = useColorScheme()

  if (!mode) {
    return null
  }

  return (
    <select
      value={mode}
      onChange={(event) => {
        setMode(event.target.value)
        // For TypeScript, cast `event.target.value as 'light' | 'dark' | 'system'`:
        console.log(event.target.value)
      }}
    >
      <option value="system">System</option>
      <option value="light">Light</option>
      <option value="dark">Dark</option>
    </select>
  )
}

export default App
