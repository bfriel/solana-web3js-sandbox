import { AppBar, IconButton, Toolbar, Typography } from "@mui/material";
import { DRAWER_WIDTH } from "./constants";
import MenuIcon from "@mui/icons-material/Menu";

export default function Navbar({ handleDrawerToggle }) {
  return (
    <AppBar
      position="fixed"
      sx={{
        width: { sm: `calc(100% - ${DRAWER_WIDTH}px)` },
        ml: { sm: `${DRAWER_WIDTH}px` }
      }}
    >
      <Toolbar>
        <IconButton
          color="inherit"
          edge="start"
          onClick={handleDrawerToggle}
          sx={{ mr: 2, display: { sm: "none" } }}
        >
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" noWrap component="div">
          Solana Web3.js Sandbox
        </Typography>
      </Toolbar>
    </AppBar>
  );
}
