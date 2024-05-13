import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  Icon,
  Typography,
} from "@mui/material";
import FavoriteIcon from "@mui/icons-material/FavoriteBorder";
import { useState } from "react";
import ModalWindow from "../ModalWindow/ModalWindow";

const CarListItem = ({ car }) => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const updateAddress = car.address.split(",");
  const country = updateAddress[2].trim();
  const city = updateAddress[1].trim();
  const truncatedAccessories = car.accessories.map((el) =>
    el.length > 20 ? el.substring(0, 20) : el
  );
  const accessories = truncatedAccessories[0];

  return (
    <>
      <Grid item sx={{ mb: 3 }}>
        <Card
          sx={{
            maxWidth: 274,
            position: "relative",
            boxShadow: "none",
          }}>
          <Icon
            sx={{
              color: "white",
              position: "absolute",
              right: "10px",
              top: "10px",
              "&:hover": { scale: "1.1" },
            }}>
            <FavoriteIcon />
          </Icon>
          <CardMedia
            sx={{ height: 268, borderRadius: 4 }}
            image={car.img}
            component="img"
          />
          <CardContent
            sx={{
              p: 0,
              mt: "16px",
              display: "flex",
              flexDirection: "column",
            }}>
            <Box sx={{ display: "flex", justifyContent: "space-between" }}>
              <Typography
                variant="p"
                component="span"
                sx={{ flexGrow: 1, fontWeight: 500 }}>
                {car.make} {car.model}, {car.year}
              </Typography>
              <Typography sx={{ fontWeight: 500 }} variant="p" component="span">
                {car.rentalPrice}
              </Typography>
            </Box>
            <Typography
              sx={{
                fontSize: "12px",
                color: " #121417",
                opacity: "50%",
                letterSpacing: "0.33",
                mt: "8px",
              }}
              variant="p"
              component="span">
              {city} | {country} | {car.rentalCompany}
            </Typography>
            <Typography
              sx={{
                fontSize: "12px",
                color: " #121417",
                opacity: "50%",
                letterSpacing: "0.33",
                mt: "5px",
              }}
              variant="p"
              component="span">
              {car.type} | {car.model} | {car.mileage} | {accessories}
            </Typography>
          </CardContent>
          <CardActions sx={{ p: 0, mt: 3 }}>
            <Button
              sx={{
                flexGrow: 1,
                borderRadius: 3,
                fontFamily: "Manrope",
                textTransform: "none",
              }}
              variant="contained"
              onClick={handleOpen}>
              Learn more...
            </Button>
          </CardActions>
        </Card>
      </Grid>
      {open && <ModalWindow car={car} open={open} onClose={handleClose} />}
    </>
  );
};

export default CarListItem;
