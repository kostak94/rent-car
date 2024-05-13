import { useDispatch, useSelector } from "react-redux";
import { getCarsThunk } from "../../redux/Cars/operations";
import { selectCars } from "../../redux/Cars/selectors";
import { useEffect } from "react";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { Button, Toolbar } from "@mui/material";
import { NavLink } from "react-router-dom";

const HomePage = () => {
  return (
    <Box component="main">
      <Typography variant="h5" component="p">
        The &quot;Rent Car&quot; application offers a streamlined solution for
        renting vehicles tailored to individual and business needs. With an
        intuitive interface, users can effortlessly browse through a wide range
        of cars, vans, SUVs, and trucks, making reservations with ease. Advanced
        search and filter options expedite the process, while secure payment
        processing ensures peace of mind. Whether for short-term personal use or
        long-term business requirements, &quot;Rent Car&quot; simplifies the
        rental experience, providing convenience at every step.
      </Typography>
      <Box component="div" sx={{ textAlign: "center", mt: 5 }}>
        <Button variant="outlined">
          <NavLink
            style={{ color: "inherit", textDecoration: "none" }}
            to="catalog">
            Open Catalog
          </NavLink>
        </Button>
      </Box>
    </Box>
  );
};

export default HomePage;
