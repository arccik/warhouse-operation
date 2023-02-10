import { useGetProductsQuery } from "@/features/Product/productSlice"
import { DataGrid } from "@mui/x-data-grid";
import { useState } from "react";
import Loader from "../resources/Loader/Loader";
// import columns from "./columns";
import UsersActions from "./UsersActions";

const PreSubmitTable = () => {
  const [pageSize, setPageSize] = useState(5);
  const [rowId, setRowId] = useState(null);
  const { data: rows, isLoading, error } = useGetProductsQuery();

  const columns = [
    {
      field: "ProductId",
      headerName: "Product ID",
      width: 110,
      sortable: false,
    },
    {
      field: "StorageUnit",
      headerName: "Storage unit",
      width: 150,
      editable: true,
    },
    {
      field: "Material",
      headerName: "Material",
      width: 100,
      editable: true,
    },
    {
      field: "MaterialDescription",
      headerName: "Material code SAP",
      type: "string",
      width: 150,
      editable: true,
    },
    {
      field: "SLOC",
      headerName: "SLOC",
      type: "string",
      width: 110,
      editable: true,
    },
    {
      field: "SpecialStock",
      headerName: "Special Stock",
      type: "boolean",
      width: 120,
      editable: true,
    },
    {
      field: "SpecialStockNumber",
      headerName: "Special Stock Number",
      type: "number",
      width: 150,
      editable: true,
    },
    {
      field: "Type",
      headerName: "Type",
      sortable: true,
      // width: 160,
    },
    {
      field: "AvailableStock",
      headerName: "Available Stock",
      // width: 150,
      editable: true,
      // renderCell: (params) => {}
    },
    {
      field: "StorageBin",
      headerName: "Storage Bin",
      // width: 150,
      editable: true,
    },
    {
      field: "Actions",
      headerName: "User Actions",
      type: "actions",
      renderCell: (params) => <UsersActions {...{ params, rowId, setRowId }} />,
    },
  ];
  if (isLoading) return <Loader />;
  return (
    <DataGrid
      sx={{ height: 500 }}
      loading={isLoading}
      rows={rows}
      columns={columns}
      rowHeight={60}
      getRowId={(v) => v._id}
      pageSize={pageSize}
      onPageSizeChange={(newNumber) => setPageSize(newNumber)}
      rowsPerPageOptions={[5, 10, 20]}
      GridActionsCell
      checkboxSelection
      disableSelectionOnClick
      onCellEditCommit={(params) => setRowId(params.id)}
      // experimentalFeatures={{ newEditingApi: true }}
    />
  );
};

export default PreSubmitTable