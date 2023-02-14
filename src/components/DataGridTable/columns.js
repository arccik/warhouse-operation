import Slider from "@mui/material/Slider";
import Checkbox from "@mui/material/Checkbox";
import IconButton from "@mui/material/IconButton";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import SaveIcon from "@mui/icons-material/Save";
import dayjs from "dayjs";
import VerifiedIcon from "@mui/icons-material/Verified";
import DangerousIcon from "@mui/icons-material/Dangerous";

const columns = [
  {
    field: "storageUnit",
    headerName: "Storage unit",
    width: 150,
    editable: false,
  },
  {
    field: "materialCodeScanned",
    headerName: "Material code Scanned",
    width: 180,
    editable: false,
  },
  {
    field: "materialCodeSAP",
    headerName: "Material code SAP",
    type: "number",
    // width: 150,
    editable: false,
  },
  {
    field: "description",
    headerName: "Description",
    description: "This column has a value getter and is not sortable.",
    sortable: false,
    width: 160,
    valueGetter: (params) =>
      `${params.row.description || ""} ${params.row.description || ""}`,
  },
  {
    field: "stockCategory",
    headerName: "Special Stock",
    width: 150,
    type: "boolean",
    editable: false,
    renderCell: (param) => {
      console.log("Stock Category : ", param);
      return <Checkbox disabled checked={param.value == "true"} />;
    },
  },
  {
    field: "specialStockNumber",
    headerName: "Special Stock Number",
    width: 150,
    editable: false,
  },
  {
    field: "countedQuantity",
    headerName: "Counted quantity",
    type: "number",
    width: 200,
    editable: false,
    // renderCell: (params) => {
    //   return (
    //     <Slider
    //       defaultValue={params.value % 1341}
    //       aria-label="Disabled slider"
    //     />
    //   );
    // },
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
    width: 200,
    editable: false,
    renderCell: (params) => dayjs(params.value).format("HH:MM:ss DD MMM YY"),
  },
  {
    field: "SAPQuantity",
    headerName: "SAP Quantity",
    type: "number",
    // width: 200,
    editable: false,
  },
  {
    field: "SAPAddress",
    headerName: "SAP Aadress",
    type: "number",
    // width: 200,
    editable: false,
  },

  {
    field: "customers",
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
    renderCell: (params) =>
      params.row.scannedLocation === params.row.SAPAddress
        ? "same"
        : "wrong location",
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
    field: "Status",
    headerName: "Status",
    width: 60,
    editable: false,
    sortable: true,
    renderCell: (params) => {
      return params.row.difference ? (
        <DangerousIcon sx={{ color: "red" }} />
      ) : (
        <VerifiedIcon sx={{ color: "green" }} />
      );
    },
  },
  {
    field: "corrections",
    headerName: "Corrections?",
    width: 100,
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
    field: "scannedBy",
    headerName: "CC User",
    // width: 100,
    editable: false,
    renderCell: (param) => param.value.firstName,
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
    width: 100,
    editable: false,
  },
  {
    field: "actions",
    headerName: "Actions",
    // width: 200,
    editable: false,
    renderCell: (params) => (
      <>
        <IconButton
          color="primary"
          aria-label="upload picture"
          component="label"
        >
          {/* <input hidden accept="image/*" type="file" /> */}
          <SaveIcon />
        </IconButton>
        <IconButton
          color="secondary"
          aria-label="upload picture"
          component="label"
        >
          {/* <input hidden accept="image/*" type="file" /> */}
          <DeleteForeverIcon />
        </IconButton>
      </>
    ),
  },
];
export default columns;
