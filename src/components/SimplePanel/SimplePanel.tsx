import React from 'react';
import { Tabs, Tab, Box } from '@mui/material';
import './SimplePanel.css';
import { Tabs as TabTypes } from '@/constants/types';

interface TransparentTabsInterface {
    currentTab: string;
    setTab: (tab: TabTypes) => void;
}
  
const TransparentTabs = ({
    currentTab = 'how-it-works',
    setTab,
}: TransparentTabsInterface) => {
  
    const handleChange = (event: React.SyntheticEvent, newValue: TabTypes) => {
        setTab(newValue);
    };
  
    return (
      <Box sx={{ minWidth: { xs: 320, sm: 480 }, bgcolor: 'transparent', display: 'flex', justifyContent: 'center'}}>
        <Tabs
          value={currentTab}
          onChange={handleChange}
          variant="scrollable"
          scrollButtons
          textColor='inherit'
          allowScrollButtonsMobile
          aria-label="scrollable force tabs example"
        >
          <Tab value='how-it-works' label="Process" sx={{ flex: 0.8, textAlign: 'center', '&.Mui-selected': {
              bgcolor: '#1e3c72', // Background when selected
              color: 'cyan', // Text color when selected
              fontWeight: 'bold',
            }}} />
          <Tab value='contact' label="Hire talent"sx={{ flex: 0.8, textAlign: 'center', '&.Mui-selected': {
              bgcolor: '#1e3c72', // Background when selected
              color: 'cyan', // Text color when selected
              fontWeight: 'bold',
            }}} />
          <Tab value='about' label="About" sx={{ flex: 0.8, textAlign: 'center', '&.Mui-selected': {
              bgcolor: '#1e3c72', // Background when selected
              color: 'cyan', // Text color when selected
              fontWeight: 'bold',
            }}} />
        </Tabs>
      </Box>
    );
  };

export default TransparentTabs;