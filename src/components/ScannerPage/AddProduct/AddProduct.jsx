import React from "react";
import { Formik, Form } from "formik";
import { Box, Button, FormGroup } from "@mui/material";
import { useAddProductMutation } from "@/features/Product/productSlice";
import PreSubmitTable from "./PreSubmitTable";
import ProductFields from "./ProductFields";
import validation from "./Validation";
import { useSession } from "next-auth/react";

const AddProduct = () => {
  const { data } = useSession();
  const [saveToDB, {}] = useAddProductMutation();
  const initialState = {
    productId: "",
    "Storage Unit": "",
    "Available Stock": "",
    Material: "",
    "Material Description": "",
    SLOC: "",
    Type: "",
    StorageBin: "",
    "Special Stock": false,
    "Special Stock Number": "",
  };

  const handleSubmit = async (values, actions) => {
    const response = await saveToDB({
      ...values,
      scannedBy: data.user.id,
    });
    console.log("HandLe Submit reponse : ", response);
    if (response?.data?.status === "ok") actions.resetForm({ values: "" });
  };

  return (
    <>
      <Box sx={{ maxWidth: 800, m: "auto", mb: 6 }}>
        <Formik
          initialValues={initialState}
          onSubmit={handleSubmit}
          validationSchema={validation}
        >
          {({ values, isSubmitting, setFieldValue, touched, errors }) => (
            <Form>
              <FormGroup>
                <ProductFields
                  values={values}
                  setValue={setFieldValue}
                  touched={touched}
                  errors={errors}
                />
                <Button
                  fullWidth
                  variant="contained"
                  type="submit"
                  disabled={isSubmitting}
                >
                  Submit
                </Button>
              </FormGroup>
            </Form>
          )}
        </Formik>
      </Box>
      <PreSubmitTable />
    </>
  );
};

export default AddProduct;
