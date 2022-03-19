import React from 'react';
import Box from '@mui/material/Box';

type Props = {
  backgroundColor: string;
  onClick: () => void;
  text: string;
  uniqClass: string;
  ariaLabel: string;
}

const Tab = ({ text,backgroundColor, uniqClass, onClick, ariaLabel }: Props) => {

  return(
    <div
      className={`tab ${uniqClass}`}
      style={{ backgroundColor}}
      onClick={onClick}
      arial-label={ariaLabel}
    >
      {text}
    </div>
  )
};

export default Tab;