import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import DirectionsBikeIcon from '@mui/icons-material/DirectionsBike';
import { Button } from '../controls';
import Stack from '@mui/material/Stack';


const style = {
  backgroundColor: 'inherit',
  color: 'inherit',
  transform: 'translateZ(0)',
};

const headStyle = {
  display: 'flexbox',
  justifyContent: 'space-between',
  alignItems: 'center',
};

// logout will be displayed only when user is set

const Title = () => {

  // will set user to empty in context
  const handleSubmit = () => {};

  return (
    <AppBar position="static" elevation={2} className="title" sx={style}>
      <Toolbar sx={headStyle}>
        <Typography variant="h3" component="div" sx={{ flexGrow: 1 }} >
          News on the go
          <DirectionsBikeIcon fontSize="large" className="icon" />
        </Typography>
        <Stack direction='row' spacing={2} >
          <Button
            message="HOME"
            variant="contained"
            onClick={handleSubmit}
            color="primary"
            size="large"
          />
          <Button
            message="LOGOUT"
            variant="contained"
            onClick={handleSubmit}
            color="primary"
            size="large"
          />
        </Stack>
      </Toolbar>
    </AppBar>
  )
}

export default Title;