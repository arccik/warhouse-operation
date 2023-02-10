import React from "react";
import ReactDOM from "react-dom";
import { useFormik } from "formik";
import * as yup from "yup";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import { useSnackbar } from "notistack";
import {
  FormControl,
  InputLabel,
  Typography,
  Select,
  MenuItem,
} from "@mui/material";
import { useAddUserMutation } from "@/features/User/userSlice";
const validationSchema = yup.object({
  email: yup
    .string("Enter your email")
    .email("Enter a valid email")
    .required("Email is required"),
  firstName: yup
    .string("Enter your First name")
    .required("First Name is required"),
  lastName: yup
    .string("Enter your Last name")
    .required("Last Name is required"),
  role: yup.string("Select Role for this user").required("Role is required"),
  email: yup
    .string("Enter your email")
    .email("Enter a valid email")
    .required("Email is required"),
  password: yup
    .string("Enter your password")
    .min(8, "Password should be of minimum 8 characters length")
    .required("Password is required"),
});

const AddUser = () => {
  const [saveUserToDB, ...rest] = useAddUserMutation();
  const { enqueueSnackbar } = useSnackbar();
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      role: "counter",
      firstName: "",
      lastName: "",
      department: "",
    },
    validationSchema: validationSchema,
    onSubmit: async (values, actions) => {
      const result = await saveUserToDB(values);
      if (result.data.status === "bad") {
        actions.setFieldError(
          "email",
          "User with given email already registred"
        );
        enqueueSnackbar(result.data.message, { variant: "error" });
      } else if (result.data.status === "ok") {
        actions.resetForm({ values: "" });
        enqueueSnackbar("User Succesfully created!", { variant: "success" });
      }
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
      <Typography variant="h5" component="h5" mb={4}>
        Add New User
      </Typography>
      <form onSubmit={formik.handleSubmit}>
        <TextField
          fullWidth
          id="firstName"
          name="firstName"
          label="First Name"
          value={formik.values.firstName}
          onChange={formik.handleChange}
          error={formik.touched.firstName && Boolean(formik.errors.firstName)}
          helperText={formik.touched.firstName && formik.errors.firstName}
        />
        <TextField
          fullWidth
          id="lastName"
          name="lastName"
          label="Last Name"
          value={formik.values.lastName}
          onChange={formik.handleChange}
          error={formik.touched.lastName && Boolean(formik.errors.lastName)}
          helperText={formik.touched.lastName && formik.errors.lastName}
        />
        <TextField
          fullWidth
          id="department"
          name="department"
          label="Department"
          type="department"
          value={formik.values.department}
          onChange={formik.handleChange}
          error={formik.touched.department && Boolean(formik.errors.department)}
          helperText={formik.touched.department && formik.errors.department}
        />

        <TextField
          fullWidth
          id="email"
          name="email"
          label="Email"
          value={formik.values.email}
          onChange={formik.handleChange}
          error={formik.touched.email && Boolean(formik.errors.email)}
          helperText={formik.touched.email && formik.errors.email}
        />
        <TextField
          fullWidth
          id="password"
          name="password"
          label="Password"
          type="password"
          value={formik.values.password}
          onChange={formik.handleChange}
          error={formik.touched.password && Boolean(formik.errors.password)}
          helperText={formik.touched.password && formik.errors.password}
        />
        <FormControl>
          <InputLabel id="role-select">Assign Role</InputLabel>
          <Select
            labelId="role-select"
            id="role-selection"
            value={formik.values.role}
            label="Role"
            onChange={(e) => formik.setFieldValue("role", e.target.value)}
          >
            <MenuItem value="user">User</MenuItem>
            <MenuItem value="counter">Counter</MenuItem>
            <MenuItem value="admin">Admin</MenuItem>
          </Select>
        </FormControl>
        <Button
          color="primary"
          variant="contained"
          fullWidth
          type="submit"
          mt={2}
        >
          Submit
        </Button>
      </form>
    </Box>
  );
};

export default AddUser;
