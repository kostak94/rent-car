import { useDispatch, useSelector } from "react-redux";
import { selectCars } from "../../redux/Cars/selectors";
import { useEffect } from "react";
import { getCarsThunk } from "../../redux/Cars/operations";
import { Grid } from "@mui/material";
import CarListItem from "../CarListItem/CarListItem";

const CarList = () => {
  const cars = useSelector(selectCars);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCarsThunk());
  }, [dispatch]);
  return (
    <Grid container spacing={3}>
      {cars.map((car) => (
        <CarListItem key={car.id} car={car} />
      ))}
    </Grid>
  );
};

export default CarList;
