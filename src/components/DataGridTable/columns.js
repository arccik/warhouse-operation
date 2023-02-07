import Slider from "@mui/material/Slider";
const columns = [
  {
    field: "_id",
    headerName: "ID",
    width: 120,
    sortable: false,
    filterabel: false,
  },
  {
    field: "storageUnit",
    headerName: "Storage unit",
    // width: 150,
    editable: false,
  },
  {
    field: "materialCodeScanned",
    headerName: "Material code Scanned",
    // width: 180,
    editable: false,
  },
  {
    field: "materialCodeSAP",
    headerName: "Material code SAP",
    type: "number",
    width: 150,
    editable: false,
  },
  {
    field: "description",
    headerName: "Description",
    description: "This column has a value getter and is not sortable.",
    sortable: false,
    // width: 160,
    valueGetter: (params) =>
      `${params.row.description || ""} ${params.row.description || ""}`,
  },
  {
    field: "stockCategory",
    headerName: "Stock Category",
    // width: 150,
    editable: false,
  },
  {
    field: "specialStockNumber",
    headerName: "Special Stock Number",
    // width: 150,
    editable: false,
  },
  {
    field: "countedQuantity",
    headerName: "Counted quantity",
    type: "number",
    // width: 200,
    editable: false,
    renderCell: (params) => {
      return (
        <Slider
          defaultValue={params.value % 1341}
          aria-label="Disabled slider"
        />
      );
    },
  },
  {
    field: "scannedLocation",
    headerName: "Scanned location",
    // width: 200,
    editable: false,
  },
  {
    field: "timeAndDateOfScanning",
    headerName: "Time and date of scanning",
    type: "number",
    // width: 200,
    editable: false,
  },
  {
    field: "SAPQuantity",
    headerName: "SAP Quantity",
    type: "number",
    // width: 200,
    editable: false,
  },
  {
    field: "SAPAadress",
    headerName: "SAP Aadress",
    type: "number",
    // width: 200,
    editable: false,
  },

  {
    field: "customer",
    headerName: "Customer",
    // width: 200,
    editable: false,
  },
  {
    field: "difference",
    headerName: "Difference",
    // width: 200,
    editable: false,
  },
  {
    field: "sameLocation",
    headerName: "Same location",
    // width: 200,
    editable: false,
  },
  {
    field: "MAP",
    headerName: "MAP",
    // width: 200,
    editable: false,
  },
  {
    field: "value",
    headerName: "Value",
    // width: 200,
    editable: false,
  },
  {
    field: "actions",
    headerName: "Actions",
    // width: 200,
    editable: false,
  },
  {
    field: "Status",
    headerName: "Status",
    // width: 100,
    editable: false,
  },
  {
    field: "corrections",
    headerName: "Corrections?",
    // width: 100,
    editable: false,
    type: "boolean",
  },
  {
    field: "result",
    headerName: "Result?",
    // width: 100,
    editable: false,
  },
  {
    field: "comment",
    headerName: "Comment",
    // width: 100,
    editable: false,
  },
  {
    field: "CCUser",
    headerName: "CC User",
    // width: 100,
    editable: false,
  },
  {
    field: "mistake",
    headerName: "Mistake?",
    // width: 100,
    type: "boolean",
    editable: false,
  },
  {
    field: "mistakeUsername",
    headerName: "Mistake Username",
    // width: 100,
    editable: false,
  },
  {
    field: "round",
    headerName: "Round",
    // width: 100,
    editable: false,
  },
];
export default columns;
