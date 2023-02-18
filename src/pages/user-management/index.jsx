import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import { useState } from "react";

import AppContainer from "@/components/AppContainer/ApplicationContainer";
import AddUser from "@/components/UserManagement/AddUser";
import UserList from "../../components/UserManagement/UserList";
import UserActivities from "@/components/UserManagement/UserActivities";

export default function UsersManagementPage() {
  const [value, setValue] = useState("2");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <AppContainer>
      <Typography variant="h1">Manage Users</Typography>
      <Box sx={{ width: "100%", typography: "body1" }}>
        <TabContext value={value}>
          <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
            <TabList onChange={handleChange} aria-label="lab API tabs example">
              <Tab label="Add New User" value="1" />
              <Tab label="Users List" value="2" />
              <Tab label="Users Activities" value="3" />
            </TabList>
          </Box>
          <TabPanel value="1">
            <AddUser />
          </TabPanel>
          <TabPanel value="2">
            <UserList />
          </TabPanel>
          <TabPanel value="3">
            <UserActivities />
          </TabPanel>
        </TabContext>
      </Box>
    </AppContainer>
  );
}
