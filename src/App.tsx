import React, { useState } from "react";
import { Box } from "@mui/material";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";

const App: React.FC = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  return (
    <Box sx={{ display: "flex" }}>
      <Sidebar isOpen={isSidebarOpen} />
      <Box sx={{ flexGrow: 1 }}>
        <Header toggleSidebar={toggleSidebar} />
        <Box component="main" p={2}>
          <h1>Welcome to the App</h1>
          <p>This is the main content area.</p>
        </Box>
      </Box>
    </Box>
  );
};

export default App;
