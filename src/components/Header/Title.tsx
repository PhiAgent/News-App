import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import DirectionsBikeIcon from '@mui/icons-material/DirectionsBike';
import { Button } from '../controls';
import Stack from '@mui/material/Stack';
import useNews, { defaultState } from '../../context/context';


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

  const {
    chosen,
    username,
    setUser,
    setUserID,
    setFavorites,
    choose,
  } = useNews();

  // Will set user to empty in context
  const sendHome = () => {
    choose && choose(false);
  };

  // Will log user out
  const logOut = () => {
    setUser && setUser('');
    choose && choose(false);
    setUserID && setUserID(0);
  };


  return (
    <header>
      <AppBar position="static" elevation={2} className="title" sx={style}>
        <Toolbar sx={headStyle}>
          <Typography variant="h3" component="div" sx={{ flexGrow: 1 }} >
            News on the go
            <DirectionsBikeIcon fontSize="large" className="icon" />
          </Typography>
          <Stack direction='row' spacing={2} >
            {chosen &&
            <Button
              message="HOME"
              variant="contained"
              onClick={sendHome}
              color="primary"
              size="large"
            />}
            {
              username &&
              <Button
              message="LOGOUT"
              variant="contained"
              onClick={logOut}
              color="primary"
              size="large"
            />}
          </Stack>
        </Toolbar>
      </AppBar>
    </header>
  )
}

export default Title;