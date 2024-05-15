import { useSelector } from "react-redux";
import { selectFavorites } from "../../redux/selectors";
import { Grid } from "@mui/material";
import CarListItem from "../CarListItem/CarListItem";

const FavoritesList = () => {
  const favorites = useSelector(selectFavorites);

  return (
    <>
      {favorites.length ? (
        <Grid container spacing={3}>
          {favorites?.map((car) => (
            <CarListItem key={car.id} car={car} />
          ))}
        </Grid>
      ) : (
        <h1 style={{ textAlign: "center" }}>
          Nothing has been added to favorites yet
        </h1>
      )}
    </>
  );
};

export default FavoritesList;
