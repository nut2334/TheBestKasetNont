import * as React from "react";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import { ThemeProvider } from "@mui/material/styles";
import myTheme from "../core-ui/theme";
import LocalGroceryStoreIcon from "@mui/icons-material/LocalGroceryStore";
import PieChartIcon from "@mui/icons-material/PieChart";
import QueryBuilderIcon from "@mui/icons-material/QueryBuilder";
import Listproduct from "../pages/list-product";

export default function LabTabs() {
  const [value, setValue] = React.useState("1");

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  return (
    <ThemeProvider theme={myTheme}>
      <Box sx={{ width: "100%", typography: "body1", marginTop: 3 }}>
        <TabContext value={value}>
          <Box>
            <TabList
              onChange={handleChange}
              aria-label="lab API tabs example"
              indicatorColor="primary"
              textColor="primary"
              centered
            >
              <Tab
                icon={<LocalGroceryStoreIcon />}
                label="จัดการสินค้า"
                value="1"
              />
              <Tab icon={<PieChartIcon />} label="วิเคราะห์สินค้า" value="2" />
              <Tab
                icon={<QueryBuilderIcon />}
                label="ประวัติการซื้อขาย"
                value="3"
              />
            </TabList>
          </Box>
          <TabPanel value="1"><Listproduct/></TabPanel>
          <TabPanel value="2">8796</TabPanel>
          <TabPanel value="3">87678678</TabPanel>
        </TabContext>
      </Box>
    </ThemeProvider>
  );
}
