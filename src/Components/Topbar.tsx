import { AppBar, Stack, Toolbar } from "@mui/material";

const Topbar = () => {
  return (
    <AppBar
      sx={{
        background: "transparent",
        boxShadow: "none",
        ".MuiToolbar-root": { justifyContent: "flex-end" },
      }}
    >
      <Toolbar>
        <Stack flexDirection={"row"} gap={3}>
          <a href="/sofieogerlend/">Hjem</a>
          <a href="/sofieogerlend/#/fredag">Fredag</a>
        </Stack>
      </Toolbar>
    </AppBar>
  );
};

export default Topbar;
