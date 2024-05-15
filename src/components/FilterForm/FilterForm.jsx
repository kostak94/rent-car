import {
  Box,
  Button,
  FormControl,
  InputAdornment,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import makes from "../../assets/makes.json";
import { prices } from "../../assets/prices";
import { nanoid } from "nanoid";
import { useDispatch, useSelector } from "react-redux";
import { selectFilters } from "../../redux/selectors";
import { changeFilter } from "../../redux/filters/slice";
import { useState } from "react";

const FilterForm = () => {
  const filters = useSelector(selectFilters);
  const dispatch = useDispatch();
  const [searchingValues, setSearchingValues] = useState({
    ...filters,
  });
  const onSubmitHandler = (e) => {
    e.preventDefault();
    dispatch(changeFilter(searchingValues));
  };
  return (
    <Box
      onSubmit={onSubmitHandler}
      component="form"
      sx={{
        display: "flex",
        justifyContent: "center",
        gap: "18px",
        alignItems: "center",
        mb: "40px",
      }}>
      <FormControl>
        <InputLabel id="brand">Brand</InputLabel>
        <Select
          sx={{
            borderRadius: "10px",
            backgroundColor: "#F7F7FB",
            height: "48px",
            width: "224px",
          }}
          labelId="brand"
          value={searchingValues.brand}
          onChange={(e) =>
            setSearchingValues((prev) => ({ ...prev, brand: e.target.value }))
          }
          label="brand">
          <MenuItem value="">
            <em>All brands</em>
          </MenuItem>
          {makes.map((mark) => (
            <MenuItem key={nanoid()} value={mark}>
              {mark}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <FormControl>
        <InputLabel id="price">Price</InputLabel>
        <Select
          sx={{
            borderRadius: "10px",
            backgroundColor: "#F7F7FB",
            height: "48px",
            width: "125px",
          }}
          labelId="price"
          value={searchingValues.price || ""}
          onChange={(e) =>
            setSearchingValues((prev) => ({
              ...prev,
              price: +e.target.value,
            }))
          }
          label="price">
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          {prices.map((price) => (
            <MenuItem key={price} value={price}>
              {price}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <TextField
        label="Mileage"
        sx={{
          backgroundColor: "#F7F7FB",
        }}
        value={searchingValues.mileageFrom || ""}
        onChange={(e) =>
          setSearchingValues((prev) => ({
            ...prev,
            mileageFrom: +e.target.value,
          }))
        }
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">From</InputAdornment>
          ),
        }}
      />
      <TextField
        sx={{
          backgroundColor: "#F7F7FB",
        }}
        label="Mileage"
        value={searchingValues.mileageTo || ""}
        onChange={(e) =>
          setSearchingValues((prev) => ({
            ...prev,
            mileageTo: +e.target.value,
          }))
        }
        InputProps={{
          startAdornment: <InputAdornment position="start">To</InputAdornment>,
        }}
      />
      <Button
        type="submit"
        sx={{
          borderRadius: 3,
          p: "5px 44px",
          fontFamily: "Manrope",
          textTransform: "none",
          height: "48px",
        }}
        variant="contained">
        Search
      </Button>
    </Box>
  );
};

export default FilterForm;
