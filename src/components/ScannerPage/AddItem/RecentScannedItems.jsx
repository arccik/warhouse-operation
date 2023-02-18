import { useGetRecentScannedItemsQuery } from "@/features/Item/itemSlice";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { DataGrid } from "@mui/x-data-grid";
import { useMemo, useState } from "react";
import ErrorHandler from "../../resources/ErrorHandler/ErrorHandler";
import Loader from "../../resources/Loader/Loader";
import dayjs from "dayjs";
import TableActions from "./TableActions";

const RecentScannedItems = () => {
  const [page, setPage] = useState(10);
  const [rowId, setRowId] = useState(null);
  const { data: rows, isLoading, error } = useGetRecentScannedItemsQuery();
  const columns = useMemo(
    () => [
      {
        field: "_id",
        headerName: "ID",
        width: 120,
        sortable: false,
        filterabel: false,
        flex: 1,
      },
      {
        field: "stockLocation",
        headerName: "Stock Location",
        width: 150,
        editable: true,
        flex: 1,
      },
      {
        field: "storageUnit",
        headerName: "Storage Unit",
        width: 100,
        editable: true,
        flex: 1,
      },
      {
        field: "materialCodeScanned",
        headerName: "Material Code",
        type: "string",
        width: 150,
        editable: true,
        flex: 1,
      },
      {
        field: "countedQuantity",
        headerName: "Quantity",
        sortable: true,
        editable: true,
        // width: 160,
        flex: 1,
      },
      {
        field: "createdAt",
        headerName: "Time & Date of Scanning",
        sortable: true,
        // width: 160,
        flex: 2,
        renderCell: (param) =>
          dayjs(param.value).format("DD MMM YYYY HH:MM:ss"),
      },
      {
        field: "specialStock",
        headerName: "Special Stock",
        type: "boolean",
        width: 110,
        editable: true,
        flex: 1,
      },
      {
        field: "specialStockNumber",
        headerName: "Special Stock Number",
        width: 120,
        editable: true,
        flex: 1,
      },
      {
        field: "actions",
        headerName: "Actions",
        type: "actions",
        renderCell: (params) => (
          <TableActions {...{ params, rowId, setRowId }} />
        ),
      },
    ],
    [rowId]
  );

  if (isLoading) return <Loader />;
  if (error)
    return (
      <ErrorHandler msg="Something went wrong, check your internet connections" />
    );
  return (
    <Box sx={{ mt: 11 }}>
      <Typography variant="h5">Recently Scanned</Typography>
      <DataGrid
        rows={rows}
        columns={columns}
        loading={isLoading}
        autoHeight
        disableSelectionOnClick
        getRowId={(v) => v._id}
        rowsPerPageOptions={[5, 10, 20]}
        pageSize={page}
        onPageSizeChange={(newPageSize) => setPage(newPageSize)}
        onCellEditCommit={(params) => setRowId(params.id)}
      />
    </Box>
  );
};

export default RecentScannedItems;
