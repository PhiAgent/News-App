import React from 'react';

type Props = {
  backgroundColor: string;
  // onClick: () => void
  text: string;
  uniqClass: string;
}

const Tab = ({ text,backgroundColor, uniqClass }: Props) => {

  return(
    <div className={`tab ${uniqClass}`} style={{ backgroundColor}}>
      {text}
    </div>
  )
};

export default Tab;