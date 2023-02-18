import AppContainer from "@/components/AppContainer/ApplicationContainer";
import AddItems from "@/components/ScannerPage/AddItem/AddItems";
import RecentScannedItems from "@/components/ScannerPage/AddItem/RecentScannedItems";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { useSubmitDataMutation } from "@/features/MainTable/mainTableSlice";

const ItemScanner = () => {
  const [submitData, actions] = useSubmitDataMutation();
  const handleSubmit = async () => {
    const response = await submitData();
    console.log("Submitted: ", response);
  };

  return (
    <AppContainer>
      <Typography variant="h1">Scan Items</Typography>
      <AddItems />
      <RecentScannedItems />
      <Button
        onClick={handleSubmit}
        color="primary"
        variant="contained"
        fullWidth
      >
        Submit
      </Button>
    </AppContainer>
  );
};
export default ItemScanner;
