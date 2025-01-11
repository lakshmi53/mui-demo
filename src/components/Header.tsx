import React, { useState } from "react";
import { AppBar, Toolbar, IconButton, Typography, Box, Switch, Menu, MenuItem, Button, useMediaQuery } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { NavLink } from "react-router-dom";

interface HeaderProps {
  toggleSidebar: () => void;
  setDarkMode: (value: boolean) => void;
  darkMode: boolean;
}

const Header: React.FC<HeaderProps> = ({ toggleSidebar, setDarkMode, darkMode }) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null); // State for dropdown menu
  const isSmallScreen = useMediaQuery((theme: any) => theme.breakpoints.down("sm")); // Responsive behavior

  const handleMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget); // Open the dropdown menu
  };

  const handleMenuClose = () => {
    setAnchorEl(null); // Close the dropdown menu
  };

  return (
    <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
      <Toolbar>
        <IconButton edge="start" color="inherit" onClick={toggleSidebar}>
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          My Application
        </Typography>
        <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
          {isSmallScreen ? (
            <>
              {/* Responsive dropdown menu */}
              <IconButton color="inherit" onClick={handleMenuOpen}>
                <MenuIcon />
              </IconButton>
              <Menu
                anchorEl={anchorEl}
                open={Boolean(anchorEl)}
                onClose={handleMenuClose}
              >
                <MenuItem onClick={handleMenuClose} component="a" href="/profile">
                  Profile
                </MenuItem>
                <MenuItem onClick={handleMenuClose} component="a" href="/settings">
                  Settings
                </MenuItem>
              </Menu>
            </>
          ) : (
            <>
              {/* Inline buttons for larger screens */}
              <Button component="a" href="/profile" color="inherit">
                Profile
              </Button>
              <Button component="a" href="/settings" color="inherit">
                Settings
              </Button>
            </>
          )}
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
