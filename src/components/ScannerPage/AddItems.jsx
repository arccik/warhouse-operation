import React from "react";
import { useFormik } from "formik";
import * as yup from "yup";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormGroup from "@mui/material/FormGroup";
import { useSnackbar } from "notistack";
import { useSession } from "next-auth/react";

import { useAddUserMutation } from "@/features/User/userSlice";
import { useAddItemMutation } from "@/features/Item/itemSlice";

const validationSchema = yup.object({
  stockLocation: yup
    .string("Scan the rack or shell barcode")
    .required("Stock Location is required"),
  storageUnit: yup
    .string("Scan box or tray barcode where items are stored")
    .required("Storage Unit is required"),
  specialStock: yup.boolean("Tick if this is a specail stock"),
  specialStoreNumber: yup.string(
    "If this stock from external supplier scan barcode"
  ),
  quantity: yup
    .number("Enter quantity of the items")
    .required("Role is required"),
});

const AddItems = () => {
  const [saveItemToDB, ...rest] = useAddItemMutation();
  const { status, data } = useSession();
  const { enqueueSnackbar } = useSnackbar();
  const formik = useFormik({
    initialValues: {
      stockLocation: "",
      storageUnit: "",
      specialStock: false,
      specialStoreNumber: "",
      quantity: 1,
    },
    validationSchema: validationSchema,
    onSubmit: async (values, actions) => {
      const result = await saveItemToDB({ ...values, scannedBy: data.user.id });
      console.log(
        "Result >>>> ",
        result.error.data.errors.forEach((error) =>
          enqueueSnackbar(`${error.param} - ${error.msg}`, { variant: "error" })
        )
      );
    },
  });

  return (
    <Box
      sx={{
        width: 500,
        m: "auto",
        "& .MuiTextField-root": { mb: 2 },
      }}
    >
      <form onSubmit={formik.handleSubmit}>
        <TextField
          autoFocus
          fullWidth
          id="stockLocation"
          name="stockLocation"
          label="Stock Location"
          value={formik.values.stockLocation}
          onChange={formik.handleChange}
          error={
            formik.touched.stockLocation && Boolean(formik.errors.stockLocation)
          }
          helperText={
            formik.touched.stockLocation && formik.errors.stockLocation
          }
        />
        <TextField
          fullWidth
          id="storageUnit"
          name="storageUnit"
          label="Storage Unit"
          value={formik.values.storageUnit}
          onChange={formik.handleChange}
          error={
            formik.touched.storageUnit && Boolean(formik.errors.storageUnit)
          }
          helperText={formik.touched.storageUnit && formik.errors.storageUnit}
        />

        <TextField
          fullWidth
          id="quantity"
          name="quantity"
          label="quantity"
          type="number"
          value={formik.values.quantity}
          onChange={formik.handleChange}
          error={formik.touched.quantity && Boolean(formik.errors.quantity)}
          helperText={formik.touched.quantity && formik.errors.quantity}
        />

        <FormGroup>
          <FormControlLabel
            control={
              <Checkbox
                checked={formik.values.specialStock}
                onChange={(e) =>
                  formik.setFieldValue("specialStock", e.target.checked)
                }
              />
            }
            label="Special Stock"
          />
        </FormGroup>
        {formik.values.specialStock && (
          <TextField
            fullWidth
            autoFocus
            id="specialStoreNumber"
            name="specialStoreNumber"
            label="specialStoreNumber"
            value={formik.values.specialStoreNumber}
            onChange={formik.handleChange}
            error={
              formik.touched.specialStoreNumber &&
              Boolean(formik.errors.specialStoreNumber)
            }
            helperText={
              formik.touched.specialStoreNumber &&
              formik.errors.specialStoreNumber
            }
          />
        )}
        <Button
          color="primary"
          variant="contained"
          fullWidth
          type="submit"
          mt={2}
        >
          Save
        </Button>
      </form>
    </Box>
  );
};

export default AddItems;
