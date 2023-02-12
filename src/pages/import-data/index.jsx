import AppContainer from "@/components/AppContainer/ApplicationContainer";
import UploadMapQuery from "@/components/ImportDataPage/UploadMapQuery";
import Typography from "@mui/material/Typography";
import Upload from "../../components/ImportDataPage/Upload";

const ImportDataPage = () => {
  return (
    <AppContainer>
      <Typography variant="h1" component="h2">
        Import Data
      </Typography>

      <Upload />

      <UploadMapQuery />
    </AppContainer>
  );
};
export default ImportDataPage;
