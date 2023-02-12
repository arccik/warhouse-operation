import Box from "@mui/material/Box";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import columns from "./columns";
import { useGetDataQuery } from "@/features/DataGrid/dataSlice";
import { CircularProgress } from "@mui/material";

export default function DataGridTable() {
  const { data: rows, isLoading, isError, error } = useGetDataQuery();
  if (isLoading) return <CircularProgress />;
  if (isError) return <p>Ops. something went wrong</p>;
  return (
    <Box sx={{ height: 800, width: "100%" }}>
      <DataGrid
        components={{ Toolbar: GridToolbar }}
        loading={isLoading}
        rows={rows}
        columns={columns}
        autoPageSize
        rowHeight={60}
        getRowId={(v) => v._id}
        // pageSize={5}
        // rowsPerPageOptions={[5]}
        checkboxSelection
        disableSelectionOnClick
        experimentalFeatures={{ newEditingApi: true }}
      />
    </Box>
  );
}
