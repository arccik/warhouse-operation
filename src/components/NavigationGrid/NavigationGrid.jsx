import Container from "@mui/material/Container";
import Fab from "@mui/material/Fab";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import { experimentalStyled as styled } from "@mui/material/styles";
import AddIcon from "@mui/icons-material/Add";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: "center",
  color: theme.palette.text.secondary,
  //   "&:hover": {
  //     backgroundColor: "#F02027",
  //   },
}));

const NavigationGrid = () => {
  return (
    <Box sx={{ flexGrow: 1, m: 10 }}>
      <Grid
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
      >
        <Grid item xs={2} sm={4} md={4}>
          <Item>
            <Fab
              variant="extended"
              size="large"
              color="primary"
              aria-label="add"
            >
              <AddIcon /> Item Receipt
            </Fab>
          </Item>
          <Item>
            <Fab
              variant="extended"
              size="large"
              color="primary"
              aria-label="add"
            >
              <AddIcon /> Item Receipt
            </Fab>
          </Item>
          <Item>
            <Fab
              variant="extended"
              size="large"
              color="primary"
              aria-label="add"
            >
              <AddIcon /> Item Receipt
            </Fab>
          </Item>
          <Item>
            {/* <Fab
              variant="extended"
              size="large"
              color="primary"
              aria-label="add"
            > */}
            <AddIcon /> Item Receipt
            {/* </Fab> */}
          </Item>
        </Grid>
      </Grid>
    </Box>
  );
};

export default NavigationGrid;
