import PalletScanner from "@/components/PalletScanner/PalletScanner";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import AppContainer from "@/components/AppContainer/ApplicationContainer";

const OrdersPage = () => {
  return (
    <AppContainer>
      <Box sx={{ m: "auto" }}>
        <Typography variant="h1" component="h2" align="center">
          Pallet Scanner
        </Typography>
        <PalletScanner />
      </Box>
    </AppContainer>
  );
};

export default OrdersPage;
