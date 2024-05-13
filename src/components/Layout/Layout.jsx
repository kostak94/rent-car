import { Outlet } from "react-router";
import Navigation from "../Navigation/Navigation";
import { Container } from "@mui/material";

const Layout = () => {
  return (
    <>
      <Navigation />
      <Container sx={{ mt: 12, maxWidth: 1270 }} maxWidth="1200px">
        <Outlet />
      </Container>
    </>
  );
};

export default Layout;
