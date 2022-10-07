import * as React from 'react';
import Tab from '@mui/material/Tab';
import TabPanel from './TabPanel';
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';


/**
 * Places in screen two different tabs
 * @returns JSX containing the two tabs created
 */
function TabMenu() {
    const [value, setValue] = React.useState(0);
  
    const handleChange = (event, newValue) => {
      setValue(newValue);
    };
  
    return (
      <Box sx={{ width: '100%' }}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <Tabs value={value} onChange={handleChange} aria-label="basic tabs example"> 
            <Tab label="Historical Data"  />
            <Tab label="Symptoms reporting"  />
          </Tabs>
        </Box>
        <TabPanel value={value} index={0}>
          Historical Data
        </TabPanel>
        <TabPanel value={value} index={1}>
          Symptoms reporting
        </TabPanel>
      </Box>
    );
}
export default TabMenu;