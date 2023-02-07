import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import PhotoCamera from "@mui/icons-material/PhotoCamera";
import Stack from "@mui/material/Stack";

import AppContainer from "../../components/AppContainer/ApplicationContainer";
import DataGridTable from "../../components/DataGridTable/DataGridTable";
import { getSession } from "next-auth/react";

const CheckIn = () => {
  return (
    <AppContainer>
      <Box>
        <Typography variant="h1" component="h2">
          Check in Goods
        </Typography>
        {/* <Stack direction="row" alignItems="center" spacing={2} sx={{ mb: 10 }}>
          <Button variant="contained" component="label">
            Add Records
          </Button>
          <IconButton
            color="primary"
            aria-label="upload picture"
            component="label"
          >
            <PhotoCamera />
          </IconButton>
          <Button variant="contained" component="label">
            Check in
          </Button>
          <IconButton
            color="primary"
            aria-label="upload picture"
            component="label"
          >
            <PhotoCamera />
          </IconButton>
          <Button variant="contained" component="label">
            Delete
          </Button>
        </Stack> */}
      </Box>
      <DataGridTable />
    </AppContainer>
  );
};

export async function getServerSideProps(context) {
  const session = await getSession(context);

  if (!session) {
    return {
      redirect: {
        destination: "/auth/signin",
        permanent: false,
      },
    };
  }
  return { props: { session } };
}

export default CheckIn;
