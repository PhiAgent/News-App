import React from 'react';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Homepage from './Homepage';
import Login from './Login';
import Stack from '@mui/material/Stack';
import Feed from './Feed';
import { Button } from '../controls';
import useNews from '../../context/context';


const style = {
  paddingTop: '15px',
  paddingBottom: '15px',
}


const Body = () => {

  const {username, chosen} = useNews();

  const display = () => {
    if(!username && !chosen){
      return <Login/>;
    } else if(username && !chosen){
      return <Homepage/>;
    } else {
      return <Feed/>;
    }
  }

  return (
    <Grid container sx={style}>
      <Grid item xs={1}></Grid>
      <Grid item xs={10}>
        {display()}
      </Grid>
      <Grid item xs={1}></Grid>
    </Grid>
  )
};

export default Body;