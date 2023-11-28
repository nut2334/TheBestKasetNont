import * as React from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import { ThemeProvider } from '@mui/material/styles';
import myTheme from '../core-ui/theme';
import Login from "../pages/login";
import Register from "../pages/register";
import Logo from "../assets/karsetnont.png";

export default function LabTabs() {
  const [value, setValue] = React.useState('1');

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  return (
    <ThemeProvider theme={myTheme}>
    <Box sx={{ width: '100%', typography: 'body1' ,marginTop: 3}}>
      <div style={{textAlign: 'center'}}>
        <img src={Logo} height="auto" width="5%"/>
    </div>
      <TabContext value={value} >
        <Box>
          <TabList 
          onChange={handleChange} 
          aria-label="lab API tabs example" 
          indicatorColor='secondary' 
          textColor='secondary'
          centered
          >
            <Tab label="เข้าสู่ระบบ" value="1" />
            <Tab label="ลงทะเบียน" value="2" />
          </TabList>
        </Box>
        <TabPanel value="1"><Login/></TabPanel>
        <TabPanel value="2"><Register/></TabPanel>
      </TabContext>
    </Box>
    </ThemeProvider>
  );
}