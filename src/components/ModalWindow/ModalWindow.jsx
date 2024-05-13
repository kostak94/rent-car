import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Modal,
  Icon,
  Typography,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { nanoid } from "nanoid";
import { formatter } from "../../helpers/formatMileage";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 540,
  bgcolor: "background.paper",
  border: "none",
  borderRadius: "24px",
  boxShadow: 24,
  p: 5,
};
const textStyles = {
  fontSize: "12px",
  color: " #121417",
  opacity: "50%",
  mt: "8px",
};
const conditionStyles = {
  mr: 1,
  p: "7px 14px",
  backgroundColor: "#f9f9f9",
  fontSize: "12px",
  borderRadius: "20px",
};

const ModalWindow = ({ car, open, onClose }) => {
  const rentalConditions = car.rentalConditions.split("\n");
  const updateAddress = car.address.split(",");
  const country = updateAddress[2].trim();
  const city = updateAddress[1].trim();
  return (
    <Modal open={open} onClose={onClose}>
      <Card sx={style}>
        <Icon
          onClick={onClose}
          sx={{
            position: "absolute",
            right: "12px",
            top: "12px",
            "&:hover": { scale: "1.1" },
          }}>
          <CloseIcon />
        </Icon>
        <CardMedia
          sx={{ height: 268, borderRadius: 4 }}
          image={car.img}
          component="img"
        />
        <CardContent
          sx={{
            p: 0,
            mt: "14px",
            display: "flex",
            flexDirection: "column",
          }}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              fontSize: "18px",
            }}>
            <Typography
              variant="p"
              component="span"
              sx={{ flexGrow: 1, fontWeight: 500 }}>
              {car.make} {car.model}, {car.year}
            </Typography>
          </Box>
          <Typography sx={textStyles} variant="p" component="span">
            {city} | {country} | Id: {car.id} | Year: {car.year} | Type:{" "}
            {car.type}
          </Typography>
          <Typography sx={textStyles} variant="p" component="span">
            Fuel Consumption: {car.fuelConsumption} | Engine Size:{" "}
            {car.engineSize}
          </Typography>
          <Typography
            variant="p"
            component="p"
            sx={{
              mt: "14px",
              mb: "24px",
              fontSize: "14px",
              fontWeight: 400,
            }}>
            {car.description}
          </Typography>
          <Typography
            variant="p"
            component="p"
            sx={{
              fontSize: "14px",
              fontWeight: 400,
            }}>
            Accessories and functionalities:
          </Typography>
          <Typography sx={textStyles} variant="p" component="span">
            {car.accessories[0]} | {car.accessories[1]} | {car.accessories[2]}
          </Typography>
          <Typography sx={textStyles} variant="p" component="span">
            {car.functionalities[0]} | {car.functionalities[1]} |{" "}
            {car.functionalities[2]}
          </Typography>
          <Typography
            variant="p"
            component="p"
            sx={{
              fontSize: "14px",
              fontWeight: 400,
              mt: "24px",
              mb: "8px",
            }}>
            Rental conditions:
          </Typography>
          <Box>
            {rentalConditions.map((condition) => (
              <Typography
                sx={conditionStyles}
                variant="p"
                component="span"
                key={nanoid()}>
                {condition}
              </Typography>
            ))}
          </Box>
          <Box>
            <Typography sx={conditionStyles} variant="p" component="span">
              Mileage: {formatter.format(car.mileage)}
            </Typography>
            <Typography sx={conditionStyles} variant="p" component="span">
              Price: {car.rentalPrice}
            </Typography>
          </Box>
        </CardContent>
        <CardActions sx={{ p: 0, mt: 3 }}>
          <Button
            sx={{
              borderRadius: 3,
              p: "12px 50px",
              fontFamily: "Manrope",
              textTransform: "none",
            }}
            href="tel:+380730000000"
            variant="contained">
            Rental car
          </Button>
        </CardActions>
      </Card>
    </Modal>
  );
};

export default ModalWindow;
