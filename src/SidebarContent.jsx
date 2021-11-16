import { List, ListItem, ListItemText } from "@mui/material";
import { EXAMPLES } from "./constants";
import { Link, useLocation } from "react-router-dom";

export default function SidebarContent() {
  const location = useLocation();
  return (
    <List>
      {EXAMPLES.map((example) => {
        const isActive = location.pathname.split("/")[1] === example.path;
        return (
          <ListItem
            button
            component={Link}
            to={example.path}
            key={example.path}
            sx={{ background: isActive ? "blue" : "inherit" }}
          >
            <ListItemText primary={example.title} />
          </ListItem>
        );
      })}
    </List>
  );
}
