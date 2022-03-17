import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import DirectionsBikeIcon from '@mui/icons-material/DirectionsBike';


const style = {
  backgroundColor: 'inherit',
  color: 'inherit',
  transform: 'translateZ(0)',
};

const Title = () => {
  return (
    <AppBar position="static" elevation={2} className="title" sx={style}>
      <Toolbar>
        <Typography variant="h3" component="div" sx={{ flexGrow: 1 }} >
          News on the go
        </Typography>
        <DirectionsBikeIcon />
      </Toolbar>
    </AppBar>
  )
}

export default Title;