import React from 'react';
import ReactDOM from 'react-dom';
import { Formik, Field, Form } from 'formik';
import TextField from '@mui/material/TextField';
import { Box, Button } from '@mui/material';
import { useAddProductMutation } from '@/features/Product/productSlice';
import PreSubmitTable from './PreSubmitTable';

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

const AddProduct = () => {
    const [saveToDB, { }] = useAddProductMutation()

    const handleSubmit = async (values, { setFieldValue }) => {
        const response = await saveToDB(values)
        console.log('Handle Submit response ', response)
        if (response.status === 'ok') window.location.reload()
    }

    return <Box sx={{ maxWidth: 800, m: 'auto' }}>
        <h1>Add Product</h1>
        <Formik
            initialValues={{
                productId: "",
                storageUnit: "",
                material: "",
                materialDescription: "",
                SLOC: "",
                specialStock: false,
                specialStockNumber: "",
                type: "",
                availableStock: 0,
                storageBin: "",
            }}
            onSubmit={handleSubmit}

        >
            {({ values, isSubmitting, setFieldValue }) => (
                <Form>
                    {Object.keys(values).map(key => <>
                        <TextField fullWidth key={key} value={values[key]} onChange={(e) => setFieldValue(key, e.target.value)} sx={{ mb: 1 }} id="outlined-basic" label={key} variant="outlined" />
                    </>)}

                    <Button fullWidth variant="contained" type="submit" disabled={isSubmitting}>
                        Submit
                    </Button>
                </Form>
            )}
        </Formik>
        <PreSubmitTable />
    </Box>
};

export default AddProduct
