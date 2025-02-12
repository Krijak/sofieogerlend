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
      paper: "#f8f7f8",
    },
    success: {
      main: "#547b57",
    },
    divider: "#510629",
  },
  typography: {
    h1: {
      fontSize: "1.6rem",
      fontWeight: 100,
      letterSpacing: "0.09em",
      color: "#510629",
    },
    h2: {
      fontSize: "1rem",
      fontWeight: 600,
      color: "#510629",
    },
  },
});

export default theme;
