import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import { News } from '../NewsList/NewsList';

const Newslet = ({ id, category, source, author, title, description, url, urltoimage, publishedon}: News) => {

  return(
    <Box>
      <div>{description}</div>
    </Box>
  )
};

export default Newslet;