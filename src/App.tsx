import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ThemeProvider, createTheme, CssBaseline, Box, useMediaQuery } from "@mui/material";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Profile from "./pages/Profile";
import Settings from "./pages/Settings";

const App: React.FC = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(true); // Sidebar visibility state
  const [darkMode, setDarkMode] = useState(false); // Dark mode state

  // Create the Material-UI theme
  const theme = createTheme({
    palette: {
      mode: darkMode ? "dark" : "light",
      primary: { main: "#4A90E2" },
      secondary: { main: "#FF5722" },
    },
  });

  // Media query to check for small screens
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));

  // Automatically collapse the sidebar on smaller screens
  React.useEffect(() => {
    setSidebarOpen(!isSmallScreen);
  }, [isSmallScreen]);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Box sx={{ display: "flex", height: "100vh" }}>
          {/* Sidebar */}
          <Sidebar isOpen={isSidebarOpen} />
          
          {/* Main Content */}
          <Box sx={{ flexGrow: 1 }}>
            <Header
              toggleSidebar={() => setSidebarOpen(!isSidebarOpen)} // Sidebar toggle
              setDarkMode={setDarkMode} // Dark mode toggle
              darkMode={darkMode}
            />
            <Box component="main" sx={{ p: 3, mt: 8 }}>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="/settings" element={<Settings />} />
              </Routes>
            </Box>
          </Box>
        </Box>
      </Router>
    </ThemeProvider>
  );
};

export default App;
