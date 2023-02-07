import { useGetProductsQuery } from "@/features/Product/productSlice"
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import Loader from "../resources/Loader/Loader";
import columns from "./columns";

const PreSubmitTable = () => {
    const { data: rows, isLoading, error } = useGetProductsQuery()
    console.log('PrE Submit ', rows)
    if (isLoading) return <Loader />
    return <DataGrid
        sx={{ height: 500 }}
        components={{ Toolbar: GridToolbar }}
        loading={isLoading}
        rows={rows}
        columns={columns}
        autoPageSize={true}
        rowHeight={60}
        getRowId={(v) => v._id}
        pageSize={5}
        // rowsPerPageOptions={[5]}
        checkboxSelection
        disableSelectionOnClick
        experimentalFeatures={{ newEditingApi: true }}
    />
}

export default PreSubmitTable