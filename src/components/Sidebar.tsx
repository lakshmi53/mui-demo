import React from "react";
import {
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Divider,
  IconButton,
  Box,
} from "@mui/material";
import { NavLink } from "react-router-dom";
import HomeIcon from "@mui/icons-material/Home";
import InfoIcon from "@mui/icons-material/Info";
import ContactMailIcon from "@mui/icons-material/ContactMail";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";


interface SidebarProps {
  isOpen: boolean;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen }) => {
  const drawerWidth = 240;

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
      <Box sx={{ display: "flex", justifyContent: "flex-end", padding: 1 }}>
        {/* <IconButton>
          {isOpen ? <ChevronLeftIcon /> : <ChevronRightIcon />}
        </IconButton>       */}
        <List>
          <ListItem component={NavLink} to="/">
            <ListItemIcon>
              <HomeIcon />
            </ListItemIcon>
            {isOpen && <ListItemText primary="Home" />}
          </ListItem>
          <ListItem component={NavLink} to="/about">
            <ListItemIcon>
              <InfoIcon />
            </ListItemIcon>
            {isOpen && <ListItemText primary="About" />}
          </ListItem>
          <ListItem component={NavLink} to="/contact">
            <ListItemIcon>
              <ContactMailIcon />
            </ListItemIcon>
            {isOpen && <ListItemText primary="Contact" />}
          </ListItem>
        </List>
        <Divider />
      </Box>
    </Drawer>
  );
};

export default Sidebar;
