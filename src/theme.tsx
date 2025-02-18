import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
  components: {
    MuiButtonBase: {
      defaultProps: {
        disableRipple: true,
      },
    },
    MuiButton: {
      variants: [
        {
          props: { variant: "text" },
          style: {
            color: "black",
            ":hover": {
              color: "#56012e",
            },
          },
        },
      ],
    },
  },
  palette: {
    mode: "light",
    primary: {
      main: "#56012e",
    },
    secondary: {
      main: "#f50057",
    },
    background: {
      default: "#e5dee1",
      paper: "#5b2a45",
    },
    success: {
      main: "#547b57",
    },
    divider: "#510629",
  },
  typography: {
    h1: {
      fontSize: "1.1rem",
      fontWeight: 100,
      letterSpacing: "0.09em",
      color: "#510629",
      xs: {
        fontSize: "1rem",
      },
    },
    h2: {
      fontSize: "0.8rem",
      fontWeight: 600,
      color: "#510629",
    },
    body1: {
      fontSize: "1rem",
    },
  },
});

export default theme;
