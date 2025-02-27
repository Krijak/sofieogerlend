import MenuIcon from "@mui/icons-material/Menu";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import { Button, Stack, styled, Typography } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Toolbar from "@mui/material/Toolbar";
import * as React from "react";
import { NavLink, useLocation } from "react-router-dom";
import Name from "../../public/Name.svg";
import Nameandmonogram from "../../public/Nameandmonogram.png";

type NavItem = {
  title: string;
  href: string;
};

const MenuItem = ({
  title,
  href,
  locationPath,
}: NavItem & { locationPath: string }) => {
  const isMainAndActive = href == "/" && locationPath == "/main";
  return (
    <StyledNavLinkWrapper display={"inline"} title={title}>
      <NavLink
        key={href}
        to={href}
        className={({ isActive }) =>
          isActive || isMainAndActive ? "active" : ""
        }
        target={title == "Ønskeliste" || title == "Rsvp" ? "_blank" : "_self"}
      >
        {title}{" "}
        {(title == "Ønskeliste" || title == "Rsvp") && <OpenInNewIcon />}
      </NavLink>
    </StyledNavLinkWrapper>
  );
};

const Topbar = () => {
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const drawerWidth = 350;
  const location = useLocation();
  const isOnMain = ["/", "/main"].includes(location.pathname);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const navItems: NavItem[] = [
    { title: "Hjem", href: "/" },
    { title: "Fredag", href: "fredag" },
    { title: "Lørdag", href: "lørdag" },
    { title: "Transport og overnatting", href: "transportogovernatting" },
    { title: "Informasjon", href: "informasjon" },
    {
      title: "RSVP",
      href: "https://docs.google.com/forms/d/e/1FAIpQLSdBsYysWmlnovduxWR2RICMEsIk0uOwYEiuFoqTrgld8U3RZw/viewform?usp=sharing",
    },
    { title: "Ønskeliste", href: "https://onsk.no/lister/km8-4le" },
  ];

  const drawer = (
    <Stack
      onClick={handleDrawerToggle}
      sx={{
        textAlign: "center",
        height: "100%",
        justifyContent: "space-between",
      }}
      ml={4}
      mr={4}
      mt={5}
    >
      <Box>
        <Box mb={10}>
          <Button onClick={() => handleDrawerToggle} aria-label="Lukk sidemeny">
            <img src={Nameandmonogram} alt="Lukk sidemeny" width={"150px"} />
          </Button>
        </Box>
        <List>
          {navItems.map((item) => (
            <ListItem
              key={item.href}
              disablePadding
              sx={{
                marginBottom: 1,
                display: "flex",
                justifyContent: "center",
              }}
            >
              <MenuItem {...item} locationPath={location.pathname} />
            </ListItem>
          ))}
        </List>
      </Box>
      <Typography mb={2} fontSize={"0.8rem"} sx={{ opacity: "0.5" }}>
        Til Sofie & Erlend <br />
        Fra Kristina ♡ med kjærlighet
      </Typography>
    </Stack>
  );

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        component="nav"
        sx={{
          background: (theme) => theme.palette.background.default,
          boxShadow: "none",
          ".MuiToolbar-root": {
            justifyContent: isOnMain ? "flex-end" : "space-between",
          },
        }}
      >
        <Toolbar>
          {!isOnMain && (
            <Box ml={2}>
              <img src={Name} width={"200px"} />
            </Box>
          )}
          <IconButton
            aria-label="åpne meny"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { lg: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Stack
            sx={{ display: { xs: "none", sm: "none", md: "none", lg: "flex" } }}
            flexDirection={"row"}
            gap={3}
          >
            {navItems.map((item) => (
              <MenuItem
                {...item}
                key={item.href}
                locationPath={location.pathname}
              />
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
            display: { xs: "flex", sm: "flex", md: "flex", lg: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
              backgroundColor: (theme) => theme.palette.background.default,
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
  width: "100%",
  "&>li": {
    display: "flex",
    justifyContent: "center",
  },
  "& >a": {
    color: "black",
    padding: "6px",
    paddingLeft: "10px",
    paddingRight: "10px",
    borderRadius: "20px",
    width: "100%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    textAlign: "center",
    whiteSpace: "nowrap",
    ":hover": {
      color: theme.palette.primary.main,
    },
    svg: {
      marginLeft: "8px",
      fontSize: "0.9rem",
      alignSelf: "center",
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
