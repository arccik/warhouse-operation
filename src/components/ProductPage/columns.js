const columns = [
  {
    field: "_id",
    headerName: "ID",
    width: 120,
    sortable: false,
    filterabel: false,
  },
  {
    field: "productId",
    headerName: "Product ID",
    width: 120,
    sortable: false,
  },
  {
    field: "storageUnit",
    headerName: "Storage unit",
    // width: 150,
    editable: false,
  },
  {
    field: "material",
    headerName: "Material code Scanned",
    // width: 180,
    editable: false,
  },
  {
    field: "materialDescription",
    headerName: "Material code SAP",
    type: "string",
    width: 150,
    editable: false,
  },
  {
    field: "SLOC",
    headerName: "SLOC",
    type: "string",
    width: 150,
    editable: false,
  },
  {
    field: "specialStock",
    headerName: "Special Stock",
    type: "boolean",
    width: 150,
    editable: false,
  },
  {
    field: "specialStockNumber",
    headerName: "Special Stock Number",
    type: "number",
    width: 150,
    editable: false,
  },
  {
    field: "type",
    headerName: "Type",
    sortable: false,
    // width: 160,
  },
  {
    field: "availableStock",
    headerName: "Available Stock",
    // width: 150,
    editable: false,
    // renderCell: (params) => {}
  },
  {
    field: "storageBin",
    headerName: "Storage Bin",
    // width: 150,
    editable: false,
  },
];
export default columns;
