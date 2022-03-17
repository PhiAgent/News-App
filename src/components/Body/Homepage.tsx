import React from 'react';
import Stack from '@mui/material/Stack';
import Tab from '../Tab/Tab';
import Typography from '@mui/material/Typography';

const Homepage = () => {

  return (
    <Stack direction='column' spacing='5' className="homepage">
      <div className="welcome-text">
        <div></div>
        <h3 className="welcome">
          What news are you looking for?
        </h3>
        <div></div>
      </div>
      <Stack direction='row' spacing='5' className="tab-container">
        <Tab
          text="TECHNOLOGY NEWS"
          // onClick={}
          backgroundColor="#f97403"
        />
        <Tab
          text="WORLD NEWS"
          // onClick={}
          backgroundColor="#ff17e4"
        />
        <Tab
          text="BUSINESS NEWS"
          // onClick={}
          backgroundColor="green"
        />
      </Stack>
    </Stack>
  )
};

export default Homepage;