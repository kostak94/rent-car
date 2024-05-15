import { NavLink } from "react-router-dom";
import clsx from "clsx";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { Badge, MenuItem } from "@mui/material";
import { useSelector } from "react-redux";
import { selectFavorites } from "../../redux/selectors";

const Navigation = () => {
  const favorites = useSelector(selectFavorites);
  const activeStyleLink = ({ isActive }) => {
    return clsx(isActive && "active");
  };
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
                className={activeStyleLink}
                style={{ color: "lightgrey", textDecoration: "none" }}
                to="/">
                Home
              </NavLink>
            </Typography>
          </MenuItem>
          <MenuItem>
            <Typography variant="h5">
              <NavLink
                className={activeStyleLink}
                style={{ color: "lightgrey", textDecoration: "none" }}
                to="catalog">
                Catalog
              </NavLink>
            </Typography>
          </MenuItem>
          <MenuItem>
            <Typography variant="h5">
              <Badge badgeContent={favorites.length} color="success">
                <NavLink
                  className={activeStyleLink}
                  style={{ color: "lightgrey", textDecoration: "none" }}
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
