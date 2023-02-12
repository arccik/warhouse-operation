import Loader from "@/components/resources/Loader/Loader";
import { useAddManyMapProductsMutation } from "@/features/Product/mapProductSlice";
import { Button, Typography, Stack, Alert } from "@mui/material";
import { useState } from "react";
import * as xlsx from "xlsx/xlsx.mjs";

const UploadMapQuery = () => {
  const [addMapProductsToDB, actions] = useAddManyMapProductsMutation();
  const [loading, setLoading] = useState(false);
  const [sheets, setSheets] = useState("");
  const [completed, setCompleted] = useState(false);

  function handleFile(e) {
    e.preventDefault();
    if (e.target.files) {
      setLoading(true);
      const reader = new FileReader();

      reader.onload = (e) => {
        const data = e.target.result;
        const workbook = xlsx.read(data, { type: "array" });
        setSheets(workbook.Sheets);
        setLoading(false);
      };
      reader.readAsArrayBuffer(e.target.files[0]);
    }
  }

  const handleDataUpload = (sheet) => {
    setLoading(true);
    const jsonData = xlsx.utils.sheet_to_json(sheets[sheet]);
    console.log("jsonData ", jsonData);
    for (let i = 0; i < jsonData.length; i += 100) {
      setTimeout(() => {
        const response = addMapProductsToDB(jsonData.slice(i, i + 100));
        console.log("AddIng map product RESPONSE: ", response);
      }, 1000);
    }
    setLoading(false);
    setCompleted(true);
  };
  if (loading) return <Loader />;
  if (completed)
    return (
      <Alert severity="success">
        <Typography variant="h3">Data Added to Database</Typography>
      </Alert>
    );
  return (
    <form>
      {sheets ? (
        <>
          <Typography variant="h4" m={4}>
            Click on spreadsheet you want to import
          </Typography>
          {Object.keys(sheets).map((sheet) => (
            <Button
              key={sheet}
              variant="contained"
              onClick={() => handleDataUpload(sheet)}
            >
              {sheet}
            </Button>
          ))}
          <Button
            onClick={() => {
              setSheets(null);
            }}
            sx={{ position: "absolute", right: 0 }}
            color="error"
          >
            Cancel
          </Button>
        </>
      ) : (
        <>
          <Stack direction="row" alignItems="center" spacing={2}>
            <h3>Upload Map Product File (MAP_Query) </h3>
            <Button variant="contained" component="label">
              Upload
              <input
                hidden
                accept="application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
                type="file"
                onChange={handleFile}
              />
            </Button>
          </Stack>
        </>
      )}
    </form>
  );
};
export default UploadMapQuery;
