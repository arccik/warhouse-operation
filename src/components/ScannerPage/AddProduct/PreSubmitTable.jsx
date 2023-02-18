import { useGetNotSubmittedProductsQuery } from "@/features/Product/productSlice";
import { DataGrid } from "@mui/x-data-grid";
import { useState } from "react";
import Loader from "../../resources/Loader/Loader";
import dayjs from "dayjs";
// import columns from "./columns";
import UsersActions from "./UsersActions";

const PreSubmitTable = () => {
  const [pageNumber, setPageNumber] = useState(1);
  const [rowId, setRowId] = useState(null);
  const {
    data: rows,
    isLoading,
    error,
  } = useGetNotSubmittedProductsQuery(pageNumber);

  const columns = [
    {
      field: "Storage Unit",
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
      field: "Material Description",
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
      field: "Special Stock",
      headerName: "Special Stock",
      type: "boolean",
      width: 120,
      editable: true,
    },
    {
      field: "Special Stock Number",
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
      field: "Available Stock",
      headerName: "Available Stock",
      // width: 150,
      editable: true,
      // renderCell: (params) => {}
    },
    {
      field: "createdAt",
      headerName: "Created Date",
      width: 150,
      editable: true,
      renderCell: (params) => dayjs(params.value).format("HH:MM:ss DD MMM"),
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
      width: 200,
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
      autoPageSize
      onScroll={(sc) => console.log("scorlll", sc)}
      onFilterModelChange={(a, b) => console.log("onFilterModelChange", a, b)}
      GridActionsCell
      checkboxSelection
      disableSelectionOnClick
      onCellEditCommit={(params) => setRowId(params.id)}
      // experimentalFeatures={{ newEditingApi: true }}
    />
  );
};

export default PreSubmitTable;
