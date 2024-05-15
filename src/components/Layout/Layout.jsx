import { Outlet } from "react-router";
import Navigation from "../Navigation/Navigation";
import { Container } from "@mui/material";
import { Suspense } from "react";
import Loader from "../Loader/Loader";

const Layout = () => {
  return (
    <>
      <Navigation />
      <Container sx={{ mt: 12, maxWidth: 1270 }} maxWidth="1200px">
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </Container>
    </>
  );
};

export default Layout;
