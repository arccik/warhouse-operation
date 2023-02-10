import AppContainer from "@/components/AppContainer/ApplicationContainer";
import AddItems from "@/components/ScannerPage/AddItems";
import { Typography } from "@mui/material";

const ItemScanner = () => {
  return (
    <AppContainer>
      <Typography variant="h1">Scan Items</Typography>
      <AddItems />
    </AppContainer>
  );
};
export default ItemScanner;
