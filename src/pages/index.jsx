import Loader from "@/components/resources/Loader/Loader";
import { useSession } from "next-auth/react";
import Router from "next/router";
import { useEffect } from "react";
import AppContainer from "@/components/AppContainer/ApplicationContainer";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";

const HomePage = () => {
  const { status, data } = useSession();
  useEffect(() => {
    if (!(status === "authenticated")) Router.replace("/auth/signin");
  }, [status]);
  if (status === "loading") return <Loader />;
  console.log("Loading... ", status);
  return (
    <AppContainer>
      <h1>HEllO {data.user.email.split("@")[0].toUpperCase()}</h1>
      <Box
        component="span"
        sx={{
          m: 3,
          p: 4,
          // border: "1px solid grey",
          borderRadius: 20,
          boxShadow:
            " rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px;",
          '&:hover': {
            boxShadow:
            " rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 10px 0px 10px 0px;"
          }
        }}
      >
        <Button>Save</Button>
      </Box>
    </AppContainer>
  );
};

export default HomePage;
