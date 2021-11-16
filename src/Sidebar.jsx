import { Box, Drawer } from "@mui/material";
import { DRAWER_WIDTH } from "./constants";
import SidebarContent from "./SidebarContent";

export default function Sidebar({ mobileOpen, handleDrawerToggle }) {
  return (
    <Box
      component="nav"
      sx={{ width: { sm: DRAWER_WIDTH }, flexShrink: { sm: 0 } }}
    >
      <Drawer
        variant="temporary"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true
        }}
        sx={{
          display: { xs: "block", sm: "none" },
          "& .MuiDrawer-paper": {
            boxSizing: "border-box",
            width: DRAWER_WIDTH
          }
        }}
      >
        <SidebarContent />
      </Drawer>
      <Drawer
        variant="permanent"
        sx={{
          display: { xs: "none", sm: "block" },
          "& .MuiDrawer-paper": {
            boxSizing: "border-box",
            width: DRAWER_WIDTH
          }
        }}
        open
      >
        <SidebarContent />
      </Drawer>
    </Box>
  );
}
