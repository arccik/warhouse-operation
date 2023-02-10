import Loader from "@/components/resources/Loader/Loader";
import { useSession } from "next-auth/react";
import Router from "next/router";
import { useEffect } from "react";
import AppContainer from "@/components/AppContainer/ApplicationContainer";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import CircleChart from "@/components/Charts/CircleChart";
import { Typography } from "@mui/material";
import { LineChart } from "@/components/Charts/LineChart";

import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const HomePage = () => {
  const { status, data } = useSession();
  useEffect(() => {
    if (!(status === "authenticated")) Router.replace("/auth/signin");
  }, [status]);
  if (status === "loading") return <Loader />;

  return (
    <AppContainer>
      <Typography variant="h3" component="h2">
        Inventory Analytics
      </Typography>
      <Grid container spacing={4} mt={3}>
        <Grid item xs={12} md={4}>
          <Item>
            <CircleChart />
          </Item>
        </Grid>
        <Grid item xs={12} md={4}>
          <Item>
            <LineChart />
          </Item>
        </Grid>
        <Grid item xs={12} md={4}>
          <Item>
            <CircleChart />
          </Item>
        </Grid>
      </Grid>
    </AppContainer>
  );
};

export default HomePage;
