import React from 'react';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Homepage from './Homepage';
import Login from './Login';


const style = {
  paddingTop: '15px',
  paddingBottom: '15px',
}

// chosen is a state that will be stored
// in context, upon clicking a buton on
// homepage, chosen will be set to true
// while chosen is true
// the appropriate feed will be displayed
// while chosen is true, homepage button will
// be displayed in the first grid

const Body = () => {

  return (
    <Grid container sx={style}>
      <Grid item xs={2}></Grid>
      <Grid item xs={8}>
        {/* <Homepage/> */}
        <Login/>
      </Grid>
      <Grid item xs={2}></Grid>
    </Grid>
  )
};

export default Body;