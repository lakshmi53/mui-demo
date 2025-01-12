import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ThemeProvider, createTheme, CssBaseline, Box, useMediaQuery } from "@mui/material";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Profile from "./pages/Profile";
import Account from "./pages/Account";

const App: React.FC = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(true);
  const [darkMode, setDarkMode] = useState(false);

  const theme = createTheme({
    palette: {
      mode: darkMode ? "dark" : "light",
      primary: { main: "#003366" },
      secondary: { main: "#0088CC" },
    },
  });

  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));

  React.useEffect(() => {
    setSidebarOpen(!isSmallScreen);
  }, [isSmallScreen]);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Box sx={{ display: "flex", height: "100vh" }}>
          <Sidebar isOpen={isSidebarOpen} />
          <Box sx={{ flexGrow: 1 }}>
            <Header
              toggleSidebar={() => setSidebarOpen(!isSidebarOpen)}
              setDarkMode={setDarkMode}
              darkMode={darkMode}
            />
            <Box component="main" sx={{ p: 3, mt: 8 }}>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/settings/profile" element={<Profile />} />
                <Route path="/settings/account" element={<Account />} />
              </Routes>
            </Box>
          </Box>
        </Box>
      </Router>
    </ThemeProvider>
  );
};

export default App;
