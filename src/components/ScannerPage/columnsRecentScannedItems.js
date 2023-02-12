import UsersActions from "./UsersActions";
import dayjs from "dayjs";
import TableActions from "./TableActions";

const columns = [
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
    field: "item",
    headerName: "Item",
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
    headerName: "Scanned date & time",
    sortable: true,
    // width: 160,
    flex: 2,
    renderCell: (param) => dayjs(param.value).format("HH:MM:ss DD MMM YYYY"),
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
    field: "specialStoreNumber",
    headerName: "Special Store Number",
    width: 120,
    editable: true,
    flex: 1,
  },
  {
    field: "actions",
    headerName: "Actions",
    type: "actions",
    width: 200,
    renderCell: (params) => <TableActions {...{ params }} />,
  },
];
export default columns;
