import React from "react";
import { AppBar, Toolbar, IconButton, Typography, Button, Box, Switch } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { NavLink } from "react-router-dom";

interface HeaderProps {
  toggleSidebar: () => void;
  setDarkMode: (value: boolean) => void;
  darkMode: boolean;
}

const Header: React.FC<HeaderProps> = ({ toggleSidebar, setDarkMode, darkMode }) => {
  return (
    <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
      <Toolbar>
        {/* Left side: Menu Button */}
        <IconButton edge="start" color="inherit" onClick={toggleSidebar}>
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          My Application
        </Typography>

        {/* Right side: Page Links */}
        <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
          <Button
            component={NavLink}
            to="/profile"
            color="inherit"
            sx={{ textTransform: "none" }}
          >
            Profile
          </Button>
          <Button
            component={NavLink}
            to="/settings"
            color="inherit"
            sx={{ textTransform: "none" }}
          >
            Settings
          </Button>

          {/* Dark Mode Toggle */}
          <Switch
            checked={darkMode}
            onChange={(e) => setDarkMode(e.target.checked)}
            color="secondary"
          />
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
