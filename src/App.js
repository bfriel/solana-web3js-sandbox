import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Box, CssBaseline, Toolbar } from "@mui/material";
import { useState } from "react";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import Intro from "./Intro";
import { DRAWER_WIDTH, EXAMPLES } from "./constants";

export default function App() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <Router>
      <Box sx={{ display: "flex" }}>
        <CssBaseline />
        <Navbar handleDrawerToggle={handleDrawerToggle} />
        <Sidebar
          mobileOpen={mobileOpen}
          handleDrawerToggle={handleDrawerToggle}
        />
        <Box
          componet="main"
          sx={{
            flexGrow: 1,
            p: 3,
            width: { sm: `calc(100% - ${DRAWER_WIDTH}px)` }
          }}
        >
          <Toolbar />
          <Routes>
            <Route path="/" element={<Intro />} />
            {EXAMPLES.map((example) => (
              <Route
                key={example.path}
                path={example.path}
                element={example.element}
              />
            ))}
          </Routes>
        </Box>
      </Box>
    </Router>
  );
}
