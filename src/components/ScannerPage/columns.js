import UsersActions from "./UsersActions";

const columns = [
  // {
  //   field: "_id",
  //   headerName: "ID",
  //   width: 120,
  //   sortable: false,
  //   filterabel: false,
  // },
  {
    field: "productId",
    headerName: "Product ID",
    width: 110,
    sortable: false,
  },
  {
    field: "storageUnit",
    headerName: "Storage unit",
    width: 150,
    editable: true,
  },
  {
    field: "material",
    headerName: "Material",
    width: 100,
    editable: true,
  },
  {
    field: "materialDescription",
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
    field: "specialStock",
    headerName: "Special Stock",
    type: "boolean",
    width: 120,
    editable: true,
  },
  {
    field: "specialStockNumber",
    headerName: "Special Stock Number",
    type: "number",
    width: 150,
    editable: true,
  },
  {
    field: "type",
    headerName: "Type",
    sortable: true,
    // width: 160,
  },
  {
    field: "availableStock",
    headerName: "Available Stock",
    // width: 150,
    editable: true,
    // renderCell: (params) => {}
  },
  {
    field: "storageBin",
    headerName: "Storage Bin",
    // width: 150,
    editable: true,
  },
  {
    field: "actions",
    headerName: "User Actions",
    type: "actions",
    renderCell: (params) => <UsersActions {...{ params }} />,
  },
];
export default columns;
