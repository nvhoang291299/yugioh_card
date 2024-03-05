'use client'

import * as React from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import TableDescription from '../TableDescription';

export default function LabTabs(props: any) {
    const [value, setValue] = React.useState('1');
  
    const handleChange = (event: React.SyntheticEvent, newValue: string) => {
      setValue(newValue);
    };
  
    return (
      <Box sx={{ width: '100%', typography: 'body1' }}>
        <TabContext value={value}>
          <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
            <TabList onChange={handleChange} aria-label="lab API tabs example">
              <Tab label="Description" value="1" />
              <Tab label="Review" value="2" />
            </TabList>
          </Box>
          <TabPanel value="1">
            <TableDescription />
          </TabPanel>
          <TabPanel value="2">Review</TabPanel>
        </TabContext>
      </Box>
    );
  }