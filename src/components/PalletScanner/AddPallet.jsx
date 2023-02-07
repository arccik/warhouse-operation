import { Formik, Form, Field } from "formik";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { Box } from "@mui/material";
import validationSchema from "./validationSchema";
import { useAddPalletMutation } from "@/features/Pallet/palletSlice";
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
import { useState } from "react";
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';
import { useSnackbar } from 'notistack';

const AddPallet = () => {
    const [saveToDB, { isLoading, isError, error }] = useAddPalletMutation()
    const { enqueueSnackbar } = useSnackbar();
    const [errors, setErrors] = useState(null)
    const initialValues = {
        productId: '',
        name: "",
        storageLocation: "",
        quantity: 0,
        description: "",
        price: 0
    }
    const handleSubmit = async (values, { setSubmitting }) => {
        console.log('submitting', values);
        const response = await saveToDB(values)
        if (response.error?.data?.errors) {
            response.error.data.errors.forEach(error => enqueueSnackbar(`${error.param} ${error.msg}`, { variant: "error" }))
        }
        console.log('reposne from submittingl ', response)
        setSubmitting(false);

    };

    return (<Box
        sx={{
            "& .MuiTextField-root": { m: 1 },
        }}
        noValidate
        autoComplete="off"
    >

        <Formik
            initialValues={initialValues}
            onSubmit={handleSubmit}
        >
            {({ values, errors, touched, ...rest }) => (
                <Form>
                    {Object.keys(values).map(key => (
                        <><Field fullWidth value={values[key]} onChange={(e) => rest.setFieldValue(key, e.target.value)} variant="standard" type="" name={key} label={key} component={TextField} /></>
                    ))}
                    {/* <Field fullWidth value={values['productId']} onChange={(e) => rest.setFieldValue('productId', e.target.value)} variant="standard" type="" name='productId' label="Product ID" component={TextField} />
                    <Field fullWidth variant="standard" name='name' label="Name" component={TextField} />
                    <Field fullWidth variant="standard" name='storageLocation' label="Storage Location" component={TextField} />
                    <Field fullWidth variant="standard" name='quantity' label="Quantity" component={TextField} />
                    <Field fullWidth variant="standard" name='description' label="Description" component={TextField} />
                    <Field fullWidth variant="standard" name='price' label="Price" component={TextField} /> */}
                    <Button type="submit">Submit</Button>
                </Form>)}
        </Formik>
    </Box >
    );
}

export default AddPallet;