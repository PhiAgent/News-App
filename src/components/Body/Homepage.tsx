import React from 'react';
import Stack from '@mui/material/Stack';
import { Tab } from '../controls';
import Typography from '@mui/material/Typography';
import useNews from '../../context/context';

const Homepage = () => {

  const {choose} = useNews()

  const handleClick = () => {
    choose && choose(true);
  }

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
          onClick={handleClick}
          backgroundColor="#f97403"
          uniqClass="techTab"
        />
        <Tab
          text="WORLD NEWS"
          onClick={handleClick}
          backgroundColor="#ff17e4"
          uniqClass="worldNewsTab"
        />
        <Tab
          text="BUSINESS NEWS"
          onClick={handleClick}
          backgroundColor="green"
          uniqClass="businessTab"
        />
      </Stack>
    </Stack>
  )
};

export default Homepage;