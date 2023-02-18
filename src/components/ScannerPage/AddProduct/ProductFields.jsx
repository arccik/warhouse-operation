import TextField from "@mui/material/TextField";
import { FormControlLabel } from "@mui/material";
import Checkbox from "@mui/material/Checkbox";
const ProductFields = ({ setValue, values, touched, errors }) => {
  return (
    <>
      <FormControlLabel
        control={
          <Checkbox
            value={values["Special Stock"]}
            onClick={(e) => setValue("Special Stock", e.target.checked)}
          />
        }
        label="Special Stock"
      />
      <TextField
        fullWidth
        value={values["Storage Unit"]}
        onChange={(e) => setValue("Storage Unit", e.target.value)}
        sx={{ mb: 1 }}
        id="outlined-basic"
        label="Storage Unit"
        variant="outlined"
        error={touched["Storage Unit"] && Boolean(errors["Storage Unit"])}
        helperText={touched["Storage Unit"] && errors["Storage Unit"]}
      />
      <TextField
        fullWidth
        value={values.Material}
        onChange={(e) => setValue("Material", e.target.value)}
        sx={{ mb: 1 }}
        id="outlined-basic"
        label="Material"
        variant="outlined"
        error={touched.Material && Boolean(errors.Material)}
        helperText={touched.Material && errors.Material}
      />
      <TextField
        fullWidth
        value={values["Available Stock"]}
        onChange={(e) => setValue("Available Stock", e.target.value)}
        sx={{ mb: 1 }}
        id="outlined-basic"
        label="Available Stock"
        variant="outlined"
        error={touched["Available Stock"] && Boolean(errors["Available Stock"])}
        helperText={touched["Available Stock"] && errors["Available Stock"]}
      />
      <TextField
        fullWidth
        value={values.StorageBin}
        onChange={(e) => setValue("StorageBin", e.target.value)}
        sx={{ mb: 1 }}
        id="outlined-basic"
        label="Storage Bin"
        variant="outlined"
        error={touched.StorageBin && Boolean(errors.StorageBin)}
        helperText={touched.StorageBin && errors.StorageBin}
      />
      {values["Special Stock"] && (
        <TextField
          fullWidth
          value={values["Special Stock Number"]}
          onChange={(e) => setValue("Special Stock Number", e.target.value)}
          sx={{ mb: 1 }}
          id="outlined-basic"
          label="Special Stock Number"
          variant="outlined"
          error={
            touched["Special Stock Number"] &&
            Boolean(errors["Special Stock Number"])
          }
          helperText={
            touched["Special Stock Number"] && errors["Special Stock Number"]
          }
        />
      )}
      <TextField
        fullWidth
        value={values.productId}
        onChange={(e) => setValue("productId", e.target.value)}
        sx={{ mb: 1 }}
        id="outlined-basic"
        label="Product ID"
        variant="outlined"
        error={touched.productId && Boolean(errors.productId)}
        helperText={touched.productId && errors.productId}
      />
      <TextField
        fullWidth
        value={values["Material Description"]}
        onChange={(e) => setValue("Material Description", e.target.value)}
        sx={{ mb: 1 }}
        id="outlined-basic"
        label="Material Description"
        variant="outlined"
        error={
          touched["Material Description"] &&
          Boolean(errors["Material Description"])
        }
        helperText={
          touched["Material Description"] && errors["Material Description"]
        }
      />
      <TextField
        fullWidth
        value={values.SLOC}
        onChange={(e) => setValue("SLOC", e.target.value)}
        sx={{ mb: 1 }}
        id="outlined-basic"
        label="SLOC"
        variant="outlined"
        error={touched.SLOC && Boolean(errors.SLOC)}
        helperText={touched.SLOC && errors.SLOC}
      />

      <TextField
        fullWidth
        value={values.Type}
        onChange={(e) => setValue("Type", e.target.value)}
        sx={{ mb: 1 }}
        id="outlined-basic"
        label="Type"
        variant="outlined"
        error={touched.Type && Boolean(errors.Type)}
        helperText={touched.Type && errors.Type}
      />
    </>
  );
};
export default ProductFields;
