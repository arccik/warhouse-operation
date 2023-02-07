export const columns = [
  { field: "productId", headerName: "Product ID", width: 90 },
  {
    field: "name",
    headerName: "Name",
    width: 150,
    editable: true,
  },

  {
    field: "storageLocation",
    headerName: "Storage Location",
    description: "This column has a value getter and is not sortable.",
    sortable: false,
    // width: 160,
    // valueGetter: (params) =>
    //   `${params.row.firstName || ''} ${params.row.lastName || ''}`,
  },
  {
    field: "quantity",
    headerName: "Quantity",
    type: "number",
    width: 150,
    editable: true,
    // valueGetter: (params) => params.row.quantity + "lox",
    // renderCell: (params) => 100,
  },
  {
    field: "description",
    headerName: "Description",
    // width: 150,
    editable: true,
  },
  {
    field: "price",
    headerName: "Price",
    // width: 150,
    editable: true,
  },
];
