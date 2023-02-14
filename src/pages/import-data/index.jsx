import AppContainer from "@/components/AppContainer/ApplicationContainer";
import UploadStepper from "@/components/ImportDataPage/UploadStepper";
import Typography from "@mui/material/Typography";

const ImportDataPage = () => {
  return (
    <AppContainer>
      <Typography variant="h1" component="h2">
        Import Data
      </Typography>

      <UploadStepper />
    </AppContainer>
  );
};
export default ImportDataPage;
