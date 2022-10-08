import * as React from "react";
import Tab from "@mui/material/Tab";
import TabPanel from "./TabPanel";
import Box from "@mui/material/Box";
import Tabs from "@mui/material/Tabs";
import CountryDataPage from "./CountryDataPage";
import SymptomsForm from "./SymptomsForm";

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
    <Box sx={{ width: "100%" }}>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          value={value}
          onChange={handleChange}
        >
          <Tab label="Historic country Data" />
          <Tab label="Symptoms reporting" />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        <CountryDataPage />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <SymptomsForm />
      </TabPanel>
    </Box>
  );
}
export default TabMenu;
