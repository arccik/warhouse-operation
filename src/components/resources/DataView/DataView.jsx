import Box from "@mui/material/Box";
import { DataGrid } from "@mui/x-data-grid";

export default function DataGridDemo({ rows, columns }) {
  return (
    <Box>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={5}
        autoPageSize
        autoHeight
        disableSelectionOnClick
        getRowId={(v) => v._id}
      />
    </Box>
  );
}
