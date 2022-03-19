import React from 'react';
import Stack from '@mui/material/Stack';
import { Tab } from '../controls';
import useNews from '../../context/context';

const Homepage = () => {

  const {choose, setSelect} = useNews()


  const setTech = () => {
    setSelect('1');
    choose && choose(true);
  };

  const setBusiness = () => {
    setSelect('3');
    choose && choose(true);
  }
  const setWorld = () => {
    setSelect('2');
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
          onClick={setTech}
          backgroundColor="#f97403"
          uniqClass="techTab"
          ariaLabel="Click to see Tech News"
        />
        <Tab
          text="WORLD NEWS"
          onClick={setWorld}
          backgroundColor="#ff17e4"
          uniqClass="worldNewsTab"
          ariaLabel="Click to see World News"
        />
        <Tab
          text="BUSINESS NEWS"
          onClick={setBusiness}
          backgroundColor="green"
          uniqClass="businessTab"
          ariaLabel="Click to see Business News"
        />
      </Stack>
    </Stack>
  )
};

export default Homepage;