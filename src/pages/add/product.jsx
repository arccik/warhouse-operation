import AppContainer from "@/components/AppContainer/ApplicationContainer"
import AddProduct from "@/components/ScannerPage/AddProduct/AddProduct";
import Typography from "@mui/material/Typography";
const AddProductPage = () => {
  return (
    <AppContainer>
      <Typography variant="h1">Add Product</Typography>
      <AddProduct />
    </AppContainer>
  );
};

export default AddProductPage
