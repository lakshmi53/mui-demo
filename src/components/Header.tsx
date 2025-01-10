import React from "react";
import { AppBar, Toolbar, IconButton, Typography, Box } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

interface HeaderProps {
  toggleSidebar: () => void;
}

const Header: React.FC<HeaderProps> = ({ toggleSidebar }) => {
  return (
    <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
      <Toolbar>
        <IconButton
          edge="start"
          color="inherit"
          aria-label="menu"
          onClick={toggleSidebar}
        >
          <MenuIcon />
        </IconButton>
        <Box
          component="img"
          src="https://via.placeholder.com/40"
          alt="Logo"
          sx={{ height: 40, mr: 2 }}
        />
        <Typography variant="h6" noWrap>
          My Application
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
