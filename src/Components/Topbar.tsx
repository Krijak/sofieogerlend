import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import { Stack, styled, Typography } from "@mui/material";
import { NavLink } from "react-router-dom";

type NavItem = {
  title: string;
  href: string;
};

const MenuItem = ({ title, href }: NavItem) => {
  return (
    <StyledNavLinkWrapper display={"inline"} variant="button" title={title}>
      <NavLink
        key={href}
        to={href}
        className={({ isActive }) => (isActive ? "active" : "")}
        target={title == "Ønskeliste" ? "_blank" : "_self"}
      >
        {title}
      </NavLink>
    </StyledNavLinkWrapper>
  );
};

const Topbar = () => {
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const drawerWidth = 302;

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const navItems: NavItem[] = [
    { title: "Hjem", href: "/" },
    { title: "Fredag", href: "fredag" },
    { title: "Lørdag", href: "lørdag" },
    { title: "Transport og overnatting", href: "transportogovernatting" },
    { title: "Ønskeliste", href: "https://onsk.no/lister/km8-4le" },
  ];

  const drawer = (
    <Stack
      onClick={handleDrawerToggle}
      sx={{ textAlign: "center" }}
      pl={4}
      mt={5}
    >
      <List>
        {navItems.map((item) => (
          <ListItem key={item.href} disablePadding sx={{ marginBottom: 3 }}>
            <MenuItem {...item} />
          </ListItem>
        ))}
      </List>
    </Stack>
  );

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        component="nav"
        sx={{
          background: "transparent",
          boxShadow: "none",
          ".MuiToolbar-root": { justifyContent: "flex-end" },
        }}
      >
        <Toolbar>
          <IconButton
            aria-label="åpne meny"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Stack
            sx={{ display: { xs: "none", sm: "flex" } }}
            flexDirection={"row"}
            gap={3}
          >
            {navItems.map((item) => (
              <MenuItem {...item} />
            ))}
          </Stack>
        </Toolbar>
      </AppBar>
      <nav>
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display: { xs: "flex", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      </nav>
    </Box>
  );
};

export default Topbar;

const StyledNavLinkWrapper = styled(Typography)(({ theme }) => ({
  "& >a": {
    color: "black",
    ":hover": {
      color: theme.palette.primary.main,
    },
  },
  "& > .active": {
    fontWeight: "bold",
    color: theme.palette.primary.main,
  },
  "::after": {
    display: "block",
    content: "attr(title)",
    fontWeight: "bold",
    height: " 1px",
    color: "transparent",
    overflow: "hidden",
    visibility: "hidden",
  },
}));
