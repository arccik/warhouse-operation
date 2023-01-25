import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

import AppHeader from "../AppContainer/AppHeader/AppHeader";
import AppFooter from "./AppFooter/AppFooter";

const ApplicationContainer = ({ children }) => {
  return (
    <>
      <AppHeader />
      <Box component="main" sx={{ p: 3 }}>
        <Toolbar />
        {children}
      </Box>
      <AppFooter />
    </>
  );
};

export default ApplicationContainer;
