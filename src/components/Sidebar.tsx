import React, { useState } from "react";
import {
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Collapse,
  Box,
} from "@mui/material";
import { NavLink } from "react-router-dom";
import HomeIcon from "@mui/icons-material/Home";
import InfoIcon from "@mui/icons-material/Info";
import ContactMailIcon from "@mui/icons-material/ContactMail";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import SettingsIcon from "@mui/icons-material/Settings";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

interface SidebarProps {
  isOpen: boolean;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen }) => {
  const drawerWidth = 240; // Sidebar width

  // State to manage the collapse of nested links
  const [openSettings, setOpenSettings] = useState(false);

  const handleSettingsClick = () => {
    setOpenSettings(!openSettings);
  };

  return (
    <Drawer
      variant="persistent"
      anchor="left"
      open={isOpen}
      sx={{
        width: isOpen ? drawerWidth : 0,
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          width: isOpen ? drawerWidth : 0,
          overflowX: "hidden",
          transition: "width 0.3s",
        },
      }}
    >
      <Box sx={{ mt: 8 }}>
        <List>
          {/* Top-level link: Home */}
          <ListItem component={React.forwardRef<HTMLAnchorElement, any>((props, ref) => <NavLink {...props} ref={ref} to="/" />)} sx={{ "&.active": { backgroundColor: "primary.main", color: "white" } }}>
            <ListItemIcon>
              <HomeIcon />
            </ListItemIcon>
            {isOpen && <ListItemText primary="Home" />}
          </ListItem>

          {/* Top-level link: About */}
          <ListItem component={React.forwardRef<HTMLAnchorElement, any>((props, ref) => <NavLink {...props} ref={ref} to="/about" />)} sx={{ "&.active": { backgroundColor: "primary.main", color: "white" } }}>
            <ListItemIcon>
              <InfoIcon />
            </ListItemIcon>
            {isOpen && <ListItemText primary="About" />}
          </ListItem>

          {/* Top-level parent: Settings */}
          <ListItem onClick={handleSettingsClick}>
            <ListItemIcon>
              <SettingsIcon />
            </ListItemIcon>
            {isOpen && <ListItemText primary="Settings" />}
            {isOpen && (openSettings ? <ExpandLessIcon /> : <ExpandMoreIcon />)}
          </ListItem>
          <Collapse in={openSettings} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              {/* Nested child: Profile */}
              <ListItem component={React.forwardRef<HTMLAnchorElement, any>((props, ref) => <NavLink {...props} ref={ref} to="/settings/profile" />)} sx={{ pl: 4, "&.active": { backgroundColor: "primary.light", color: "white" } }}>
                <ListItemIcon>
                  <AccountCircleIcon />
                </ListItemIcon>
                {isOpen && <ListItemText primary="Profile" />}
              </ListItem>

              {/* Nested child: Account */}
              <ListItem component={React.forwardRef<HTMLAnchorElement, any>((props, ref) => <NavLink {...props} ref={ref} to="/settings/account" />)} sx={{ pl: 4, "&.active": { backgroundColor: "primary.light", color: "white" } }}>
                <ListItemIcon>
                  <AccountCircleIcon />
                </ListItemIcon>
                {isOpen && <ListItemText primary="Account" />}
              </ListItem>
            </List>
          </Collapse>

          {/* Top-level link: Contact */}
          <ListItem component={React.forwardRef<HTMLAnchorElement, any>((props, ref) => <NavLink {...props} ref={ref} to="/contact" />)} sx={{ "&.active": { backgroundColor: "primary.main", color: "white" } }}>
            <ListItemIcon>
              <ContactMailIcon />
            </ListItemIcon>
            {isOpen && <ListItemText primary="Contact" />}
          </ListItem>
        </List>
      </Box>
    </Drawer>
  );
};

export default Sidebar;
