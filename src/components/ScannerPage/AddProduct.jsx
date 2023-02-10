import React from "react";
import { Formik, Form } from "formik";
import TextField from "@mui/material/TextField";
import { Box, Button, FormControlLabel } from "@mui/material";
import { useAddProductMutation } from "@/features/Product/productSlice";
import PreSubmitTable from "./PreSubmitTable";
import Checkbox from "@mui/material/Checkbox";

const AddProduct = () => {
  const [saveToDB, {}] = useAddProductMutation();
  const initialState = {
    productId: "",
    storageUnit: "",
    availableStock: 0,
    material: "",
    materialDescription: "",
    SLOC: "",
    specialStockNumber: "",
    type: "",
    storageBin: "",
    specialStock: false,
  };

  const handleSubmit = async (values, actions) => {
    console.log("Form handle Submit: ", actions);
    const response = await saveToDB(values);
    console.log("HandLe Submit reponse : ", response.data);
    if (response.status === "ok") actions.resetForm({ values: "" });
  };

  return (
    <>
      <Box sx={{ maxWidth: 800, m: "auto", mb: 6 }}>
        <h1>Add Product</h1>
        <Formik initialValues={initialState} onSubmit={handleSubmit}>
          {({ values, isSubmitting, setFieldValue }) => (
            <Form>
              {Object.keys(values).map((key) => {
                if (key === "specialStock")
                  return (
                    <FormControlLabel
                      key={key}
                      control={
                        <Checkbox
                          value={values[key]}
                          onClick={(e) => setFieldValue(key, e.target.checked)}
                        />
                      }
                      label={key}
                    />
                  );
                return (
                  <TextField
                    fullWidth
                    key={key}
                    value={values[key]}
                    onChange={(e) => setFieldValue(key, e.target.value)}
                    sx={{ mb: 1 }}
                    id="outlined-basic"
                    label={key}
                    variant="outlined"
                  />
                );
              })}

              <Button
                fullWidth
                variant="contained"
                type="submit"
                disabled={isSubmitting}
              >
                Submit
              </Button>
            </Form>
          )}
        </Formik>
      </Box>
      <PreSubmitTable />
    </>
  );
};

export default AddProduct;
