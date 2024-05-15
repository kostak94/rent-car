import { Box, Button } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { selectPage } from "../../redux/selectors";
import { getCarsThunk } from "../../redux/Cars/operations";
import { carsActions } from "../../redux/Cars/slice";

const LoadMore = () => {
  const dispatch = useDispatch();
  const page = useSelector(selectPage);
  const onClickHandler = async () => {
    await dispatch(getCarsThunk(page + 1));
    dispatch(carsActions.setPage(page + 1));
  };
  return (
    <Box sx={{ display: "flex", justifyContent: "center" }}>
      <Button
        onClick={onClickHandler}
        sx={{
          fontFamily: "Manrope",
          textTransform: "none",
          textDecoration: "underline",
          fontSize: "16px",
          fontWeight: 500,
        }}>
        Load more
      </Button>
    </Box>
  );
};

export default LoadMore;
