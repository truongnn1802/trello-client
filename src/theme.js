import { experimental_extendTheme as extendTheme } from "@mui/material/styles";
import { cyan, deepOrange, orange, teal } from "@mui/material/colors";
import { BorderColor, Height } from "@mui/icons-material";

// Create a theme instance.
const theme = extendTheme({
  trelloCustom: {
    appBarHeight: "58px",
    boardBarHeight: "60px",
  },

  colorSchemes: {
    light: {
      palette: {
        primary: teal,
        secondary: deepOrange,
      },
    },
    dark: {
      palette: {
        primary: cyan,
        secondary: orange,
      },
    },
  },
  components: {
    // Name of the component
    MuiCssBaseline:{
      styleOverrides: {
        body: {
          '*::-webkit-scrollbar':{
            width:'8px',
            height:'8px'
          },
          '*::-webkit-scrollbar-thumb':{
            backgroundColor:'#bdc3c7',
            borderRadius:'8px'
          },
          '*::-webkit-scrollbar-thumb:hover':{
            backgroundColor:'#00b894',
          }
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "none",
        },
      },
    },
    MuiInputLabel: {
      styleOverrides: {
        root: ({ theme }) => {
          return {
            color: theme.palette.primary.main,
            fontSize: "0.875rem",
          };
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: ({ theme }) => {
          return {
            color: theme.palette.primary.main,
            fontSize: "0.875rem",
            "MuiOutlinedInput-notchedOutline": {
              borderColor: theme.palette.primary.light,
            },
            "&:hover": {
              "MuiOutlinedInput-notchedOutline": {
                borderColor: theme.palette.primary.main,
              },
            },
            "& fieldset": {},
          };
        },
      },
    },
  },
});

export default theme;
