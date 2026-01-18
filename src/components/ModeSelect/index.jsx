import { useColorScheme } from '@mui/material/styles'
import InputLabel from '@mui/material/InputLabel'
import FormControl from '@mui/material/FormControl'
import Box from '@mui/material/Box'
import MenuItem from '@mui/material/MenuItem'
import Select from '@mui/material/Select'
import LightModeIcon from '@mui/icons-material/LightMode'
import DarkModeIcon from '@mui/icons-material/DarkMode'
import SettingsBrightnessIcon from '@mui/icons-material/SettingsBrightness'

function ModeSelect() {
  const { mode, setMode } = useColorScheme()
  if (!mode) {
    return null
  }

  const handleChange = (event) => {
    setMode(event.target.value)
  }

  return (
    <FormControl size="small" sx={{ minWidth: 120 }}>
      <InputLabel id="demo-select-small-label">Mode</InputLabel>
      <Select
        labelId="demo-select-small-label"
        id="demo-select-small"
        value={mode}
        label="Mode"
        onChange={handleChange}
        variant="outlined">
        <MenuItem value="light">
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <LightModeIcon fontSize="small" sx={{ mr: 1 }} /> Light
          </Box>
        </MenuItem>
        <MenuItem value="dark">
          <Box style={{ display: 'flex', alignItems: 'center' }}>
            <DarkModeIcon fontSize="small" sx={{ mr: 1 }} /> Dark
          </Box>
        </MenuItem>
        <MenuItem value="system">
          <Box style={{ display: 'flex', alignItems: 'center' }}>
            <SettingsBrightnessIcon fontSize="small" sx={{ mr: 1 }} /> System
          </Box>
        </MenuItem>
      </Select>
    </FormControl>
  )
}

export default ModeSelect