import { NavLink } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { Badge, MenuItem } from "@mui/material";

const Navigation = () => {
  return (
    <header>
      <AppBar component="nav">
        <Toolbar sx={{ p: "0 40px" }}>
          <Typography sx={{ flexGrow: 1 }} variant="h4" component="span">
            Rent Car
          </Typography>
          <MenuItem>
            <Typography variant="h5">
              <NavLink
                style={{ color: "white", textDecoration: "none" }}
                to="/">
                Home
              </NavLink>
            </Typography>
          </MenuItem>
          <MenuItem>
            <Typography variant="h5">
              <NavLink
                style={{ color: "white", textDecoration: "none" }}
                to="catalog">
                Catalog
              </NavLink>
            </Typography>
          </MenuItem>
          <MenuItem>
            <Typography variant="h5">
              <Badge badgeContent={1} color="success">
                <NavLink
                  style={{ color: "white", textDecoration: "none" }}
                  to="favorites">
                  Favorites
                </NavLink>
              </Badge>
            </Typography>
          </MenuItem>
        </Toolbar>
      </AppBar>
    </header>
  );
};

export default Navigation;
