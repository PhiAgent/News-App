import React from 'react';

type Props = {
  backgroundColor: string
  // onClick: () => void
  text: string
}

const Tab = ({ text,backgroundColor }: Props) => {

  return(
    <div className="tab" style={{ backgroundColor}}>
      {text}
    </div>
  )
};

export default Tab;