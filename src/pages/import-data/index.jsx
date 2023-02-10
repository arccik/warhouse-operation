import AppContainer from "@/components/AppContainer/ApplicationContainer";
import Typography from "@mui/material/Typography";
import Upload from "../../components/ImportDataPage/Upload";

const ImportDataPage = () => {
  return (
    <AppContainer>
      <Typography variant="h1" component="h2">
        Import Data
      </Typography>

      <Upload />
    </AppContainer>
  );
};
export default ImportDataPage;
