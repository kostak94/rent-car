import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getCarsThunk } from "../../redux/Cars/operations";
import { Grid } from "@mui/material";
import CarListItem from "../CarListItem/CarListItem";
import {
  selectFilteredCars,
  selectFilters,
  selectIsAllFetched,
  selectIsError,
  selectIsInitialized,
  selectIsLoading,
} from "../../redux/selectors";
import LoadMore from "../LoadMore/LoadMore";
import Loader from "../Loader/Loader";

const CarList = () => {
  const cars = useSelector(selectFilteredCars);
  const isInitialized = useSelector(selectIsInitialized);
  const filters = useSelector(selectFilters);
  const isAllFetched = useSelector(selectIsAllFetched);
  const loading = useSelector(selectIsLoading);
  const error = useSelector(selectIsError);
  const dispatch = useDispatch();
  useEffect(() => {
    if (isInitialized) return;
    dispatch(getCarsThunk(1));
  }, [dispatch, isInitialized]);
  return (
    <>
      {loading && <Loader />}
      {!loading && cars.length === 0 && !error && (
        <h1 style={{ textAlign: "center" }}>
          Nothing was found by search query
        </h1>
      )}
      {error && !loading && (
        <h1 style={{ textAlign: "center" }}>Something went wrong...</h1>
      )}
      {cars?.length > 0 && (
        <Grid container spacing={3}>
          {cars?.map((car) => (
            <CarListItem key={car.id} car={car} />
          ))}
        </Grid>
      )}
      {!isAllFetched &&
        cars.length !== 0 &&
        Object.values(filters).filter(Boolean).length === 0 && <LoadMore />}
    </>
  );
};

export default CarList;
