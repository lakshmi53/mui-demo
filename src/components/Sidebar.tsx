import React from "react";
import { Drawer, List, ListItem, ListItemIcon, ListItemText, Box } from "@mui/material";
import { NavLink } from "react-router-dom";
import HomeIcon from "@mui/icons-material/Home";
import InfoIcon from "@mui/icons-material/Info";
import ContactMailIcon from "@mui/icons-material/ContactMail";

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
      <Box sx={{ mt: 8 }}>
        <List>
          {[
            { text: "Home", icon: <HomeIcon />, to: "/" },
            { text: "About", icon: <InfoIcon />, to: "/about" },
            { text: "Contact", icon: <ContactMailIcon />, to: "/contact" },
          ].map((item, index) => (
            <ListItem              
              key={index}
              component={NavLink}
              to={item.to}
              sx={({ isActive }: any) => ({
                "&.active": {
                  backgroundColor: "primary.main",
                  color: "white",
                  "& .MuiListItemIcon-root": {
                    color: "white",
                  },
                },
              })}
            >
              <ListItemIcon>{item.icon}</ListItemIcon>
              {isOpen && <ListItemText primary={item.text} />}
            </ListItem>
          ))}
        </List>
      </Box>
    </Drawer>
  );
};

export default Sidebar;
