import React, { useEffect, useState } from 'react';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import { NewsList } from '../controls';
import useNews from '../../context/context';


const style = {
  width: '100%',
  overflow: 'auto',
  height: '600px',
  typography: 'body1',
  '& .MuiTabs-root': {
    borderBottom: 1,
    borderColor: 'divider',
    position: 'sticky'
  },
  '& .MuiTabPanel-root': {
    paddingX: 0,
  }
};


const Feed = () => {
  const { techNews, businessNews, worldNews, favorites, selected, setSelect } = useNews();

  const handleChange = (event: any, newSelected: string) => {
    setSelect && setSelect(newSelected);
  };

  return(
    <Stack direction='column' spacing='5' className="homepage">
      <div className="welcome-text">
        <div></div>
        <h3 className="welcome">
          Your Number one source of News!
        </h3>
        <div></div>
      </div>
      <Stack direction='row' spacing='5' className="tab-container" sx={{ width: '100%', overflow: 'hidden' }}>
        <Box sx={style}>
          <TabContext value={selected ? selected : ''}>
            <Box >
              <TabList onChange={handleChange} aria-label="lab API tabs example" className="tabList">
                <Tab label="TECHNOLOGY" value="1" />
                <Tab label="WORLD NEWS" value="2" />
                <Tab label="BUSINESS" value="3" />
                <Tab label="FAVORITES" value="4" />
              </TabList>
            </Box>
            <TabPanel value="1">
              {techNews && <NewsList news={techNews} faves={false}/>}
            </TabPanel>
            <TabPanel value="2">
              {worldNews && <NewsList news={worldNews} faves={false} />}
            </TabPanel>
            <TabPanel value="3">
              {businessNews && <NewsList news={businessNews} faves={false}/>}
            </TabPanel>
            <TabPanel value="4">
              {favorites && <NewsList news={favorites} faves={true}/>}
            </TabPanel>
          </TabContext>
        </Box>
      </Stack>
    </Stack>
  )
};

export default Feed;