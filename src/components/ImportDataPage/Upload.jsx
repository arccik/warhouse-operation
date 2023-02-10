import Loader from "@/components/resources/Loader/Loader";
import { useAddManyProductsMutation } from "@/features/Product/productSlice";
import { PhotoCamera } from "@mui/icons-material";
import { Button, Typography, Stack, IconButton, Alert } from "@mui/material";
import { useState } from "react";
import * as xlsx from "xlsx/xlsx.mjs";

const Upload = () => {
  const [saveToDatabase, actions] = useAddManyProductsMutation();
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState(null);
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

        const jsonData = xlsx.utils.sheet_to_json(
          workbook.Sheets["LX02_Query"]
        );
        setSheets(workbook.Sheets);
        setData(jsonData.slice(0, 20));
        // for (let i = 0; i < jsonData.length; i += 100) {
        //   setTimeout(() => {
        //     const response = saveToDatabase(jsonData.slice(i, i + 100));
        //   }, 1000);
        // }
        setLoading(false);
      };
      reader.readAsArrayBuffer(e.target.files[0]);
    }
  }

  const handleDataUpload = (sheet) => {
    setLoading(true);
    const jsonData = xlsx.utils.sheet_to_json(sheets[sheet]);
    console.log("jsonData ", jsonData);
    // for (let i = 0; i < jsonData.length; i += 100) {
    //   setTimeout(() => {
    //     const response = saveToDatabase(jsonData.slice(i, i + 100));
    //   }, 1000);
    // }
    setCompleted(true);
    setLoading(false);
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
              setData(null);
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
            <h3>Upload File: </h3>
            <Button variant="contained" component="label">
              Upload Excel File
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
export default Upload;