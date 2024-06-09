import Button from "@mui/material/Button";
import useMediaQuery from "@mui/material/useMediaQuery";
import Typography from "@mui/material/Typography";
import { useColorScheme } from "@mui/material/styles";
import { Box, FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import SettingsBrightnessIcon from "@mui/icons-material/SettingsBrightness";
function ModeSelect() {
  const { mode, setMode } = useColorScheme();

  const handleChange = (event) => {
    const selectedMode = event.target.value;
    if (selectedMode) {
      setMode(selectedMode);
    }
  };

  return (
    <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
      <InputLabel id="label-dark-light-mode">Mode</InputLabel>
      <Select
        labelId="label-dark-light-mode"
        id="dark-light-mode"
        value={mode}
        label="mode"
        onChange={handleChange}
      >
        <MenuItem value="light">
          <div
            style={{ display: "inline-flex", alignItems: "center", gap: "8px" }}
          >
            <LightModeIcon fontSize="small" /> Light
          </div>
        </MenuItem>
        <MenuItem value="dark">
          <Box sx={{ display: "inline-flex", alignItems: "center", gap: 1 }}>
            <DarkModeIcon fontSize="small" /> Dark
          </Box>
        </MenuItem>
        <MenuItem value="system">
          <Box sx={{ display: "inline-flex", alignItems: "center", gap: 1 }}>
            <SettingsBrightnessIcon fontSize="small" /> System
          </Box>
        </MenuItem>
      </Select>
    </FormControl>
  );
}

function ModeToggle() {
  const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)"); // xem máy có đang trong chế độ dark mode hay không
  const prefersLightMode = useMediaQuery("(prefers-color-scheme: light)"); // xem máy có đang trong chế độ light mode hay không
  const { mode, setMode } = useColorScheme();
  return (
    <Button
      onClick={() => {
        setMode(mode === "light" ? "dark" : "light");
      }}
    >
      {mode === "light" ? "Turn dark" : "Turn light"}
    </Button>
  );
}

function App() {
  return (
    <>
      <Typography variant="body2" color={"palette.text.secondary"}>
        fdsafsadfsd
      </Typography>
      <Button variant="contained" color="secondary">
        Hello world
      </Button>

      {/* <ModeToggle /> */}
      <hr />
      <ModeSelect />
    </>
  );
}

export default App;
