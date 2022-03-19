import React from 'react';
import Box from '@mui/material/Box';

type Props = {
  backgroundColor: string;
  onClick: () => void
  text: string;
  uniqClass: string;
}

const Tab = ({ text,backgroundColor, uniqClass, onClick }: Props) => {

  return(
    <Box
      className={`tab ${uniqClass}`}
      style={{ backgroundColor}}
      onClick={onClick}
    >
      {text}
    </Box>
  )
};

export default Tab;