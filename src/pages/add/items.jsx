import AppContainer from "@/components/AppContainer/ApplicationContainer";
import AddItems from "@/components/ScannerPage/AddItems";
import RecentScannedItems from "@/components/ScannerPage/RecentScannedItems";
import { Typography } from "@mui/material";

const ItemScanner = () => {
  return (
    <AppContainer>
      <Typography variant="h1">Scan Items</Typography>
      <AddItems />
      <RecentScannedItems />
    </AppContainer>
  );
};
export default ItemScanner;
