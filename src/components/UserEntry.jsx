import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { Formik } from "formik";

export default function FullWidthTextField() {
  const handleSubmit = async (data, { setSubmitting }) => {
    const response = await fetch("/api/addentry", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }).then((res) => res.json());
    console.log(response);
    if (response) setSubmitting(false);
  };
  return (
    <Box
      sx={{
        width: 500,
        maxWidth: "100%",
      }}
    >
      <Formik
        initialValues={{
          storageUnit: "",
          materialCode: "",
          quantity: "",
          storageLocation: "",
        }}
        onSubmit={handleSubmit}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting,
          /* and other goodies */
        }) => (
          <form onSubmit={handleSubmit}>
            <TextField
              type="text"
              name="storageUnit"
              label="storageUnit"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.storageUnit}
              fullWidth
            />
            {errors.storageUnit && touched.storageUnit && errors.storageUnit}
            <TextField
              type="text"
              name="materialCode"
              label="materialCode"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.materialCode}
              fullWidth
            />
            {errors.materialCode && touched.materialCode && errors.materialCode}

            <TextField
              type="text"
              name="quantity"
              label="quantity"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.quantity}
              fullWidth
            />
            {errors.quantity && touched.quantity && errors.quantity}

            <TextField
              type="text"
              name="storageLocation"
              label="storageLocation"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.storageLocation}
              fullWidth
            />
            {errors.storageLocation &&
              touched.storageLocation &&
              errors.storageLocation}
            <Button type="submit" disabled={isSubmitting}>
              Submit
            </Button>
          </form>
        )}
      </Formik>
    </Box>
  );
}
