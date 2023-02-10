import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import AddPallet from './AddPallet';
import FindPallet from './FindPallet';
import { useState } from 'react';

import CheckInDataGrid from "@/components/CheckInPage/CheckInDataGrid";

export default function LabTabs() {
  const [value, setValue] = useState('1');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%', typography: 'body1' }}>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <TabList onChange={handleChange} aria-label="lab API tabs example">
            <Tab label="Scann Pallet" value="1" />
            <Tab label="Find Pallet" value="2" />
            <Tab label="Update" value="3" />
          </TabList>
        </Box>
        <TabPanel value="1"><AddPallet /></TabPanel>
        <TabPanel value="2"><FindPallet /></TabPanel>
        <TabPanel value="3"><><CheckInDataGrid /><CheckInDataGrid /></></TabPanel>
      </TabContext>
    </Box>
  );
}