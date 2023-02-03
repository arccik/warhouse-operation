import React from "react";
import { useFormik } from "formik";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { Container, Box } from "@mui/material";
import validationSchema from "./validationSchema";

const MainForm = () => {
  const formElements = [
    { label: "Name", value: "name" },
    { label: "Storage Location", value: "storageLocation" },
    { label: "Quantity", value: "quantity" },
    { label: "Description", value: "description" },
    { label: "Price", value: "price" },
    { label: "Product id", value: "description" },
  ];

  const formik = useFormik({
    initialValues: {
      name: Math.random() * 10,
      storageLocation: "",
      quantity: 0,
      description: "",
    },
    validationSchema,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <Container maxWidth="sm">
      <Box
        component="form"
        sx={{
          "& .MuiTextField-root": { m: 1 },
        }}
        noValidate
        autoComplete="off"
      >
        <form onSubmit={formik.handleSubmit}>
          {formElements.map(({ label, value }) => (
            <TextField
              key={label}
              variant="standard"
              fullWidth
              id={value}
              name={value}
              label={label}
              value={formik.values[value]}
              onChange={formik.handleChange}
              error={formik.touched[value] && Boolean(formik.errors[value])}
              helperText={formik.touched[value] && formik.errors[value]}
            />
          ))}

          <Button color="primary" variant="contained" fullWidth type="submit">
            Submit
          </Button>
        </form>
      </Box>
    </Container>
  );
};

export default MainForm;
