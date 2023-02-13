import AppContainer from "@/components/AppContainer/ApplicationContainer";
import Loader from "@/components/resources/Loader/Loader";
import { useGetAllUsersQuery } from "@/features/User/userSlice";
import { Typography } from "@mui/material";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";
import TagFacesIcon from "@mui/icons-material/TagFaces";
import DataView from "../resources/DataView/DataView";

const columns = [
  { field: "_id", headerName: "ID", width: 90 },
  {
    field: "firstName",
    headerName: "First name",
    editable: true,
    flex: 1,
    renderCell: (param) => {
      if (param.row.role === "admin") {
        return (
          <Chip
            label={"Admin : " + param.formattedValue}
            color="primary"
            variant="outlined"
            icon={<TagFacesIcon />}
          />
        );
      }
      return param.formattedValue;
    },
  },
  {
    field: "lastName",
    headerName: "Last name",
    editable: true,
    flex: 1,
  },
  {
    field: "email",
    headerName: "email",
    editable: true,
    flex: 1,
  },
  {
    field: "department",
    headerName: "Department",
    // description: "This column has a value getter and is not sortable.",
    flex: 1,
  },
  {
    field: "role",
    headerName: "Role",
    editable: true,
    flex: 1,
  },
];

const UserList = () => {
  const { data, isLoading, error } = useGetAllUsersQuery();
  if (isLoading) return <Loader />;
  if (error) return <h4>Ops. something went wrong</h4>;
  return (
    <>
      <Typography variant="h4" mb={4}>
        User List
      </Typography>
      <DataView rows={data} columns={columns} />
    </>
  );
};

export default UserList;
