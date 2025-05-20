import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#5D3FD3" // Carrot purple
    },
    secondary: {
      main: "#FFA500" // Carrot orange
    },
    background: {
      default: "#F6F6FB"
    }
  },
  typography: {
    fontFamily: "'Quicksand', 'Roboto', 'Arial', sans-serif",
    h1: { fontWeight: 700, fontSize: 28 },
    h2: { fontWeight: 600, fontSize: 22 },
    h3: { fontWeight: 600, fontSize: 18 },
    h4: { fontWeight: 500, fontSize: 16 },
    body1: { fontSize: 15 },
    body2: { fontSize: 13 }
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 10
        }
      }
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 16
        }
      }
    }
  }
});

export default theme;