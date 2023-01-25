import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { Formik } from "formik";
import { useAddUserEntryMutation } from "@/services/User/userSlice";
import Loader from "../utils/Loader/Loader";
import { useRouter } from "next/router";
import Snackbar from "@mui/material/Snackbar";
import styles from "./previewTableStyles.module.css";

const UserEntryForm = () => {
  const router = useRouter();
  const [addEntry, { error, isLoading }] = useAddUserEntryMutation();
  if (isLoading) return <Loader />;
  if (error) return <p>Ops. something went wrong</p>;

  const handleSubmit = async (data, { setSubmitting }) => {
    const response = await addEntry({ id: "userid", data });
    setSubmitting(false);
    console.log(response);
    if (response) {
      router.push("/");
    }
  };
  return (
    <>
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
        }) => (
          <div>
            <form onSubmit={handleSubmit}>
              <TextField
                type="text"
                name="storageUnit"
                label="storageUnit"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.storageUnit}
                fullWidth
                style={{ marginBottom: 20 }}
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
                style={{ marginBottom: 20 }}
              />
              {errors.materialCode &&
                touched.materialCode &&
                errors.materialCode}

              <TextField
                type="text"
                name="quantity"
                label="quantity"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.quantity}
                fullWidth
                style={{ marginBottom: 20 }}
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
                style={{ marginBottom: 20 }}
              />
              {errors.storageLocation &&
                touched.storageLocation &&
                errors.storageLocation}
              <Button
                fullWidth
                variant="outlined"
                type="submit"
                disabled={isSubmitting}
              >
                Submit
              </Button>
            </form>
            {/* {values && (
              <>
                <table className={styles.customers}>
                  {Object.entries(values).map(([keys, value]) => {
                    return (
                      <>
                        <tr key={keys}>
                          <th>{keys}</th>
                        </tr>
                        <tr>
                          <td>{value}</td>
                        </tr>
                      </>
                    );
                  })}
                </table>
              </>
            )} */}
          </div>
        )}
      </Formik>
    </>
  );
};

export default UserEntryForm;
