import * as React from 'react';
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';
// import { columns } from './columns';
import { Typography } from '@mui/material';
import { useGetPalletsQuery } from '@/features/Pallet/palletSlice';
import Loader from '../resources/Loader/Loader';
import { columns } from './palletcolumns'



export default function CheckInDataGrid(props) {

    const { data, isLoading, error } = useGetPalletsQuery()
    console.log('CheckInDataGrid', columns)
    if (isLoading) return <Loader />
    if (error) return <p>Something went wrong ! </p>
    const title = props.title || 'Entried Data'
    return (
        <Box sx={{ height: 400, width: '50%', mt: 10, float: 'left' }}>
            <Typography color="black" variant="h5">
                {title}
            </Typography>
            <DataGrid
                rows={data}
                columns={columns}
                pageSize={5}
                getRowId={v => v.productId}
                rowsPerPageOptions={[5]}
                checkboxSelection
                disableSelectionOnClick
                experimentalFeatures={{ newEditingApi: true }}
            />
        </Box>
    );
}
